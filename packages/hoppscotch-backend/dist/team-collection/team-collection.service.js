"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamCollectionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const errors_1 = require("../errors");
const pubsub_service_1 = require("../pubsub/pubsub.service");
const utils_1 = require("../utils");
const E = require("fp-ts/Either");
const O = require("fp-ts/Option");
const client_1 = require("@prisma/client");
const utils_2 = require("../utils");
const team_service_1 = require("../team/team.service");
let TeamCollectionService = class TeamCollectionService {
    constructor(prisma, pubsub, teamService) {
        this.prisma = prisma;
        this.pubsub = pubsub;
        this.teamService = teamService;
        this.TITLE_LENGTH = 3;
    }
    generatePrismaQueryObjForFBCollFolder(folder, teamID, orderIndex) {
        var _a;
        return {
            title: folder.name,
            team: {
                connect: {
                    id: teamID,
                },
            },
            requests: {
                create: folder.requests.map((r, index) => ({
                    title: r.name,
                    team: {
                        connect: {
                            id: teamID,
                        },
                    },
                    request: r,
                    orderIndex: index + 1,
                })),
            },
            orderIndex: orderIndex,
            children: {
                create: folder.folders.map((f, index) => this.generatePrismaQueryObjForFBCollFolder(f, teamID, index + 1)),
            },
            data: (_a = folder.data) !== null && _a !== void 0 ? _a : undefined,
        };
    }
    async exportCollectionToJSONObject(teamID, collectionID) {
        const collection = await this.getCollection(collectionID);
        if (E.isLeft(collection))
            return E.left(errors_1.TEAM_INVALID_COLL_ID);
        const childrenCollection = await this.prisma.teamCollection.findMany({
            where: {
                teamID,
                parentID: collectionID,
            },
            orderBy: {
                orderIndex: 'asc',
            },
        });
        const childrenCollectionObjects = [];
        for (const coll of childrenCollection) {
            const result = await this.exportCollectionToJSONObject(teamID, coll.id);
            if (E.isLeft(result))
                return E.left(result.left);
            childrenCollectionObjects.push(result.right);
        }
        const requests = await this.prisma.teamRequest.findMany({
            where: {
                teamID,
                collectionID,
            },
            orderBy: {
                orderIndex: 'asc',
            },
        });
        const result = {
            name: collection.right.title,
            folders: childrenCollectionObjects,
            requests: requests.map((x) => x.request),
            data: JSON.stringify(collection.right.data),
        };
        return E.right(result);
    }
    async exportCollectionsToJSON(teamID) {
        const rootCollections = await this.prisma.teamCollection.findMany({
            where: {
                teamID,
                parentID: null,
            },
        });
        const rootCollectionObjects = [];
        for (const coll of rootCollections) {
            const result = await this.exportCollectionToJSONObject(teamID, coll.id);
            if (E.isLeft(result))
                return E.left(result.left);
            rootCollectionObjects.push(result.right);
        }
        return E.right(JSON.stringify(rootCollectionObjects));
    }
    async importCollectionsFromJSON(jsonString, destTeamID, destCollectionID) {
        const collectionsList = (0, utils_2.stringToJson)(jsonString);
        if (E.isLeft(collectionsList))
            return E.left(errors_1.TEAM_COLL_INVALID_JSON);
        if (!Array.isArray(collectionsList.right))
            return E.left(errors_1.TEAM_COLL_INVALID_JSON);
        const count = !destCollectionID
            ? await this.getRootCollectionsCount(destTeamID)
            : await this.getChildCollectionsCount(destCollectionID);
        const queryList = collectionsList.right.map((x) => this.generatePrismaQueryObjForFBCollFolder(x, destTeamID, count + 1));
        const parent = destCollectionID
            ? {
                connect: {
                    id: destCollectionID,
                },
            }
            : undefined;
        const teamCollections = await this.prisma.$transaction(queryList.map((x) => this.prisma.teamCollection.create({
            data: Object.assign(Object.assign({}, x), { parent }),
        })));
        teamCollections.forEach((collection) => this.pubsub.publish(`team_coll/${destTeamID}/coll_added`, this.cast(collection)));
        return E.right(true);
    }
    async replaceCollectionsWithJSON(jsonString, destTeamID, destCollectionID) {
        const collectionsList = (0, utils_2.stringToJson)(jsonString);
        if (E.isLeft(collectionsList))
            return E.left(errors_1.TEAM_COLL_INVALID_JSON);
        if (!Array.isArray(collectionsList.right))
            return E.left(errors_1.TEAM_COLL_INVALID_JSON);
        const childrenCollection = await this.prisma.teamCollection.findMany({
            where: {
                teamID: destTeamID,
                parentID: destCollectionID,
            },
        });
        for (const coll of childrenCollection) {
            const deletedTeamCollection = await this.deleteCollection(coll.id);
            if (E.isLeft(deletedTeamCollection))
                return E.left(deletedTeamCollection.left);
        }
        const count = !destCollectionID
            ? await this.getRootCollectionsCount(destTeamID)
            : await this.getChildCollectionsCount(destCollectionID);
        const queryList = collectionsList.right.map((x) => this.generatePrismaQueryObjForFBCollFolder(x, destTeamID, count + 1));
        const parent = destCollectionID
            ? {
                connect: {
                    id: destCollectionID,
                },
            }
            : undefined;
        const teamCollections = await this.prisma.$transaction(queryList.map((x) => this.prisma.teamCollection.create({
            data: Object.assign(Object.assign({}, x), { parent }),
        })));
        teamCollections.forEach((collections) => this.pubsub.publish(`team_coll/${destTeamID}/coll_added`, this.cast(collections)));
        return E.right(true);
    }
    cast(teamCollection) {
        return {
            id: teamCollection.id,
            title: teamCollection.title,
            parentID: teamCollection.parentID,
            data: !teamCollection.data ? null : JSON.stringify(teamCollection.data),
        };
    }
    async getTeamOfCollection(collectionID) {
        try {
            const teamCollection = await this.prisma.teamCollection.findUnique({
                where: {
                    id: collectionID,
                },
                include: {
                    team: true,
                },
            });
            return E.right(teamCollection.team);
        }
        catch (error) {
            return E.left(errors_1.TEAM_INVALID_COLL_ID);
        }
    }
    async getParentOfCollection(collectionID) {
        const teamCollection = await this.prisma.teamCollection.findUnique({
            where: {
                id: collectionID,
            },
            include: {
                parent: true,
            },
        });
        if (!teamCollection)
            return null;
        return !teamCollection.parent ? null : this.cast(teamCollection.parent);
    }
    async getChildrenOfCollection(collectionID, cursor, take) {
        const res = await this.prisma.teamCollection.findMany({
            where: {
                parentID: collectionID,
            },
            orderBy: {
                orderIndex: 'asc',
            },
            take: take,
            skip: cursor ? 1 : 0,
            cursor: cursor ? { id: cursor } : undefined,
        });
        const childCollections = res.map((teamCollection) => this.cast(teamCollection));
        return childCollections;
    }
    async getTeamRootCollections(teamID, cursor, take) {
        const res = await this.prisma.teamCollection.findMany({
            where: {
                teamID,
                parentID: null,
            },
            orderBy: {
                orderIndex: 'asc',
            },
            take: take,
            skip: cursor ? 1 : 0,
            cursor: cursor ? { id: cursor } : undefined,
        });
        const teamCollections = res.map((teamCollection) => this.cast(teamCollection));
        return teamCollections;
    }
    async getCollection(collectionID) {
        try {
            const teamCollection = await this.prisma.teamCollection.findUniqueOrThrow({
                where: {
                    id: collectionID,
                },
            });
            return E.right(teamCollection);
        }
        catch (error) {
            return E.left(errors_1.TEAM_COLL_NOT_FOUND);
        }
    }
    async isOwnerCheck(collectionID, teamID) {
        try {
            await this.prisma.teamCollection.findFirstOrThrow({
                where: {
                    id: collectionID,
                    teamID,
                },
            });
            return O.some(true);
        }
        catch (error) {
            return O.none;
        }
    }
    async getChildCollectionsCount(collectionID) {
        const childCollectionCount = await this.prisma.teamCollection.findMany({
            where: { parentID: collectionID },
            orderBy: {
                orderIndex: 'desc',
            },
        });
        if (!childCollectionCount.length)
            return 0;
        return childCollectionCount[0].orderIndex;
    }
    async getRootCollectionsCount(teamID) {
        const rootCollectionCount = await this.prisma.teamCollection.findMany({
            where: { teamID, parentID: null },
            orderBy: {
                orderIndex: 'desc',
            },
        });
        if (!rootCollectionCount.length)
            return 0;
        return rootCollectionCount[0].orderIndex;
    }
    async createCollection(teamID, title, data = null, parentTeamCollectionID) {
        const isTitleValid = (0, utils_1.isValidLength)(title, this.TITLE_LENGTH);
        if (!isTitleValid)
            return E.left(errors_1.TEAM_COLL_SHORT_TITLE);
        if (parentTeamCollectionID !== null) {
            const isOwner = await this.isOwnerCheck(parentTeamCollectionID, teamID);
            if (O.isNone(isOwner))
                return E.left(errors_1.TEAM_NOT_OWNER);
        }
        if (data === '')
            return E.left(errors_1.TEAM_COLL_DATA_INVALID);
        if (data) {
            const jsonReq = (0, utils_2.stringToJson)(data);
            if (E.isLeft(jsonReq))
                return E.left(errors_1.TEAM_COLL_DATA_INVALID);
            data = jsonReq.right;
        }
        const isParent = parentTeamCollectionID
            ? {
                connect: {
                    id: parentTeamCollectionID,
                },
            }
            : undefined;
        const teamCollection = await this.prisma.teamCollection.create({
            data: {
                title: title,
                team: {
                    connect: {
                        id: teamID,
                    },
                },
                parent: isParent,
                data: data !== null && data !== void 0 ? data : undefined,
                orderIndex: !parentTeamCollectionID
                    ? (await this.getRootCollectionsCount(teamID)) + 1
                    : (await this.getChildCollectionsCount(parentTeamCollectionID)) + 1,
            },
        });
        this.pubsub.publish(`team_coll/${teamID}/coll_added`, this.cast(teamCollection));
        return E.right(this.cast(teamCollection));
    }
    async renameCollection(collectionID, newTitle) {
        const isTitleValid = (0, utils_1.isValidLength)(newTitle, this.TITLE_LENGTH);
        if (!isTitleValid)
            return E.left(errors_1.TEAM_COLL_SHORT_TITLE);
        try {
            const updatedTeamCollection = await this.prisma.teamCollection.update({
                where: {
                    id: collectionID,
                },
                data: {
                    title: newTitle,
                },
            });
            this.pubsub.publish(`team_coll/${updatedTeamCollection.teamID}/coll_updated`, this.cast(updatedTeamCollection));
            return E.right(this.cast(updatedTeamCollection));
        }
        catch (error) {
            return E.left(errors_1.TEAM_COLL_NOT_FOUND);
        }
    }
    async updateOrderIndex(parentID, orderIndexCondition, dataCondition) {
        const updatedTeamCollection = await this.prisma.teamCollection.updateMany({
            where: {
                parentID: parentID,
                orderIndex: orderIndexCondition,
            },
            data: { orderIndex: dataCondition },
        });
        return updatedTeamCollection;
    }
    async removeTeamCollection(collectionID) {
        try {
            const deletedTeamCollection = await this.prisma.teamCollection.delete({
                where: {
                    id: collectionID,
                },
            });
            return E.right(deletedTeamCollection);
        }
        catch (error) {
            return E.left(errors_1.TEAM_COLL_NOT_FOUND);
        }
    }
    async deleteCollectionData(collection) {
        const childCollectionList = await this.prisma.teamCollection.findMany({
            where: {
                parentID: collection.id,
            },
        });
        await Promise.all(childCollectionList.map((coll) => this.deleteCollection(coll.id)));
        await this.prisma.teamRequest.deleteMany({
            where: {
                collectionID: collection.id,
            },
        });
        const deletedTeamCollection = await this.removeTeamCollection(collection.id);
        if (E.isLeft(deletedTeamCollection))
            return E.left(deletedTeamCollection.left);
        this.pubsub.publish(`team_coll/${deletedTeamCollection.right.teamID}/coll_removed`, deletedTeamCollection.right.id);
        return E.right(deletedTeamCollection.right);
    }
    async deleteCollection(collectionID) {
        const collection = await this.getCollection(collectionID);
        if (E.isLeft(collection))
            return E.left(collection.left);
        const collectionData = await this.deleteCollectionData(collection.right);
        if (E.isLeft(collectionData))
            return E.left(collectionData.left);
        await this.updateOrderIndex(collectionData.right.parentID, { gt: collectionData.right.orderIndex }, { decrement: 1 });
        return E.right(true);
    }
    async changeParent(collection, parentCollectionID) {
        try {
            let collectionCount;
            if (!parentCollectionID)
                collectionCount = await this.getRootCollectionsCount(collection.teamID);
            collectionCount = await this.getChildCollectionsCount(parentCollectionID);
            const updatedCollection = await this.prisma.teamCollection.update({
                where: {
                    id: collection.id,
                },
                data: {
                    parentID: parentCollectionID,
                    orderIndex: collectionCount + 1,
                },
            });
            return E.right(this.cast(updatedCollection));
        }
        catch (error) {
            return E.left(errors_1.TEAM_COLL_NOT_FOUND);
        }
    }
    async isParent(collection, destCollection) {
        if (collection === destCollection) {
            return O.none;
        }
        if (destCollection.parentID !== null) {
            if (destCollection.parentID === collection.id) {
                return O.none;
            }
            const parentCollection = await this.getCollection(destCollection.parentID);
            if (E.isLeft(parentCollection)) {
                return O.none;
            }
            return await this.isParent(collection, parentCollection.right);
        }
        else {
            return O.some(true);
        }
    }
    async moveCollection(collectionID, destCollectionID) {
        const collection = await this.getCollection(collectionID);
        if (E.isLeft(collection))
            return E.left(collection.left);
        if (!destCollectionID) {
            if (!collection.right.parentID) {
                return E.left(errors_1.TEAM_COL_ALREADY_ROOT);
            }
            await this.updateOrderIndex(collection.right.parentID, { gt: collection.right.orderIndex }, { decrement: 1 });
            const updatedCollection = await this.changeParent(collection.right, null);
            if (E.isLeft(updatedCollection))
                return E.left(updatedCollection.left);
            this.pubsub.publish(`team_coll/${collection.right.teamID}/coll_moved`, updatedCollection.right);
            return E.right(updatedCollection.right);
        }
        if (collectionID === destCollectionID) {
            return E.left(errors_1.TEAM_COLL_DEST_SAME);
        }
        const destCollection = await this.getCollection(destCollectionID);
        if (E.isLeft(destCollection))
            return E.left(errors_1.TEAM_COLL_NOT_FOUND);
        if (collection.right.teamID !== destCollection.right.teamID) {
            return E.left(errors_1.TEAM_COLL_NOT_SAME_TEAM);
        }
        const checkIfParent = await this.isParent(collection.right, destCollection.right);
        if (O.isNone(checkIfParent)) {
            return E.left(errors_1.TEAM_COLL_IS_PARENT_COLL);
        }
        await this.updateOrderIndex(collection.right.parentID, { gt: collection.right.orderIndex }, { decrement: 1 });
        const updatedCollection = await this.changeParent(collection.right, destCollection.right.id);
        if (E.isLeft(updatedCollection))
            return E.left(updatedCollection.left);
        this.pubsub.publish(`team_coll/${collection.right.teamID}/coll_moved`, updatedCollection.right);
        return E.right(updatedCollection.right);
    }
    getCollectionCount(collectionID) {
        return this.prisma.teamCollection.count({
            where: { parentID: collectionID },
        });
    }
    async updateCollectionOrder(collectionID, nextCollectionID) {
        if (collectionID === nextCollectionID)
            return E.left(errors_1.TEAM_COL_SAME_NEXT_COLL);
        const collection = await this.getCollection(collectionID);
        if (E.isLeft(collection))
            return E.left(collection.left);
        if (!nextCollectionID) {
            try {
                await this.prisma.$transaction(async (tx) => {
                    await tx.teamCollection.updateMany({
                        where: {
                            parentID: collection.right.parentID,
                            orderIndex: {
                                gte: collection.right.orderIndex + 1,
                            },
                        },
                        data: {
                            orderIndex: { decrement: 1 },
                        },
                    });
                    const updatedTeamCollection = await tx.teamCollection.update({
                        where: { id: collection.right.id },
                        data: {
                            orderIndex: await this.getCollectionCount(collection.right.parentID),
                        },
                    });
                });
                this.pubsub.publish(`team_coll/${collection.right.teamID}/coll_order_updated`, {
                    collection: this.cast(collection.right),
                    nextCollection: null,
                });
                return E.right(true);
            }
            catch (error) {
                return E.left(errors_1.TEAM_COL_REORDERING_FAILED);
            }
        }
        const subsequentCollection = await this.getCollection(nextCollectionID);
        if (E.isLeft(subsequentCollection))
            return E.left(errors_1.TEAM_COLL_NOT_FOUND);
        if (collection.right.teamID !== subsequentCollection.right.teamID)
            return E.left(errors_1.TEAM_COLL_NOT_SAME_TEAM);
        try {
            await this.prisma.$transaction(async (tx) => {
                const isMovingUp = subsequentCollection.right.orderIndex < collection.right.orderIndex;
                const updateFrom = isMovingUp
                    ? subsequentCollection.right.orderIndex
                    : collection.right.orderIndex + 1;
                const updateTo = isMovingUp
                    ? collection.right.orderIndex - 1
                    : subsequentCollection.right.orderIndex - 1;
                await tx.teamCollection.updateMany({
                    where: {
                        parentID: collection.right.parentID,
                        orderIndex: { gte: updateFrom, lte: updateTo },
                    },
                    data: {
                        orderIndex: isMovingUp ? { increment: 1 } : { decrement: 1 },
                    },
                });
                const updatedTeamCollection = await tx.teamCollection.update({
                    where: { id: collection.right.id },
                    data: {
                        orderIndex: isMovingUp
                            ? subsequentCollection.right.orderIndex
                            : subsequentCollection.right.orderIndex - 1,
                    },
                });
            });
            this.pubsub.publish(`team_coll/${collection.right.teamID}/coll_order_updated`, {
                collection: this.cast(collection.right),
                nextCollection: this.cast(subsequentCollection.right),
            });
            return E.right(true);
        }
        catch (error) {
            return E.left(errors_1.TEAM_COL_REORDERING_FAILED);
        }
    }
    async totalCollectionsInTeam(teamID) {
        const collCount = await this.prisma.teamCollection.count({
            where: {
                teamID: teamID,
            },
        });
        return collCount;
    }
    async getTeamCollectionsCount() {
        const teamCollectionsCount = this.prisma.teamCollection.count();
        return teamCollectionsCount;
    }
    async updateTeamCollection(collectionID, collectionData = null, newTitle = null) {
        try {
            if (newTitle != null) {
                const isTitleValid = (0, utils_1.isValidLength)(newTitle, this.TITLE_LENGTH);
                if (!isTitleValid)
                    return E.left(errors_1.TEAM_COLL_SHORT_TITLE);
            }
            if (collectionData === '')
                return E.left(errors_1.TEAM_COLL_DATA_INVALID);
            if (collectionData) {
                const jsonReq = (0, utils_2.stringToJson)(collectionData);
                if (E.isLeft(jsonReq))
                    return E.left(errors_1.TEAM_COLL_DATA_INVALID);
                collectionData = jsonReq.right;
            }
            const updatedTeamCollection = await this.prisma.teamCollection.update({
                where: { id: collectionID },
                data: {
                    data: collectionData !== null && collectionData !== void 0 ? collectionData : undefined,
                    title: newTitle !== null && newTitle !== void 0 ? newTitle : undefined,
                },
            });
            this.pubsub.publish(`team_coll/${updatedTeamCollection.teamID}/coll_updated`, this.cast(updatedTeamCollection));
            return E.right(this.cast(updatedTeamCollection));
        }
        catch (e) {
            return E.left(errors_1.TEAM_COLL_NOT_FOUND);
        }
    }
    async searchByTitle(searchQuery, teamID, take = 10, skip = 0) {
        const searchResults = [];
        const matchedCollections = await this.searchCollections(searchQuery, teamID, take, skip);
        if (E.isLeft(matchedCollections))
            return E.left({
                message: matchedCollections.left,
                statusCode: common_1.HttpStatus.NOT_FOUND,
            });
        searchResults.push(...matchedCollections.right);
        const matchedRequests = await this.searchRequests(searchQuery, teamID, take, skip);
        if (E.isLeft(matchedRequests))
            return E.left({
                message: matchedRequests.left,
                statusCode: common_1.HttpStatus.NOT_FOUND,
            });
        searchResults.push(...matchedRequests.right);
        const searchResultsWithTree = [];
        for (let i = 0; i < searchResults.length; i++) {
            const fetchedParentTree = await this.fetchParentTree(searchResults[i]);
            if (E.isLeft(fetchedParentTree))
                return E.left({
                    message: fetchedParentTree.left,
                    statusCode: common_1.HttpStatus.NOT_FOUND,
                });
            searchResultsWithTree.push({
                type: searchResults[i].type,
                title: searchResults[i].title,
                method: searchResults[i].method,
                id: searchResults[i].id,
                path: !fetchedParentTree
                    ? []
                    : fetchedParentTree.right,
            });
        }
        return E.right({ data: searchResultsWithTree });
    }
    async searchCollections(searchQuery, teamID, take, skip) {
        const query = client_1.Prisma.sql `
    SELECT
      id,title,'collection' AS type
    FROM
      "TeamCollection"
    WHERE
      "TeamCollection"."teamID"=${teamID}
      AND
        title ILIKE ${`%${(0, utils_1.escapeSqlLikeString)(searchQuery)}%`}
    ORDER BY
      similarity(title, ${searchQuery})
    LIMIT ${take}
    OFFSET ${skip === 0 ? 0 : (skip - 1) * take};
  `;
        try {
            const res = await this.prisma.$queryRaw(query);
            return E.right(res);
        }
        catch (error) {
            return E.left(errors_1.TEAM_COL_SEARCH_FAILED);
        }
    }
    async searchRequests(searchQuery, teamID, take, skip) {
        const query = client_1.Prisma.sql `
    SELECT
      id,title,request->>'method' as method,'request' AS type
    FROM
      "TeamRequest"
    WHERE
      "TeamRequest"."teamID"=${teamID}
      AND
        title ILIKE ${`%${(0, utils_1.escapeSqlLikeString)(searchQuery)}%`}
    ORDER BY
      similarity(title, ${searchQuery})
    LIMIT ${take}
    OFFSET ${skip === 0 ? 0 : (skip - 1) * take};
  `;
        try {
            const res = await this.prisma.$queryRaw(query);
            return E.right(res);
        }
        catch (error) {
            return E.left(errors_1.TEAM_REQ_SEARCH_FAILED);
        }
    }
    async fetchParentTree(searchResult) {
        return searchResult.type === 'collection'
            ? await this.fetchCollectionParentTree(searchResult.id)
            : await this.fetchRequestParentTree(searchResult.id);
    }
    async fetchCollectionParentTree(id) {
        try {
            const query = client_1.Prisma.sql `
      WITH RECURSIVE collection_tree AS (
        SELECT tc.id, tc."parentID", tc.title
        FROM "TeamCollection" AS tc
        JOIN "TeamCollection" AS tr ON tc.id = tr."parentID"
        WHERE tr.id = ${id}

        UNION ALL

        SELECT parent.id,  parent."parentID", parent.title
        FROM "TeamCollection" AS parent
        JOIN collection_tree AS ct ON parent.id = ct."parentID"
      )
      SELECT * FROM collection_tree;
      `;
            const res = await this.prisma.$queryRaw(query);
            const collectionParentTree = this.generateParentTree(res);
            return E.right(collectionParentTree);
        }
        catch (error) {
            E.left(errors_1.TEAM_COLL_PARENT_TREE_GEN_FAILED);
        }
    }
    generateParentTree(parentCollections) {
        function findChildren(id) {
            const collection = parentCollections.filter((item) => item.id === id)[0];
            if (collection.parentID == null) {
                return [
                    {
                        id: collection.id,
                        title: collection.title,
                        type: 'collection',
                        path: [],
                    },
                ];
            }
            const res = [
                {
                    id: collection.id,
                    title: collection.title,
                    type: 'collection',
                    path: findChildren(collection.parentID),
                },
            ];
            return res;
        }
        if (parentCollections.length > 0) {
            if (parentCollections[0].parentID == null) {
                return [
                    {
                        id: parentCollections[0].id,
                        title: parentCollections[0].title,
                        type: 'collection',
                        path: [],
                    },
                ];
            }
            return [
                {
                    id: parentCollections[0].id,
                    title: parentCollections[0].title,
                    type: 'collection',
                    path: findChildren(parentCollections[0].parentID),
                },
            ];
        }
        return [];
    }
    async fetchRequestParentTree(id) {
        try {
            const query = client_1.Prisma.sql `
      WITH RECURSIVE request_collection_tree AS (
        SELECT tc.id, tc."parentID", tc.title
        FROM "TeamCollection" AS tc
        JOIN "TeamRequest" AS tr ON tc.id = tr."collectionID"
        WHERE tr.id = ${id}

        UNION ALL

        SELECT parent.id, parent."parentID", parent.title
        FROM "TeamCollection" AS parent
        JOIN request_collection_tree AS ct ON parent.id = ct."parentID"
      )
      SELECT * FROM request_collection_tree;

      `;
            const res = await this.prisma.$queryRaw(query);
            const requestParentTree = this.generateParentTree(res);
            return E.right(requestParentTree);
        }
        catch (error) {
            return E.left(errors_1.TEAM_REQ_PARENT_TREE_GEN_FAILED);
        }
    }
    async getAllRequestsInCollection(collectionID) {
        const dbTeamRequests = await this.prisma.teamRequest.findMany({
            where: {
                collectionID: collectionID,
            },
            orderBy: {
                orderIndex: 'asc',
            },
        });
        const teamRequests = dbTeamRequests.map((tr) => {
            return {
                id: tr.id,
                collectionID: tr.collectionID,
                teamID: tr.teamID,
                title: tr.title,
                request: JSON.stringify(tr.request),
            };
        });
        return teamRequests;
    }
    async getCollectionTreeForCLI(parentID) {
        const childCollections = await this.prisma.teamCollection.findMany({
            where: { parentID },
            orderBy: { orderIndex: 'asc' },
        });
        const response = [];
        for (const collection of childCollections) {
            const folder = {
                id: collection.id,
                data: collection.data === null ? null : JSON.stringify(collection.data),
                title: collection.title,
                parentID: collection.parentID,
                folders: await this.getCollectionTreeForCLI(collection.id),
                requests: await this.getAllRequestsInCollection(collection.id),
            };
            response.push(folder);
        }
        return response;
    }
    async getCollectionForCLI(collectionID, userUid) {
        try {
            const collection = await this.prisma.teamCollection.findUniqueOrThrow({
                where: { id: collectionID },
            });
            const teamMember = await this.teamService.getTeamMember(collection.teamID, userUid);
            if (!teamMember)
                return E.left(errors_1.TEAM_MEMBER_NOT_FOUND);
            return E.right({
                id: collection.id,
                data: collection.data === null ? null : JSON.stringify(collection.data),
                title: collection.title,
                parentID: collection.parentID,
                folders: await this.getCollectionTreeForCLI(collection.id),
                requests: await this.getAllRequestsInCollection(collection.id),
            });
        }
        catch (error) {
            return E.left(errors_1.TEAM_COLL_NOT_FOUND);
        }
    }
};
TeamCollectionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        pubsub_service_1.PubSubService,
        team_service_1.TeamService])
], TeamCollectionService);
exports.TeamCollectionService = TeamCollectionService;
//# sourceMappingURL=team-collection.service.js.map
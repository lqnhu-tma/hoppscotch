import { PrismaService } from 'src/prisma/prisma.service';
import { AuthUser } from 'src/types/AuthUser';
import * as E from 'fp-ts/Either';
import { PubSubService } from 'src/pubsub/pubsub.service';
import { ReqType as DBReqType } from '@prisma/client';
import { UserCollection as UserCollectionModel, UserCollectionExportJSONData } from './user-collections.model';
import { ReqType } from 'src/types/RequestTypes';
export declare class UserCollectionService {
    private readonly prisma;
    private readonly pubsub;
    constructor(prisma: PrismaService, pubsub: PubSubService);
    TITLE_LENGTH: number;
    private cast;
    private getChildCollectionsCount;
    private getRootCollectionsCount;
    private isOwnerCheck;
    getUserOfCollection(collectionID: string): Promise<E.Right<any> | E.Left<"user/not_found">>;
    getParentOfUserCollection(collectionID: string): Promise<UserCollectionModel>;
    getChildrenOfUserCollection(collectionID: string, cursor: string | null, take: number, type: ReqType): Promise<any>;
    getUserCollection(collectionID: string): Promise<E.Right<any> | E.Left<"user_coll/not_found">>;
    createUserCollection(user: AuthUser, title: string, data: string | null, parentUserCollectionID: string | null, type: ReqType): Promise<E.Left<"user_coll/not_found"> | E.Left<"user_coll/short_title"> | E.Left<"user_coll/user_coll_data_invalid"> | E.Left<"user_coll/user_not_owner"> | E.Left<"user_coll/type_mismatch"> | E.Right<UserCollectionModel>>;
    getUserRootCollections(user: AuthUser, cursor: string | null, take: number, type: ReqType): Promise<any>;
    getUserChildCollections(user: AuthUser, userCollectionID: string, cursor: string | null, take: number, type: ReqType): Promise<any>;
    renameUserCollection(newTitle: string, userCollectionID: string, userID: string): Promise<E.Left<"user_coll/not_found"> | E.Left<"user_coll/short_title"> | E.Left<"user_coll/user_not_owner"> | E.Right<UserCollectionModel>>;
    private removeUserCollection;
    private deleteCollectionData;
    deleteUserCollection(collectionID: string, userID: string): Promise<E.Right<boolean> | E.Left<"user_coll/not_found"> | E.Left<"user_coll/user_not_owner">>;
    private changeParent;
    private isParent;
    private updateOrderIndex;
    moveUserCollection(userCollectionID: string, destCollectionID: string | null, userID: string): Promise<E.Left<"user_coll/not_found"> | E.Left<"user_coll/user_not_owner"> | E.Left<"user_coll/type_mismatch"> | E.Right<UserCollectionModel> | E.Left<"user_coll/target_user_collection_is_already_root_user_collection"> | E.Left<"user_coll/target_and_destination_user_collection_are_same"> | E.Left<"user_coll/not_same_user"> | E.Left<"user_coll/user_collection_is_parent_coll">>;
    getCollectionCount(collectionID: string): Promise<number>;
    updateUserCollectionOrder(collectionID: string, nextCollectionID: string | null, userID: string): Promise<E.Right<boolean> | E.Left<"user_coll/not_found"> | E.Left<"user_coll/user_not_owner"> | E.Left<"user_coll/type_mismatch"> | E.Left<"user_coll/not_same_user"> | E.Left<"user_coll/user_collection_and_next_user_collection_are_same"> | E.Left<"user_coll/reordering_failed">>;
    private exportUserCollectionToJSONObject;
    exportUserCollectionsToJSON(userUID: string, collectionID: string | null, reqType: ReqType): Promise<E.Left<string> | E.Right<UserCollectionExportJSONData>>;
    private generatePrismaQueryObj;
    importCollectionsFromJSON(jsonString: string, userID: string, destCollectionID: string | null, reqType: DBReqType): Promise<E.Left<string> | E.Right<boolean>>;
    updateUserCollection(newTitle: string, collectionData: string | null, userCollectionID: string, userID: string): Promise<E.Left<"user_coll/not_found"> | E.Left<"user_coll/short_title"> | E.Left<"user_coll/user_coll_data_invalid"> | E.Left<"user_coll/user_not_owner"> | E.Right<UserCollectionModel>>;
}

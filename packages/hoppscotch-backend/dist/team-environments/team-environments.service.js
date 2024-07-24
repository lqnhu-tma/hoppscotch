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
exports.TeamEnvironmentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const pubsub_service_1 = require("../pubsub/pubsub.service");
const errors_1 = require("../errors");
const E = require("fp-ts/Either");
const utils_1 = require("../utils");
const team_service_1 = require("../team/team.service");
let TeamEnvironmentsService = class TeamEnvironmentsService {
    constructor(prisma, pubsub, teamService) {
        this.prisma = prisma;
        this.pubsub = pubsub;
        this.teamService = teamService;
        this.TITLE_LENGTH = 3;
    }
    cast(teamEnvironment) {
        return {
            id: teamEnvironment.id,
            name: teamEnvironment.name,
            teamID: teamEnvironment.teamID,
            variables: JSON.stringify(teamEnvironment.variables),
        };
    }
    async getTeamEnvironment(id) {
        try {
            const teamEnvironment = await this.prisma.teamEnvironment.findFirstOrThrow({
                where: { id },
            });
            return E.right(teamEnvironment);
        }
        catch (error) {
            return E.left(errors_1.TEAM_ENVIRONMENT_NOT_FOUND);
        }
    }
    async createTeamEnvironment(name, teamID, variables) {
        const isTitleValid = (0, utils_1.isValidLength)(name, this.TITLE_LENGTH);
        if (!isTitleValid)
            return E.left(errors_1.TEAM_ENVIRONMENT_SHORT_NAME);
        const result = await this.prisma.teamEnvironment.create({
            data: {
                name: name,
                teamID: teamID,
                variables: JSON.parse(variables),
            },
        });
        const createdTeamEnvironment = this.cast(result);
        this.pubsub.publish(`team_environment/${createdTeamEnvironment.teamID}/created`, createdTeamEnvironment);
        return E.right(createdTeamEnvironment);
    }
    async deleteTeamEnvironment(id) {
        try {
            const result = await this.prisma.teamEnvironment.delete({
                where: {
                    id: id,
                },
            });
            const deletedTeamEnvironment = this.cast(result);
            this.pubsub.publish(`team_environment/${deletedTeamEnvironment.teamID}/deleted`, deletedTeamEnvironment);
            return E.right(true);
        }
        catch (error) {
            return E.left(errors_1.TEAM_ENVIRONMENT_NOT_FOUND);
        }
    }
    async updateTeamEnvironment(id, name, variables) {
        try {
            const isTitleValid = (0, utils_1.isValidLength)(name, this.TITLE_LENGTH);
            if (!isTitleValid)
                return E.left(errors_1.TEAM_ENVIRONMENT_SHORT_NAME);
            const result = await this.prisma.teamEnvironment.update({
                where: { id: id },
                data: {
                    name,
                    variables: JSON.parse(variables),
                },
            });
            const updatedTeamEnvironment = this.cast(result);
            this.pubsub.publish(`team_environment/${updatedTeamEnvironment.teamID}/updated`, updatedTeamEnvironment);
            return E.right(updatedTeamEnvironment);
        }
        catch (error) {
            return E.left(errors_1.TEAM_ENVIRONMENT_NOT_FOUND);
        }
    }
    async deleteAllVariablesFromTeamEnvironment(id) {
        try {
            const result = await this.prisma.teamEnvironment.update({
                where: { id: id },
                data: {
                    variables: [],
                },
            });
            const teamEnvironment = this.cast(result);
            this.pubsub.publish(`team_environment/${teamEnvironment.teamID}/updated`, teamEnvironment);
            return E.right(teamEnvironment);
        }
        catch (error) {
            return E.left(errors_1.TEAM_ENVIRONMENT_NOT_FOUND);
        }
    }
    async createDuplicateEnvironment(id) {
        try {
            const environment = await this.prisma.teamEnvironment.findFirstOrThrow({
                where: {
                    id: id,
                },
            });
            const result = await this.prisma.teamEnvironment.create({
                data: {
                    name: environment.name,
                    teamID: environment.teamID,
                    variables: environment.variables,
                },
            });
            const duplicatedTeamEnvironment = this.cast(result);
            this.pubsub.publish(`team_environment/${duplicatedTeamEnvironment.teamID}/created`, duplicatedTeamEnvironment);
            return E.right(duplicatedTeamEnvironment);
        }
        catch (error) {
            return E.left(errors_1.TEAM_ENVIRONMENT_NOT_FOUND);
        }
    }
    async fetchAllTeamEnvironments(teamID) {
        const result = await this.prisma.teamEnvironment.findMany({
            where: {
                teamID: teamID,
            },
        });
        const teamEnvironments = result.map((item) => {
            return this.cast(item);
        });
        return teamEnvironments;
    }
    async totalEnvsInTeam(teamID) {
        const envCount = await this.prisma.teamEnvironment.count({
            where: {
                teamID: teamID,
            },
        });
        return envCount;
    }
    async getTeamEnvironmentForCLI(id, userUid) {
        try {
            const teamEnvironment = await this.prisma.teamEnvironment.findFirstOrThrow({
                where: { id },
            });
            const teamMember = await this.teamService.getTeamMember(teamEnvironment.teamID, userUid);
            if (!teamMember)
                return E.left(errors_1.TEAM_MEMBER_NOT_FOUND);
            return E.right(teamEnvironment);
        }
        catch (error) {
            return E.left(errors_1.TEAM_ENVIRONMENT_NOT_FOUND);
        }
    }
};
TeamEnvironmentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        pubsub_service_1.PubSubService,
        team_service_1.TeamService])
], TeamEnvironmentsService);
exports.TeamEnvironmentsService = TeamEnvironmentsService;
//# sourceMappingURL=team-environments.service.js.map
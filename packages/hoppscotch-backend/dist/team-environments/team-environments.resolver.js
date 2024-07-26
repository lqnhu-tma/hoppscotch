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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamEnvironmentsResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const throttler_1 = require("@nestjs/throttler");
const gql_auth_guard_1 = require("../guards/gql-auth.guard");
const gql_throttler_guard_1 = require("../guards/gql-throttler.guard");
const pubsub_service_1 = require("../pubsub/pubsub.service");
const requires_team_role_decorator_1 = require("../team/decorators/requires-team-role.decorator");
const gql_team_member_guard_1 = require("../team/guards/gql-team-member.guard");
const team_model_1 = require("../team/team.model");
const utils_1 = require("../utils");
const gql_team_env_team_guard_1 = require("./gql-team-env-team.guard");
const team_environments_model_1 = require("./team-environments.model");
const team_environments_service_1 = require("./team-environments.service");
const E = require("fp-ts/Either");
const input_type_args_1 = require("./input-type.args");
let TeamEnvironmentsResolver = class TeamEnvironmentsResolver {
    constructor(teamEnvironmentsService, pubsub) {
        this.teamEnvironmentsService = teamEnvironmentsService;
        this.pubsub = pubsub;
    }
    async createTeamEnvironment(args) {
        const teamEnvironment = await this.teamEnvironmentsService.createTeamEnvironment(args.name, args.teamID, args.variables);
        if (E.isLeft(teamEnvironment))
            (0, utils_1.throwErr)(teamEnvironment.left);
        return teamEnvironment.right;
    }
    async deleteTeamEnvironment(id) {
        const isDeleted = await this.teamEnvironmentsService.deleteTeamEnvironment(id);
        if (E.isLeft(isDeleted))
            (0, utils_1.throwErr)(isDeleted.left);
        return isDeleted.right;
    }
    async updateTeamEnvironment(args) {
        const updatedTeamEnvironment = await this.teamEnvironmentsService.updateTeamEnvironment(args.id, args.name, args.variables);
        if (E.isLeft(updatedTeamEnvironment))
            (0, utils_1.throwErr)(updatedTeamEnvironment.left);
        return updatedTeamEnvironment.right;
    }
    async deleteAllVariablesFromTeamEnvironment(id) {
        const teamEnvironment = await this.teamEnvironmentsService.deleteAllVariablesFromTeamEnvironment(id);
        if (E.isLeft(teamEnvironment))
            (0, utils_1.throwErr)(teamEnvironment.left);
        return teamEnvironment.right;
    }
    async createDuplicateEnvironment(id) {
        const res = await this.teamEnvironmentsService.createDuplicateEnvironment(id);
        if (E.isLeft(res))
            (0, utils_1.throwErr)(res.left);
        return res.right;
    }
    teamEnvironmentUpdated(teamID) {
        return this.pubsub.asyncIterator(`team_environment/${teamID}/updated`);
    }
    teamEnvironmentCreated(teamID) {
        return this.pubsub.asyncIterator(`team_environment/${teamID}/created`);
    }
    teamEnvironmentDeleted(teamID) {
        return this.pubsub.asyncIterator(`team_environment/${teamID}/deleted`);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => team_environments_model_1.TeamEnvironment, {
        description: 'Create a new Team Environment for given Team ID',
    }),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, gql_team_member_guard_1.GqlTeamMemberGuard),
    (0, requires_team_role_decorator_1.RequiresTeamRole)(team_model_1.TeamMemberRole.OWNER, team_model_1.TeamMemberRole.EDITOR),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [input_type_args_1.CreateTeamEnvironmentArgs]),
    __metadata("design:returntype", Promise)
], TeamEnvironmentsResolver.prototype, "createTeamEnvironment", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean, {
        description: 'Delete a Team Environment for given Team ID',
    }),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, gql_team_env_team_guard_1.GqlTeamEnvTeamGuard),
    (0, requires_team_role_decorator_1.RequiresTeamRole)(team_model_1.TeamMemberRole.OWNER, team_model_1.TeamMemberRole.EDITOR),
    __param(0, (0, graphql_1.Args)({
        name: 'id',
        description: 'ID of the Team Environment',
        type: () => graphql_1.ID,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TeamEnvironmentsResolver.prototype, "deleteTeamEnvironment", null);
__decorate([
    (0, graphql_1.Mutation)(() => team_environments_model_1.TeamEnvironment, {
        description: 'Add/Edit a single environment variable or variables to a Team Environment',
    }),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, gql_team_env_team_guard_1.GqlTeamEnvTeamGuard),
    (0, requires_team_role_decorator_1.RequiresTeamRole)(team_model_1.TeamMemberRole.OWNER, team_model_1.TeamMemberRole.EDITOR),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [input_type_args_1.UpdateTeamEnvironmentArgs]),
    __metadata("design:returntype", Promise)
], TeamEnvironmentsResolver.prototype, "updateTeamEnvironment", null);
__decorate([
    (0, graphql_1.Mutation)(() => team_environments_model_1.TeamEnvironment, {
        description: 'Delete all variables from a Team Environment',
    }),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, gql_team_env_team_guard_1.GqlTeamEnvTeamGuard),
    (0, requires_team_role_decorator_1.RequiresTeamRole)(team_model_1.TeamMemberRole.OWNER, team_model_1.TeamMemberRole.EDITOR),
    __param(0, (0, graphql_1.Args)({
        name: 'id',
        description: 'ID of the Team Environment',
        type: () => graphql_1.ID,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TeamEnvironmentsResolver.prototype, "deleteAllVariablesFromTeamEnvironment", null);
__decorate([
    (0, graphql_1.Mutation)(() => team_environments_model_1.TeamEnvironment, {
        description: 'Create a duplicate of an existing environment',
    }),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, gql_team_env_team_guard_1.GqlTeamEnvTeamGuard),
    (0, requires_team_role_decorator_1.RequiresTeamRole)(team_model_1.TeamMemberRole.OWNER, team_model_1.TeamMemberRole.EDITOR),
    __param(0, (0, graphql_1.Args)({
        name: 'id',
        description: 'ID of the Team Environment',
        type: () => graphql_1.ID,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TeamEnvironmentsResolver.prototype, "createDuplicateEnvironment", null);
__decorate([
    (0, graphql_1.Subscription)(() => team_environments_model_1.TeamEnvironment, {
        description: 'Listen for Team Environment Updates',
        resolve: (value) => value,
    }),
    (0, throttler_1.SkipThrottle)(),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, gql_team_member_guard_1.GqlTeamMemberGuard),
    (0, requires_team_role_decorator_1.RequiresTeamRole)(team_model_1.TeamMemberRole.OWNER, team_model_1.TeamMemberRole.EDITOR, team_model_1.TeamMemberRole.VIEWER),
    __param(0, (0, graphql_1.Args)({
        name: 'teamID',
        description: 'ID of the Team',
        type: () => graphql_1.ID,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TeamEnvironmentsResolver.prototype, "teamEnvironmentUpdated", null);
__decorate([
    (0, graphql_1.Subscription)(() => team_environments_model_1.TeamEnvironment, {
        description: 'Listen for Team Environment Creation Messages',
        resolve: (value) => value,
    }),
    (0, throttler_1.SkipThrottle)(),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, gql_team_member_guard_1.GqlTeamMemberGuard),
    (0, requires_team_role_decorator_1.RequiresTeamRole)(team_model_1.TeamMemberRole.OWNER, team_model_1.TeamMemberRole.EDITOR, team_model_1.TeamMemberRole.VIEWER),
    __param(0, (0, graphql_1.Args)({
        name: 'teamID',
        description: 'ID of the Team',
        type: () => graphql_1.ID,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TeamEnvironmentsResolver.prototype, "teamEnvironmentCreated", null);
__decorate([
    (0, graphql_1.Subscription)(() => team_environments_model_1.TeamEnvironment, {
        description: 'Listen for Team Environment Deletion Messages',
        resolve: (value) => value,
    }),
    (0, throttler_1.SkipThrottle)(),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, gql_team_member_guard_1.GqlTeamMemberGuard),
    (0, requires_team_role_decorator_1.RequiresTeamRole)(team_model_1.TeamMemberRole.OWNER, team_model_1.TeamMemberRole.EDITOR, team_model_1.TeamMemberRole.VIEWER),
    __param(0, (0, graphql_1.Args)({
        name: 'teamID',
        description: 'ID of the Team',
        type: () => graphql_1.ID,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TeamEnvironmentsResolver.prototype, "teamEnvironmentDeleted", null);
TeamEnvironmentsResolver = __decorate([
    (0, common_1.UseGuards)(gql_throttler_guard_1.GqlThrottlerGuard),
    (0, graphql_1.Resolver)(() => 'TeamEnvironment'),
    __metadata("design:paramtypes", [team_environments_service_1.TeamEnvironmentsService,
        pubsub_service_1.PubSubService])
], TeamEnvironmentsResolver);
exports.TeamEnvironmentsResolver = TeamEnvironmentsResolver;
//# sourceMappingURL=team-environments.resolver.js.map
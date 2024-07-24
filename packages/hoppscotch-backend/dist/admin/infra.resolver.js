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
exports.InfraResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const gql_throttler_guard_1 = require("../guards/gql-throttler.guard");
const infra_model_1 = require("./infra.model");
const admin_service_1 = require("./admin.service");
const gql_auth_guard_1 = require("../guards/gql-auth.guard");
const gql_admin_guard_1 = require("./guards/gql-admin.guard");
const user_model_1 = require("../user/user.model");
const utils_1 = require("../utils");
const E = require("fp-ts/Either");
const admin_model_1 = require("./admin.model");
const input_types_args_1 = require("../types/input-types.args");
const invited_user_model_1 = require("./invited-user.model");
const team_model_1 = require("../team/team.model");
const team_invitation_model_1 = require("../team-invitation/team-invitation.model");
const gql_admin_decorator_1 = require("./decorators/gql-admin.decorator");
const shortcode_model_1 = require("../shortcode/shortcode.model");
const infra_config_model_1 = require("../infra-config/infra-config.model");
const infra_config_service_1 = require("../infra-config/infra-config.service");
const input_args_1 = require("../infra-config/input-args");
const InfraConfig_1 = require("../types/InfraConfig");
const helper_1 = require("../infra-config/helper");
let InfraResolver = class InfraResolver {
    constructor(adminService, infraConfigService) {
        this.adminService = adminService;
        this.infraConfigService = infraConfigService;
    }
    infra(admin) {
        const infra = { executedBy: admin };
        return infra;
    }
    async admins() {
        const admins = await this.adminService.fetchAdmins();
        return admins;
    }
    async userInfo(userUid) {
        const user = await this.adminService.fetchUserInfo(userUid);
        if (E.isLeft(user))
            (0, utils_1.throwErr)(user.left);
        return user.right;
    }
    async allUsers(args) {
        const users = await this.adminService.fetchUsers(args.cursor, args.take);
        return users;
    }
    async allUsersV2(searchString, paginationOption) {
        const users = await this.adminService.fetchUsersV2(searchString, paginationOption);
        return users;
    }
    async invitedUsers(args) {
        const users = await this.adminService.fetchInvitedUsers(args);
        return users;
    }
    async allTeams(args) {
        const teams = await this.adminService.fetchAllTeams(args.cursor, args.take);
        return teams;
    }
    async teamInfo(teamID) {
        const team = await this.adminService.getTeamInfo(teamID);
        if (E.isLeft(team))
            (0, utils_1.throwErr)(team.left);
        return team.right;
    }
    async membersCountInTeam(teamID) {
        const teamMembersCount = await this.adminService.membersCountInTeam(teamID);
        return teamMembersCount;
    }
    async collectionCountInTeam(teamID) {
        const teamCollCount = await this.adminService.collectionCountInTeam(teamID);
        return teamCollCount;
    }
    async requestCountInTeam(teamID) {
        const teamReqCount = await this.adminService.requestCountInTeam(teamID);
        return teamReqCount;
    }
    async environmentCountInTeam(teamID) {
        const envsCount = await this.adminService.environmentCountInTeam(teamID);
        return envsCount;
    }
    async pendingInvitationCountInTeam(teamID) {
        const invitations = await this.adminService.pendingInvitationCountInTeam(teamID);
        return invitations;
    }
    async usersCount() {
        return this.adminService.getUsersCount();
    }
    async teamsCount() {
        return this.adminService.getTeamsCount();
    }
    async teamCollectionsCount() {
        return this.adminService.getTeamCollectionsCount();
    }
    async teamRequestsCount() {
        return this.adminService.getTeamRequestsCount();
    }
    async allShortcodes(args, userEmail) {
        return await this.adminService.fetchAllShortcodes(args.cursor, args.take, userEmail);
    }
    async infraConfigs(names) {
        const infraConfigs = await this.infraConfigService.getMany(names);
        if (E.isLeft(infraConfigs))
            (0, utils_1.throwErr)(infraConfigs.left);
        return infraConfigs.right;
    }
    allowedAuthProviders() {
        return this.infraConfigService.getAllowedAuthProviders();
    }
    async updateInfraConfigs(infraConfigs) {
        const updatedRes = await this.infraConfigService.updateMany(infraConfigs);
        if (E.isLeft(updatedRes))
            (0, utils_1.throwErr)(updatedRes.left);
        return updatedRes.right;
    }
    async toggleAnalyticsCollection(analyticsCollectionStatus) {
        const res = await this.infraConfigService.toggleAnalyticsCollection(analyticsCollectionStatus);
        if (E.isLeft(res))
            (0, utils_1.throwErr)(res.left);
        return res.right;
    }
    async resetInfraConfigs() {
        const resetRes = await this.infraConfigService.reset();
        if (E.isLeft(resetRes))
            (0, utils_1.throwErr)(resetRes.left);
        return true;
    }
    async enableAndDisableSSO(providerInfo) {
        const isUpdated = await this.infraConfigService.enableAndDisableSSO(providerInfo);
        if (E.isLeft(isUpdated))
            (0, utils_1.throwErr)(isUpdated.left);
        return true;
    }
    async toggleSMTP(status) {
        const isUpdated = await this.infraConfigService.enableAndDisableSMTP(status);
        if (E.isLeft(isUpdated))
            (0, utils_1.throwErr)(isUpdated.left);
        return true;
    }
};
__decorate([
    (0, graphql_1.Query)(() => infra_model_1.Infra, {
        description: 'Fetch details of the Infrastructure',
    }),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, gql_admin_guard_1.GqlAdminGuard),
    __param(0, (0, gql_admin_decorator_1.GqlAdmin)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_model_1.Admin]),
    __metadata("design:returntype", void 0)
], InfraResolver.prototype, "infra", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [user_model_1.User], {
        description: 'Returns a list of all admin users in infra',
    }),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, gql_admin_guard_1.GqlAdminGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InfraResolver.prototype, "admins", null);
__decorate([
    (0, graphql_1.ResolveField)(() => user_model_1.User, {
        description: 'Returns a user info by UID',
    }),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, gql_admin_guard_1.GqlAdminGuard),
    __param(0, (0, graphql_1.Args)({
        name: 'userUid',
        type: () => graphql_1.ID,
        description: 'The user UID',
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InfraResolver.prototype, "userInfo", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [user_model_1.User], {
        description: 'Returns a list of all the users in infra',
        deprecationReason: 'Use allUsersV2 instead',
    }),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, gql_admin_guard_1.GqlAdminGuard),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [input_types_args_1.PaginationArgs]),
    __metadata("design:returntype", Promise)
], InfraResolver.prototype, "allUsers", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [user_model_1.User], {
        description: 'Returns a list of all the users in infra',
    }),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, gql_admin_guard_1.GqlAdminGuard),
    __param(0, (0, graphql_1.Args)({
        name: 'searchString',
        nullable: true,
        description: 'Search on users displayName or email',
    })),
    __param(1, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, input_types_args_1.OffsetPaginationArgs]),
    __metadata("design:returntype", Promise)
], InfraResolver.prototype, "allUsersV2", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [invited_user_model_1.InvitedUser], {
        description: 'Returns a list of all the invited users',
    }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [input_types_args_1.OffsetPaginationArgs]),
    __metadata("design:returntype", Promise)
], InfraResolver.prototype, "invitedUsers", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [team_model_1.Team], {
        description: 'Returns a list of all the teams in the infra',
    }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [input_types_args_1.PaginationArgs]),
    __metadata("design:returntype", Promise)
], InfraResolver.prototype, "allTeams", null);
__decorate([
    (0, graphql_1.ResolveField)(() => team_model_1.Team, {
        description: 'Returns a team info by ID when requested by Admin',
    }),
    __param(0, (0, graphql_1.Args)({
        name: 'teamID',
        type: () => graphql_1.ID,
        description: 'Team ID for which info to fetch',
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InfraResolver.prototype, "teamInfo", null);
__decorate([
    (0, graphql_1.ResolveField)(() => Number, {
        description: 'Return count of all the members in a team',
    }),
    __param(0, (0, graphql_1.Args)({
        name: 'teamID',
        type: () => graphql_1.ID,
        description: 'Team ID for which team members to fetch',
        nullable: false,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InfraResolver.prototype, "membersCountInTeam", null);
__decorate([
    (0, graphql_1.ResolveField)(() => Number, {
        description: 'Return count of all the stored collections in a team',
    }),
    __param(0, (0, graphql_1.Args)({
        name: 'teamID',
        type: () => graphql_1.ID,
        description: 'Team ID for which team members to fetch',
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InfraResolver.prototype, "collectionCountInTeam", null);
__decorate([
    (0, graphql_1.ResolveField)(() => Number, {
        description: 'Return count of all the stored requests in a team',
    }),
    __param(0, (0, graphql_1.Args)({
        name: 'teamID',
        type: () => graphql_1.ID,
        description: 'Team ID for which team members to fetch',
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InfraResolver.prototype, "requestCountInTeam", null);
__decorate([
    (0, graphql_1.ResolveField)(() => Number, {
        description: 'Return count of all the stored environments in a team',
    }),
    __param(0, (0, graphql_1.Args)({
        name: 'teamID',
        type: () => graphql_1.ID,
        description: 'Team ID for which team members to fetch',
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InfraResolver.prototype, "environmentCountInTeam", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [team_invitation_model_1.TeamInvitation], {
        description: 'Return all the pending invitations in a team',
    }),
    __param(0, (0, graphql_1.Args)({
        name: 'teamID',
        type: () => graphql_1.ID,
        description: 'Team ID for which team members to fetch',
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InfraResolver.prototype, "pendingInvitationCountInTeam", null);
__decorate([
    (0, graphql_1.ResolveField)(() => Number, {
        description: 'Return total number of Users in organization',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InfraResolver.prototype, "usersCount", null);
__decorate([
    (0, graphql_1.ResolveField)(() => Number, {
        description: 'Return total number of Teams in organization',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InfraResolver.prototype, "teamsCount", null);
__decorate([
    (0, graphql_1.ResolveField)(() => Number, {
        description: 'Return total number of Team Collections in organization',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InfraResolver.prototype, "teamCollectionsCount", null);
__decorate([
    (0, graphql_1.ResolveField)(() => Number, {
        description: 'Return total number of Team Requests in organization',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InfraResolver.prototype, "teamRequestsCount", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [shortcode_model_1.ShortcodeWithUserEmail], {
        description: 'Returns a list of all the shortcodes in the infra',
    }),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, graphql_1.Args)({
        name: 'userEmail',
        nullable: true,
        description: 'Users email to filter shortcodes by',
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [input_types_args_1.PaginationArgs, String]),
    __metadata("design:returntype", Promise)
], InfraResolver.prototype, "allShortcodes", null);
__decorate([
    (0, graphql_1.Query)(() => [infra_config_model_1.InfraConfig], {
        description: 'Retrieve configuration details for the instance',
    }),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, gql_admin_guard_1.GqlAdminGuard),
    __param(0, (0, graphql_1.Args)({
        name: 'configNames',
        type: () => [InfraConfig_1.InfraConfigEnum],
        description: 'Configs to fetch',
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], InfraResolver.prototype, "infraConfigs", null);
__decorate([
    (0, graphql_1.Query)(() => [String], {
        description: 'Allowed Auth Provider list',
    }),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, gql_admin_guard_1.GqlAdminGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InfraResolver.prototype, "allowedAuthProviders", null);
__decorate([
    (0, graphql_1.Mutation)(() => [infra_config_model_1.InfraConfig], {
        description: 'Update Infra Configs',
    }),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, gql_admin_guard_1.GqlAdminGuard),
    __param(0, (0, graphql_1.Args)({
        name: 'infraConfigs',
        type: () => [input_args_1.InfraConfigArgs],
        description: 'InfraConfigs to update',
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], InfraResolver.prototype, "updateInfraConfigs", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean, {
        description: 'Enable or disable analytics collection',
    }),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, gql_admin_guard_1.GqlAdminGuard),
    __param(0, (0, graphql_1.Args)({
        name: 'status',
        type: () => helper_1.ServiceStatus,
        description: 'Toggle analytics collection',
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InfraResolver.prototype, "toggleAnalyticsCollection", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean, {
        description: 'Reset Infra Configs with default values (.env)',
    }),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, gql_admin_guard_1.GqlAdminGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InfraResolver.prototype, "resetInfraConfigs", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean, {
        description: 'Enable or Disable SSO for login/signup',
    }),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, gql_admin_guard_1.GqlAdminGuard),
    __param(0, (0, graphql_1.Args)({
        name: 'providerInfo',
        type: () => [input_args_1.EnableAndDisableSSOArgs],
        description: 'SSO provider and status',
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], InfraResolver.prototype, "enableAndDisableSSO", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean, {
        description: 'Enable or Disable SMTP for sending emails',
    }),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, gql_admin_guard_1.GqlAdminGuard),
    __param(0, (0, graphql_1.Args)({
        name: 'status',
        type: () => helper_1.ServiceStatus,
        description: 'Toggle SMTP',
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InfraResolver.prototype, "toggleSMTP", null);
InfraResolver = __decorate([
    (0, common_1.UseGuards)(gql_throttler_guard_1.GqlThrottlerGuard),
    (0, graphql_1.Resolver)(() => infra_model_1.Infra),
    __metadata("design:paramtypes", [admin_service_1.AdminService,
        infra_config_service_1.InfraConfigService])
], InfraResolver);
exports.InfraResolver = InfraResolver;
//# sourceMappingURL=infra.resolver.js.map
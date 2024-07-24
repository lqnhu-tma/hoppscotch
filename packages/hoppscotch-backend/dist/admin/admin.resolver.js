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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const admin_model_1 = require("./admin.model");
const common_1 = require("@nestjs/common");
const gql_auth_guard_1 = require("../guards/gql-auth.guard");
const gql_admin_guard_1 = require("./guards/gql-admin.guard");
const gql_admin_decorator_1 = require("./decorators/gql-admin.decorator");
const admin_service_1 = require("./admin.service");
const E = require("fp-ts/Either");
const utils_1 = require("../utils");
const invited_user_model_1 = require("./invited-user.model");
const gql_user_decorator_1 = require("../decorators/gql-user.decorator");
const pubsub_service_1 = require("../pubsub/pubsub.service");
const team_model_1 = require("../team/team.model");
const input_types_args_1 = require("./input-types.args");
const gql_throttler_guard_1 = require("../guards/gql-throttler.guard");
const throttler_1 = require("@nestjs/throttler");
const user_model_1 = require("../user/user.model");
let AdminResolver = class AdminResolver {
    constructor(adminService, pubsub) {
        this.adminService = adminService;
        this.pubsub = pubsub;
    }
    admin(admin) {
        return admin;
    }
    async inviteNewUser(adminUser, inviteeEmail) {
        const invitedUser = await this.adminService.inviteUserToSignInViaEmail(adminUser.uid, adminUser.email, inviteeEmail);
        if (E.isLeft(invitedUser))
            (0, utils_1.throwErr)(invitedUser.left);
        return invitedUser.right;
    }
    async revokeUserInvitationsByAdmin(inviteeEmails) {
        const invite = await this.adminService.revokeUserInvitations(inviteeEmails);
        if (E.isLeft(invite))
            (0, utils_1.throwErr)(invite.left);
        return invite.right;
    }
    async removeUserByAdmin(userUID) {
        const removedUser = await this.adminService.removeUserAccount(userUID);
        if (E.isLeft(removedUser))
            (0, utils_1.throwErr)(removedUser.left);
        return removedUser.right;
    }
    async removeUsersByAdmin(userUIDs) {
        const deletionResults = await this.adminService.removeUserAccounts(userUIDs);
        if (E.isLeft(deletionResults))
            (0, utils_1.throwErr)(deletionResults.left);
        return deletionResults.right;
    }
    async makeUserAdmin(userUID) {
        const admin = await this.adminService.makeUserAdmin(userUID);
        if (E.isLeft(admin))
            (0, utils_1.throwErr)(admin.left);
        return admin.right;
    }
    async makeUsersAdmin(userUIDs) {
        const isUpdated = await this.adminService.makeUsersAdmin(userUIDs);
        if (E.isLeft(isUpdated))
            (0, utils_1.throwErr)(isUpdated.left);
        return isUpdated.right;
    }
    async updateUserDisplayNameByAdmin(userUID, displayName) {
        const isUpdated = await this.adminService.updateUserDisplayName(userUID, displayName);
        if (E.isLeft(isUpdated))
            (0, utils_1.throwErr)(isUpdated.left);
        return isUpdated.right;
    }
    async removeUserAsAdmin(userUID) {
        const admin = await this.adminService.removeUserAsAdmin(userUID);
        if (E.isLeft(admin))
            (0, utils_1.throwErr)(admin.left);
        return admin.right;
    }
    async demoteUsersByAdmin(userUIDs) {
        const isUpdated = await this.adminService.demoteUsersByAdmin(userUIDs);
        if (E.isLeft(isUpdated))
            (0, utils_1.throwErr)(isUpdated.left);
        return isUpdated.right;
    }
    async createTeamByAdmin(adminUser, userUid, name) {
        const createdTeam = await this.adminService.createATeam(userUid, name);
        if (E.isLeft(createdTeam))
            (0, utils_1.throwErr)(createdTeam.left);
        return createdTeam.right;
    }
    async changeUserRoleInTeamByAdmin(adminUser, args) {
        const updatedRole = await this.adminService.changeRoleOfUserTeam(args.userUID, args.teamID, args.newRole);
        if (E.isLeft(updatedRole))
            (0, utils_1.throwErr)(updatedRole.left);
        return updatedRole.right;
    }
    async removeUserFromTeamByAdmin(adminUser, userUid, teamID) {
        const removedUser = await this.adminService.removeUserFromTeam(userUid, teamID);
        if (E.isLeft(removedUser))
            (0, utils_1.throwErr)(removedUser.left);
        return removedUser.right;
    }
    async addUserToTeamByAdmin(adminUser, args) {
        const addedUser = await this.adminService.addUserToTeam(args.teamID, args.userEmail, args.role);
        if (E.isLeft(addedUser))
            (0, utils_1.throwErr)(addedUser.left);
        return addedUser.right;
    }
    async renameTeamByAdmin(adminUser, teamID, newName) {
        const renamedTeam = await this.adminService.renameATeam(teamID, newName);
        if (E.isLeft(renamedTeam))
            (0, utils_1.throwErr)(renamedTeam.left);
        return renamedTeam.right;
    }
    async deleteTeamByAdmin(teamID) {
        const deletedTeam = await this.adminService.deleteATeam(teamID);
        if (E.isLeft(deletedTeam))
            (0, utils_1.throwErr)(deletedTeam.left);
        return deletedTeam.right;
    }
    async revokeTeamInviteByAdmin(inviteID) {
        const invite = await this.adminService.revokeTeamInviteByID(inviteID);
        if (E.isLeft(invite))
            (0, utils_1.throwErr)(invite.left);
        return true;
    }
    async revokeShortcodeByAdmin(code) {
        const res = await this.adminService.deleteShortcode(code);
        if (E.isLeft(res))
            (0, utils_1.throwErr)(res.left);
        return true;
    }
    userInvited(admin) {
        return this.pubsub.asyncIterator(`admin/${admin.uid}/invited`);
    }
};
__decorate([
    (0, graphql_1.Query)(() => admin_model_1.Admin, {
        description: 'Gives details of the admin executing this query',
    }),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, gql_admin_guard_1.GqlAdminGuard),
    __param(0, (0, gql_admin_decorator_1.GqlAdmin)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_model_1.Admin]),
    __metadata("design:returntype", void 0)
], AdminResolver.prototype, "admin", null);
__decorate([
    (0, graphql_1.Mutation)(() => invited_user_model_1.InvitedUser, {
        description: 'Invite a user to the infra using email',
    }),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, gql_admin_guard_1.GqlAdminGuard),
    __param(0, (0, gql_user_decorator_1.GqlUser)()),
    __param(1, (0, graphql_1.Args)({
        name: 'inviteeEmail',
        description: 'invitee email',
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof AuthUser_1.AuthUser !== "undefined" && AuthUser_1.AuthUser) === "function" ? _a : Object, String]),
    __metadata("design:returntype", Promise)
], AdminResolver.prototype, "inviteNewUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean, {
        description: 'Revoke a user invites by invitee emails',
    }),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, gql_admin_guard_1.GqlAdminGuard),
    __param(0, (0, graphql_1.Args)({
        name: 'inviteeEmails',
        description: 'Invitee Emails',
        type: () => [String],
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], AdminResolver.prototype, "revokeUserInvitationsByAdmin", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean, {
        description: 'Delete an user account from infra',
        deprecationReason: 'Use removeUsersByAdmin instead',
    }),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, gql_admin_guard_1.GqlAdminGuard),
    __param(0, (0, graphql_1.Args)({
        name: 'userUID',
        description: 'users UID',
        type: () => graphql_1.ID,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminResolver.prototype, "removeUserByAdmin", null);
__decorate([
    (0, graphql_1.Mutation)(() => [user_model_1.UserDeletionResult], {
        description: 'Delete user accounts from infra',
    }),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, gql_admin_guard_1.GqlAdminGuard),
    __param(0, (0, graphql_1.Args)({
        name: 'userUIDs',
        description: 'users UID',
        type: () => [graphql_1.ID],
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], AdminResolver.prototype, "removeUsersByAdmin", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean, {
        description: 'Make user an admin',
        deprecationReason: 'Use makeUsersAdmin instead',
    }),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, gql_admin_guard_1.GqlAdminGuard),
    __param(0, (0, graphql_1.Args)({
        name: 'userUID',
        description: 'users UID',
        type: () => graphql_1.ID,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminResolver.prototype, "makeUserAdmin", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean, {
        description: 'Make users an admin',
    }),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, gql_admin_guard_1.GqlAdminGuard),
    __param(0, (0, graphql_1.Args)({
        name: 'userUIDs',
        description: 'users UID',
        type: () => [graphql_1.ID],
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], AdminResolver.prototype, "makeUsersAdmin", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean, {
        description: 'Update user display name',
    }),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, gql_admin_guard_1.GqlAdminGuard),
    __param(0, (0, graphql_1.Args)({
        name: 'userUID',
        description: 'users UID',
        type: () => graphql_1.ID,
    })),
    __param(1, (0, graphql_1.Args)({
        name: 'displayName',
        description: 'users display name',
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AdminResolver.prototype, "updateUserDisplayNameByAdmin", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean, {
        description: 'Remove user as admin',
        deprecationReason: 'Use demoteUsersByAdmin instead',
    }),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, gql_admin_guard_1.GqlAdminGuard),
    __param(0, (0, graphql_1.Args)({
        name: 'userUID',
        description: 'users UID',
        type: () => graphql_1.ID,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminResolver.prototype, "removeUserAsAdmin", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean, {
        description: 'Remove users as admin',
    }),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, gql_admin_guard_1.GqlAdminGuard),
    __param(0, (0, graphql_1.Args)({
        name: 'userUIDs',
        description: 'users UID',
        type: () => [graphql_1.ID],
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], AdminResolver.prototype, "demoteUsersByAdmin", null);
__decorate([
    (0, graphql_1.Mutation)(() => team_model_1.Team, {
        description: 'Create a new team by providing the user uid to nominate as Team owner',
    }),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, gql_admin_guard_1.GqlAdminGuard),
    __param(0, (0, gql_admin_decorator_1.GqlAdmin)()),
    __param(1, (0, graphql_1.Args)({
        name: 'userUid',
        description: 'users uid to make team owner',
        type: () => graphql_1.ID,
    })),
    __param(2, (0, graphql_1.Args)({ name: 'name', description: 'Displayed name of the team' })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_model_1.Admin, String, String]),
    __metadata("design:returntype", Promise)
], AdminResolver.prototype, "createTeamByAdmin", null);
__decorate([
    (0, graphql_1.Mutation)(() => team_model_1.TeamMember, {
        description: 'Change the role of a user in a team',
    }),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, gql_admin_guard_1.GqlAdminGuard),
    __param(0, (0, gql_admin_decorator_1.GqlAdmin)()),
    __param(1, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_model_1.Admin,
        input_types_args_1.ChangeUserRoleInTeamArgs]),
    __metadata("design:returntype", Promise)
], AdminResolver.prototype, "changeUserRoleInTeamByAdmin", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean, {
        description: 'Remove the user from a team',
    }),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, gql_admin_guard_1.GqlAdminGuard),
    __param(0, (0, gql_admin_decorator_1.GqlAdmin)()),
    __param(1, (0, graphql_1.Args)({
        name: 'userUid',
        description: 'users UID',
        type: () => graphql_1.ID,
    })),
    __param(2, (0, graphql_1.Args)({
        name: 'teamID',
        description: 'team ID',
        type: () => graphql_1.ID,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_model_1.Admin, String, String]),
    __metadata("design:returntype", Promise)
], AdminResolver.prototype, "removeUserFromTeamByAdmin", null);
__decorate([
    (0, graphql_1.Mutation)(() => team_model_1.TeamMember, {
        description: 'Add a user to a team with email and team member role',
    }),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, gql_admin_guard_1.GqlAdminGuard),
    __param(0, (0, gql_admin_decorator_1.GqlAdmin)()),
    __param(1, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_model_1.Admin,
        input_types_args_1.AddUserToTeamArgs]),
    __metadata("design:returntype", Promise)
], AdminResolver.prototype, "addUserToTeamByAdmin", null);
__decorate([
    (0, graphql_1.Mutation)(() => team_model_1.Team, {
        description: 'Change a team name',
    }),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, gql_admin_guard_1.GqlAdminGuard),
    __param(0, (0, gql_admin_decorator_1.GqlAdmin)()),
    __param(1, (0, graphql_1.Args)({ name: 'teamID', description: 'ID of the team', type: () => graphql_1.ID })),
    __param(2, (0, graphql_1.Args)({ name: 'newName', description: 'The updated name of the team' })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_model_1.Admin, String, String]),
    __metadata("design:returntype", Promise)
], AdminResolver.prototype, "renameTeamByAdmin", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean, {
        description: 'Delete a team',
    }),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, gql_admin_guard_1.GqlAdminGuard),
    __param(0, (0, graphql_1.Args)({ name: 'teamID', description: 'ID of the team', type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminResolver.prototype, "deleteTeamByAdmin", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean, {
        description: 'Revoke a team Invite by Invite ID',
    }),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, gql_admin_guard_1.GqlAdminGuard),
    __param(0, (0, graphql_1.Args)({
        name: 'inviteID',
        description: 'Team Invite ID',
        type: () => graphql_1.ID,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminResolver.prototype, "revokeTeamInviteByAdmin", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean, {
        description: 'Revoke Shortcode by ID',
    }),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, gql_admin_guard_1.GqlAdminGuard),
    __param(0, (0, graphql_1.Args)({
        name: 'code',
        description: 'The shortcode to delete',
        type: () => graphql_1.ID,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminResolver.prototype, "revokeShortcodeByAdmin", null);
__decorate([
    (0, graphql_1.Subscription)(() => invited_user_model_1.InvitedUser, {
        description: 'Listen for User Invitation',
        resolve: (value) => value,
    }),
    (0, throttler_1.SkipThrottle)(),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard, gql_admin_guard_1.GqlAdminGuard),
    __param(0, (0, gql_user_decorator_1.GqlUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof AuthUser_1.AuthUser !== "undefined" && AuthUser_1.AuthUser) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], AdminResolver.prototype, "userInvited", null);
AdminResolver = __decorate([
    (0, common_1.UseGuards)(gql_throttler_guard_1.GqlThrottlerGuard),
    (0, graphql_1.Resolver)(() => admin_model_1.Admin),
    __metadata("design:paramtypes", [admin_service_1.AdminService,
        pubsub_service_1.PubSubService])
], AdminResolver);
exports.AdminResolver = AdminResolver;
//# sourceMappingURL=admin.resolver.js.map
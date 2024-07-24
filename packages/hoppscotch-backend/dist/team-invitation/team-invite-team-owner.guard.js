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
exports.TeamInviteTeamOwnerGuard = void 0;
const common_1 = require("@nestjs/common");
const team_service_1 = require("../team/team.service");
const team_invitation_service_1 = require("./team-invitation.service");
const O = require("fp-ts/Option");
const graphql_1 = require("@nestjs/graphql");
const errors_1 = require("../errors");
const utils_1 = require("../utils");
const team_model_1 = require("../team/team.model");
let TeamInviteTeamOwnerGuard = class TeamInviteTeamOwnerGuard {
    constructor(teamService, teamInviteService) {
        this.teamService = teamService;
        this.teamInviteService = teamInviteService;
    }
    async canActivate(context) {
        const gqlExecCtx = graphql_1.GqlExecutionContext.create(context);
        const { user } = gqlExecCtx.getContext().req;
        if (!user)
            (0, utils_1.throwErr)(errors_1.BUG_AUTH_NO_USER_CTX);
        const { inviteID } = gqlExecCtx.getArgs();
        if (!inviteID)
            (0, utils_1.throwErr)(errors_1.BUG_TEAM_INVITE_NO_INVITE_ID);
        const invitation = await this.teamInviteService.getInvitation(inviteID);
        if (O.isNone(invitation))
            (0, utils_1.throwErr)(errors_1.TEAM_INVITE_NO_INVITE_FOUND);
        const teamMember = await this.teamService.getTeamMember(invitation.value.teamID, user.uid);
        if (!teamMember)
            (0, utils_1.throwErr)(errors_1.TEAM_MEMBER_NOT_FOUND);
        if (teamMember.role !== team_model_1.TeamMemberRole.OWNER)
            (0, utils_1.throwErr)(errors_1.TEAM_NOT_REQUIRED_ROLE);
        return true;
    }
};
TeamInviteTeamOwnerGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [team_service_1.TeamService,
        team_invitation_service_1.TeamInvitationService])
], TeamInviteTeamOwnerGuard);
exports.TeamInviteTeamOwnerGuard = TeamInviteTeamOwnerGuard;
//# sourceMappingURL=team-invite-team-owner.guard.js.map
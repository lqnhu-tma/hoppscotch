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
exports.TeamInvitationService = void 0;
const common_1 = require("@nestjs/common");
const O = require("fp-ts/Option");
const E = require("fp-ts/Either");
const prisma_service_1 = require("../prisma/prisma.service");
const team_model_1 = require("../team/team.model");
const team_service_1 = require("../team/team.service");
const errors_1 = require("../errors");
const mailer_service_1 = require("../mailer/mailer.service");
const user_service_1 = require("../user/user.service");
const pubsub_service_1 = require("../pubsub/pubsub.service");
const utils_1 = require("../utils");
const config_1 = require("@nestjs/config");
let TeamInvitationService = class TeamInvitationService {
    constructor(prisma, userService, teamService, mailerService, pubsub, configService) {
        this.prisma = prisma;
        this.userService = userService;
        this.teamService = teamService;
        this.mailerService = mailerService;
        this.pubsub = pubsub;
        this.configService = configService;
    }
    cast(dbTeamInvitation) {
        return Object.assign(Object.assign({}, dbTeamInvitation), { inviteeRole: team_model_1.TeamMemberRole[dbTeamInvitation.inviteeRole] });
    }
    async getInvitation(inviteID) {
        try {
            const dbInvitation = await this.prisma.teamInvitation.findUniqueOrThrow({
                where: {
                    id: inviteID,
                },
            });
            return O.some(this.cast(dbInvitation));
        }
        catch (e) {
            return O.none;
        }
    }
    async getTeamInviteByEmailAndTeamID(inviteeEmail, teamID) {
        const isEmailValid = (0, utils_1.validateEmail)(inviteeEmail);
        if (!isEmailValid)
            return E.left(errors_1.INVALID_EMAIL);
        try {
            const teamInvite = await this.prisma.teamInvitation.findFirstOrThrow({
                where: {
                    inviteeEmail: {
                        equals: inviteeEmail,
                        mode: 'insensitive',
                    },
                    teamID,
                },
            });
            return E.right(teamInvite);
        }
        catch (e) {
            return E.left(errors_1.TEAM_INVITE_NO_INVITE_FOUND);
        }
    }
    async createInvitation(creator, teamID, inviteeEmail, inviteeRole) {
        var _a;
        const isEmailValid = (0, utils_1.validateEmail)(inviteeEmail);
        if (!isEmailValid)
            return E.left(errors_1.INVALID_EMAIL);
        const team = await this.teamService.getTeamWithID(teamID);
        if (!team)
            return E.left(errors_1.TEAM_INVALID_ID);
        const isTeamMember = await this.teamService.getTeamMember(team.id, creator.uid);
        if (!isTeamMember)
            return E.left(errors_1.TEAM_MEMBER_NOT_FOUND);
        const inviteeUser = await this.userService.findUserByEmail(inviteeEmail);
        if (O.isSome(inviteeUser)) {
            const isTeamMember = await this.teamService.getTeamMember(team.id, inviteeUser.value.uid);
            if (isTeamMember)
                return E.left(errors_1.TEAM_INVITE_ALREADY_MEMBER);
        }
        const teamInvitation = await this.getTeamInviteByEmailAndTeamID(inviteeEmail, team.id);
        if (E.isRight(teamInvitation))
            return E.left(errors_1.TEAM_INVITE_MEMBER_HAS_INVITE);
        const dbInvitation = await this.prisma.teamInvitation.create({
            data: {
                teamID: team.id,
                inviteeEmail,
                inviteeRole,
                creatorUid: creator.uid,
            },
        });
        await this.mailerService.sendEmail(inviteeEmail, {
            template: 'team-invitation',
            variables: {
                invitee: (_a = creator.displayName) !== null && _a !== void 0 ? _a : 'A Hoppscotch User',
                action_url: `${this.configService.get('VITE_BASE_URL')}/join-team?id=${dbInvitation.id}`,
                invite_team_name: team.name,
            },
        });
        const invitation = this.cast(dbInvitation);
        this.pubsub.publish(`team/${invitation.teamID}/invite_added`, invitation);
        return E.right(invitation);
    }
    async revokeInvitation(inviteID) {
        const invitation = await this.getInvitation(inviteID);
        if (O.isNone(invitation))
            return E.left(errors_1.TEAM_INVITE_NO_INVITE_FOUND);
        await this.prisma.teamInvitation.delete({
            where: {
                id: inviteID,
            },
        });
        this.pubsub.publish(`team/${invitation.value.teamID}/invite_removed`, invitation.value.id);
        return E.right(true);
    }
    async acceptInvitation(inviteID, acceptedBy) {
        const invitation = await this.getInvitation(inviteID);
        if (O.isNone(invitation))
            return E.left(errors_1.TEAM_INVITE_NO_INVITE_FOUND);
        const teamMemberInvitee = await this.teamService.getTeamMember(invitation.value.teamID, acceptedBy.uid);
        if (teamMemberInvitee)
            return E.left(errors_1.TEAM_INVITE_ALREADY_MEMBER);
        if (acceptedBy.email.toLowerCase() !==
            invitation.value.inviteeEmail.toLowerCase())
            return E.left(errors_1.TEAM_INVITE_EMAIL_DO_NOT_MATCH);
        let teamMember;
        try {
            teamMember = await this.teamService.addMemberToTeam(invitation.value.teamID, acceptedBy.uid, invitation.value.inviteeRole);
        }
        catch (e) {
            return E.left(errors_1.TEAM_INVITE_ALREADY_MEMBER);
        }
        await this.revokeInvitation(inviteID);
        return E.right(teamMember);
    }
    async getTeamInvitations(teamID) {
        const dbInvitations = await this.prisma.teamInvitation.findMany({
            where: {
                teamID: teamID,
            },
        });
        const invitations = dbInvitations.map((dbInvitation) => this.cast(dbInvitation));
        return invitations;
    }
};
TeamInvitationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        user_service_1.UserService,
        team_service_1.TeamService,
        mailer_service_1.MailerService,
        pubsub_service_1.PubSubService,
        config_1.ConfigService])
], TeamInvitationService);
exports.TeamInvitationService = TeamInvitationService;
//# sourceMappingURL=team-invitation.service.js.map
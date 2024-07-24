import * as O from 'fp-ts/Option';
import * as E from 'fp-ts/Either';
import { PrismaService } from 'src/prisma/prisma.service';
import { TeamInvitation as DBTeamInvitation } from '@prisma/client';
import { TeamMember, TeamMemberRole } from 'src/team/team.model';
import { TeamService } from 'src/team/team.service';
import { TeamInvitation } from './team-invitation.model';
import { MailerService } from 'src/mailer/mailer.service';
import { UserService } from 'src/user/user.service';
import { PubSubService } from 'src/pubsub/pubsub.service';
import { AuthUser } from 'src/types/AuthUser';
import { ConfigService } from '@nestjs/config';
export declare class TeamInvitationService {
    private readonly prisma;
    private readonly userService;
    private readonly teamService;
    private readonly mailerService;
    private readonly pubsub;
    private readonly configService;
    constructor(prisma: PrismaService, userService: UserService, teamService: TeamService, mailerService: MailerService, pubsub: PubSubService, configService: ConfigService);
    cast(dbTeamInvitation: DBTeamInvitation): TeamInvitation;
    getInvitation(inviteID: string): Promise<O.None | O.Some<TeamInvitation>>;
    getTeamInviteByEmailAndTeamID(inviteeEmail: string, teamID: string): Promise<E.Right<any> | E.Left<"invalid/email"> | E.Left<"team_invite/no_invite_found">>;
    createInvitation(creator: AuthUser, teamID: string, inviteeEmail: string, inviteeRole: TeamMemberRole): Promise<E.Left<"team/invalid_id"> | E.Left<"team/member_not_found"> | E.Left<"invalid/email"> | E.Left<"team_invite/already_member"> | E.Left<"team_invite/member_has_invite"> | E.Right<TeamInvitation>>;
    revokeInvitation(inviteID: string): Promise<E.Right<boolean> | E.Left<"team_invite/no_invite_found">>;
    acceptInvitation(inviteID: string, acceptedBy: AuthUser): Promise<E.Right<TeamMember> | E.Left<"team_invite/no_invite_found"> | E.Left<"team_invite/already_member"> | E.Left<"team_invite/email_do_not_match">>;
    getTeamInvitations(teamID: string): Promise<TeamInvitation[]>;
}

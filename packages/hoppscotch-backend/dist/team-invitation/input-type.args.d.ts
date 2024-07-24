import { TeamMemberRole } from 'src/team/team.model';
export declare class CreateTeamInvitationArgs {
    teamID: string;
    inviteeEmail: string;
    inviteeRole: TeamMemberRole;
}

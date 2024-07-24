import { PrismaService } from 'src/prisma/prisma.service';
import { PubSubService } from 'src/pubsub/pubsub.service';
import { TeamEnvironment } from './team-environments.model';
import * as E from 'fp-ts/Either';
import { TeamService } from 'src/team/team.service';
export declare class TeamEnvironmentsService {
    private readonly prisma;
    private readonly pubsub;
    private readonly teamService;
    constructor(prisma: PrismaService, pubsub: PubSubService, teamService: TeamService);
    TITLE_LENGTH: number;
    private cast;
    getTeamEnvironment(id: string): Promise<E.Right<any> | E.Left<"team_environment/not_found">>;
    createTeamEnvironment(name: string, teamID: string, variables: string): Promise<E.Left<"team_environment/short_name"> | E.Right<TeamEnvironment>>;
    deleteTeamEnvironment(id: string): Promise<E.Right<boolean> | E.Left<"team_environment/not_found">>;
    updateTeamEnvironment(id: string, name: string, variables: string): Promise<E.Left<"team_environment/not_found"> | E.Left<"team_environment/short_name"> | E.Right<TeamEnvironment>>;
    deleteAllVariablesFromTeamEnvironment(id: string): Promise<E.Left<"team_environment/not_found"> | E.Right<TeamEnvironment>>;
    createDuplicateEnvironment(id: string): Promise<E.Left<"team_environment/not_found"> | E.Right<TeamEnvironment>>;
    fetchAllTeamEnvironments(teamID: string): Promise<any>;
    totalEnvsInTeam(teamID: string): Promise<any>;
    getTeamEnvironmentForCLI(id: string, userUid: string): Promise<E.Right<any> | E.Left<"team/member_not_found"> | E.Left<"team_environment/not_found">>;
}

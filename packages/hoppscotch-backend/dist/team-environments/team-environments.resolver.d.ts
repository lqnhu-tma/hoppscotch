import { PubSubService } from 'src/pubsub/pubsub.service';
import { TeamEnvironment } from './team-environments.model';
import { TeamEnvironmentsService } from './team-environments.service';
import { CreateTeamEnvironmentArgs, UpdateTeamEnvironmentArgs } from './input-type.args';
export declare class TeamEnvironmentsResolver {
    private readonly teamEnvironmentsService;
    private readonly pubsub;
    constructor(teamEnvironmentsService: TeamEnvironmentsService, pubsub: PubSubService);
    createTeamEnvironment(args: CreateTeamEnvironmentArgs): Promise<TeamEnvironment>;
    deleteTeamEnvironment(id: string): Promise<boolean>;
    updateTeamEnvironment(args: UpdateTeamEnvironmentArgs): Promise<TeamEnvironment>;
    deleteAllVariablesFromTeamEnvironment(id: string): Promise<TeamEnvironment>;
    createDuplicateEnvironment(id: string): Promise<TeamEnvironment>;
    teamEnvironmentUpdated(teamID: string): AsyncIterator<unknown, any, undefined>;
    teamEnvironmentCreated(teamID: string): AsyncIterator<unknown, any, undefined>;
    teamEnvironmentDeleted(teamID: string): AsyncIterator<unknown, any, undefined>;
}

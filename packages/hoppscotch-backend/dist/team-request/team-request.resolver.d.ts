import { TeamRequest } from './team-request.model';
import { CreateTeamRequestInput, UpdateTeamRequestInput, SearchTeamRequestArgs, GetTeamRequestInCollectionArgs, MoveTeamRequestArgs, UpdateLookUpRequestOrderArgs } from './input-type.args';
import { Team } from '../team/team.model';
import { TeamRequestService } from './team-request.service';
import { PubSubService } from 'src/pubsub/pubsub.service';
export declare class TeamRequestResolver {
    private readonly teamRequestService;
    private readonly pubsub;
    constructor(teamRequestService: TeamRequestService, pubsub: PubSubService);
    team(req: TeamRequest): Promise<Team>;
    collection(req: TeamRequest): Promise<any>;
    searchForRequest(args: SearchTeamRequestArgs): Promise<any>;
    request(requestID: string): Promise<{
        id: any;
        collectionID: any;
        teamID: any;
        title: any;
        request: string;
    }>;
    requestsInCollection(input: GetTeamRequestInCollectionArgs): Promise<any>;
    createRequestInCollection(collectionID: string, data: CreateTeamRequestInput): Promise<{
        id: any;
        collectionID: any;
        teamID: any;
        title: any;
        request: string;
    }>;
    updateRequest(requestID: string, data: UpdateTeamRequestInput): Promise<TeamRequest>;
    deleteRequest(requestID: string): Promise<boolean>;
    updateLookUpRequestOrder(args: UpdateLookUpRequestOrderArgs): Promise<boolean>;
    moveRequest(args: MoveTeamRequestArgs): Promise<{
        id: any;
        collectionID: any;
        teamID: any;
        title: any;
        request: string;
    }>;
    teamRequestAdded(teamID: string): AsyncIterator<unknown, any, undefined>;
    teamRequestUpdated(teamID: string): AsyncIterator<unknown, any, undefined>;
    teamRequestDeleted(teamID: string): AsyncIterator<unknown, any, undefined>;
    requestOrderUpdated(teamID: string): AsyncIterator<unknown, any, undefined>;
    requestMoved(teamID: string): AsyncIterator<unknown, any, undefined>;
}

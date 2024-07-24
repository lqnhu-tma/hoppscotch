import { TeamCollectionService } from './team-collection.service';
import { RESTError } from 'src/types/RESTError';
export declare class TeamCollectionController {
    private readonly teamCollectionService;
    constructor(teamCollectionService: TeamCollectionService);
    searchByTitle(searchQuery: string, teamID: string, take: string, skip: string): Promise<RESTError | {
        data: import("../types/CollectionSearchNode").CollectionSearchNode[];
    }>;
}

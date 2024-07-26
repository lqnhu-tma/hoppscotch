import { PaginationArgs } from 'src/types/input-types.args';
export declare class GetRootTeamCollectionsArgs extends PaginationArgs {
    teamID: string;
}
export declare class CreateRootTeamCollectionArgs {
    teamID: string;
    title: string;
    data: string;
}
export declare class CreateChildTeamCollectionArgs {
    collectionID: string;
    childTitle: string;
    data: string;
}
export declare class RenameTeamCollectionArgs {
    collectionID: string;
    newTitle: string;
}
export declare class MoveTeamCollectionArgs {
    parentCollectionID: string;
    collectionID: string;
}
export declare class UpdateTeamCollectionOrderArgs {
    collectionID: string;
    destCollID: string;
}
export declare class ReplaceTeamCollectionArgs {
    teamID: string;
    jsonString: string;
    parentCollectionID?: string;
}
export declare class UpdateTeamCollectionArgs {
    collectionID: string;
    newTitle: string;
    data: string;
}

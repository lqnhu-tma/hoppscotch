import { ReqType } from 'src/types/RequestTypes';
import { PaginationArgs } from 'src/types/input-types.args';
export declare class CreateRootUserCollectionArgs {
    title: string;
    data: string;
}
export declare class CreateChildUserCollectionArgs {
    title: string;
    parentUserCollectionID: string;
    data: string;
}
export declare class GetUserChildCollectionArgs extends PaginationArgs {
    userCollectionID: string;
}
export declare class RenameUserCollectionsArgs {
    userCollectionID: string;
    newTitle: string;
}
export declare class UpdateUserCollectionArgs {
    collectionID: string;
    nextCollectionID: string;
}
export declare class MoveUserCollectionArgs {
    destCollectionID: string;
    userCollectionID: string;
}
export declare class ImportUserCollectionsFromJSONArgs {
    jsonString: string;
    reqType: ReqType;
    parentCollectionID?: string;
}
export declare class UpdateUserCollectionsArgs {
    userCollectionID: string;
    newTitle: string;
    data: string;
}

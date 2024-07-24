export declare class User {
    uid: string;
    displayName?: string;
    email?: string;
    photoURL?: string;
    isAdmin: boolean;
    lastLoggedOn: Date;
    lastActiveOn: Date;
    createdOn: Date;
    currentRESTSession?: string;
    currentGQLSession?: string;
}
export declare enum SessionType {
    REST = "REST",
    GQL = "GQL"
}
export declare class UserDeletionResult {
    userUID: string;
    isDeleted: Boolean;
    errorMessage: String;
}

export declare class Shortcode {
    id: string;
    request: string;
    properties: string;
    createdOn: Date;
}
export declare class ShortcodeCreator {
    uid: string;
    email: string;
}
export declare class ShortcodeWithUserEmail {
    id: string;
    request: string;
    properties: string;
    createdOn: Date;
    creator: ShortcodeCreator;
}

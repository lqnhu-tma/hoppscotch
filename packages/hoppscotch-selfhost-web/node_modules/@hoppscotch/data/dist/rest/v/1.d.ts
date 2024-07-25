import { z } from "zod";
import { V0_SCHEMA } from "./0";
export declare const FormDataKeyValue: z.ZodIntersection<z.ZodObject<{
    key: z.ZodString;
    active: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    key: string;
    active: boolean;
}, {
    key: string;
    active: boolean;
}>, z.ZodUnion<[z.ZodObject<{
    isFile: z.ZodLiteral<true>;
    value: z.ZodArray<z.ZodNullable<z.ZodType<Blob, z.ZodTypeDef, Blob>>, "many">;
}, "strip", z.ZodTypeAny, {
    value: (Blob | null)[];
    isFile: true;
}, {
    value: (Blob | null)[];
    isFile: true;
}>, z.ZodObject<{
    isFile: z.ZodLiteral<false>;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
    isFile: false;
}, {
    value: string;
    isFile: false;
}>]>>;
export type FormDataKeyValue = z.infer<typeof FormDataKeyValue>;
export declare const HoppRESTReqBodyFormData: z.ZodObject<{
    contentType: z.ZodLiteral<"multipart/form-data">;
    body: z.ZodArray<z.ZodIntersection<z.ZodObject<{
        key: z.ZodString;
        active: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        key: string;
        active: boolean;
    }, {
        key: string;
        active: boolean;
    }>, z.ZodUnion<[z.ZodObject<{
        isFile: z.ZodLiteral<true>;
        value: z.ZodArray<z.ZodNullable<z.ZodType<Blob, z.ZodTypeDef, Blob>>, "many">;
    }, "strip", z.ZodTypeAny, {
        value: (Blob | null)[];
        isFile: true;
    }, {
        value: (Blob | null)[];
        isFile: true;
    }>, z.ZodObject<{
        isFile: z.ZodLiteral<false>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        isFile: false;
    }, {
        value: string;
        isFile: false;
    }>]>>, "many">;
}, "strip", z.ZodTypeAny, {
    contentType: "multipart/form-data";
    body: ({
        key: string;
        active: boolean;
    } & ({
        value: (Blob | null)[];
        isFile: true;
    } | {
        value: string;
        isFile: false;
    }))[];
}, {
    contentType: "multipart/form-data";
    body: ({
        key: string;
        active: boolean;
    } & ({
        value: (Blob | null)[];
        isFile: true;
    } | {
        value: string;
        isFile: false;
    }))[];
}>;
export type HoppRESTReqBodyFormData = z.infer<typeof HoppRESTReqBodyFormData>;
export declare const HoppRESTReqBody: z.ZodUnion<[z.ZodObject<{
    contentType: z.ZodLiteral<null>;
    body: z.ZodCatch<z.ZodLiteral<null>>;
}, "strip", z.ZodTypeAny, {
    contentType: null;
    body: null;
}, {
    contentType: null;
    body?: unknown;
}>, z.ZodObject<{
    contentType: z.ZodLiteral<"multipart/form-data">;
    body: z.ZodCatch<z.ZodArray<z.ZodIntersection<z.ZodObject<{
        key: z.ZodString;
        active: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        key: string;
        active: boolean;
    }, {
        key: string;
        active: boolean;
    }>, z.ZodUnion<[z.ZodObject<{
        isFile: z.ZodLiteral<true>;
        value: z.ZodArray<z.ZodNullable<z.ZodType<Blob, z.ZodTypeDef, Blob>>, "many">;
    }, "strip", z.ZodTypeAny, {
        value: (Blob | null)[];
        isFile: true;
    }, {
        value: (Blob | null)[];
        isFile: true;
    }>, z.ZodObject<{
        isFile: z.ZodLiteral<false>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        isFile: false;
    }, {
        value: string;
        isFile: false;
    }>]>>, "many">>;
}, "strip", z.ZodTypeAny, {
    contentType: "multipart/form-data";
    body: ({
        key: string;
        active: boolean;
    } & ({
        value: (Blob | null)[];
        isFile: true;
    } | {
        value: string;
        isFile: false;
    }))[];
}, {
    contentType: "multipart/form-data";
    body?: unknown;
}>, z.ZodObject<{
    contentType: z.ZodUnion<[z.ZodLiteral<"application/json">, z.ZodLiteral<"application/ld+json">, z.ZodLiteral<"application/hal+json">, z.ZodLiteral<"application/vnd.api+json">, z.ZodLiteral<"application/xml">, z.ZodLiteral<"application/x-www-form-urlencoded">, z.ZodLiteral<"text/html">, z.ZodLiteral<"text/plain">]>;
    body: z.ZodCatch<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    contentType: "application/json" | "application/ld+json" | "application/hal+json" | "application/vnd.api+json" | "application/xml" | "application/x-www-form-urlencoded" | "text/html" | "text/plain";
    body: string;
}, {
    contentType: "application/json" | "application/ld+json" | "application/hal+json" | "application/vnd.api+json" | "application/xml" | "application/x-www-form-urlencoded" | "text/html" | "text/plain";
    body?: unknown;
}>]>;
export type HoppRESTReqBody = z.infer<typeof HoppRESTReqBody>;
export declare const HoppRESTAuthNone: z.ZodObject<{
    authType: z.ZodLiteral<"none">;
}, "strip", z.ZodTypeAny, {
    authType: "none";
}, {
    authType: "none";
}>;
export type HoppRESTAuthNone = z.infer<typeof HoppRESTAuthNone>;
export declare const HoppRESTAuthBasic: z.ZodObject<{
    authType: z.ZodLiteral<"basic">;
    username: z.ZodCatch<z.ZodString>;
    password: z.ZodCatch<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    authType: "basic";
    username: string;
    password: string;
}, {
    authType: "basic";
    username?: unknown;
    password?: unknown;
}>;
export type HoppRESTAuthBasic = z.infer<typeof HoppRESTAuthBasic>;
export declare const HoppRESTAuthBearer: z.ZodObject<{
    authType: z.ZodLiteral<"bearer">;
    token: z.ZodCatch<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    authType: "bearer";
    token: string;
}, {
    authType: "bearer";
    token?: unknown;
}>;
export type HoppRESTAuthBearer = z.infer<typeof HoppRESTAuthBearer>;
export declare const HoppRESTAuthOAuth2: z.ZodObject<{
    authType: z.ZodLiteral<"oauth-2">;
    token: z.ZodCatch<z.ZodString>;
    oidcDiscoveryURL: z.ZodCatch<z.ZodString>;
    authURL: z.ZodCatch<z.ZodString>;
    accessTokenURL: z.ZodCatch<z.ZodString>;
    clientID: z.ZodCatch<z.ZodString>;
    scope: z.ZodCatch<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    authType: "oauth-2";
    token: string;
    oidcDiscoveryURL: string;
    authURL: string;
    accessTokenURL: string;
    clientID: string;
    scope: string;
}, {
    authType: "oauth-2";
    token?: unknown;
    oidcDiscoveryURL?: unknown;
    authURL?: unknown;
    accessTokenURL?: unknown;
    clientID?: unknown;
    scope?: unknown;
}>;
export type HoppRESTAuthOAuth2 = z.infer<typeof HoppRESTAuthOAuth2>;
export declare const HoppRESTAuthAPIKey: z.ZodObject<{
    authType: z.ZodLiteral<"api-key">;
    key: z.ZodCatch<z.ZodString>;
    value: z.ZodCatch<z.ZodString>;
    addTo: z.ZodCatch<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    value: string;
    key: string;
    authType: "api-key";
    addTo: string;
}, {
    authType: "api-key";
    key?: unknown;
    value?: unknown;
    addTo?: unknown;
}>;
export type HoppRESTAuthAPIKey = z.infer<typeof HoppRESTAuthAPIKey>;
export declare const HoppRESTAuthInherit: z.ZodObject<{
    authType: z.ZodLiteral<"inherit">;
}, "strip", z.ZodTypeAny, {
    authType: "inherit";
}, {
    authType: "inherit";
}>;
export type HoppRESTAuthInherit = z.infer<typeof HoppRESTAuthInherit>;
export declare const HoppRESTAuth: z.ZodIntersection<z.ZodDiscriminatedUnion<"authType", [z.ZodObject<{
    authType: z.ZodLiteral<"none">;
}, "strip", z.ZodTypeAny, {
    authType: "none";
}, {
    authType: "none";
}>, z.ZodObject<{
    authType: z.ZodLiteral<"inherit">;
}, "strip", z.ZodTypeAny, {
    authType: "inherit";
}, {
    authType: "inherit";
}>, z.ZodObject<{
    authType: z.ZodLiteral<"basic">;
    username: z.ZodCatch<z.ZodString>;
    password: z.ZodCatch<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    authType: "basic";
    username: string;
    password: string;
}, {
    authType: "basic";
    username?: unknown;
    password?: unknown;
}>, z.ZodObject<{
    authType: z.ZodLiteral<"bearer">;
    token: z.ZodCatch<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    authType: "bearer";
    token: string;
}, {
    authType: "bearer";
    token?: unknown;
}>, z.ZodObject<{
    authType: z.ZodLiteral<"oauth-2">;
    token: z.ZodCatch<z.ZodString>;
    oidcDiscoveryURL: z.ZodCatch<z.ZodString>;
    authURL: z.ZodCatch<z.ZodString>;
    accessTokenURL: z.ZodCatch<z.ZodString>;
    clientID: z.ZodCatch<z.ZodString>;
    scope: z.ZodCatch<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    authType: "oauth-2";
    token: string;
    oidcDiscoveryURL: string;
    authURL: string;
    accessTokenURL: string;
    clientID: string;
    scope: string;
}, {
    authType: "oauth-2";
    token?: unknown;
    oidcDiscoveryURL?: unknown;
    authURL?: unknown;
    accessTokenURL?: unknown;
    clientID?: unknown;
    scope?: unknown;
}>, z.ZodObject<{
    authType: z.ZodLiteral<"api-key">;
    key: z.ZodCatch<z.ZodString>;
    value: z.ZodCatch<z.ZodString>;
    addTo: z.ZodCatch<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    value: string;
    key: string;
    authType: "api-key";
    addTo: string;
}, {
    authType: "api-key";
    key?: unknown;
    value?: unknown;
    addTo?: unknown;
}>]>, z.ZodObject<{
    authActive: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    authActive: boolean;
}, {
    authActive: boolean;
}>>;
export type HoppRESTAuth = z.infer<typeof HoppRESTAuth>;
export declare const HoppRESTParams: z.ZodArray<z.ZodObject<{
    key: z.ZodCatch<z.ZodString>;
    value: z.ZodCatch<z.ZodString>;
    active: z.ZodCatch<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    value: string;
    key: string;
    active: boolean;
}, {
    key?: unknown;
    value?: unknown;
    active?: unknown;
}>, "many">;
export type HoppRESTParams = z.infer<typeof HoppRESTParams>;
export declare const HoppRESTHeaders: z.ZodArray<z.ZodObject<{
    key: z.ZodCatch<z.ZodString>;
    value: z.ZodCatch<z.ZodString>;
    active: z.ZodCatch<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    value: string;
    key: string;
    active: boolean;
}, {
    key?: unknown;
    value?: unknown;
    active?: unknown;
}>, "many">;
export type HoppRESTHeaders = z.infer<typeof HoppRESTHeaders>;
export declare const V1_SCHEMA: z.ZodObject<{
    v: z.ZodLiteral<"1">;
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    method: z.ZodString;
    endpoint: z.ZodString;
    params: z.ZodArray<z.ZodObject<{
        key: z.ZodCatch<z.ZodString>;
        value: z.ZodCatch<z.ZodString>;
        active: z.ZodCatch<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        key: string;
        active: boolean;
    }, {
        key?: unknown;
        value?: unknown;
        active?: unknown;
    }>, "many">;
    headers: z.ZodArray<z.ZodObject<{
        key: z.ZodCatch<z.ZodString>;
        value: z.ZodCatch<z.ZodString>;
        active: z.ZodCatch<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        key: string;
        active: boolean;
    }, {
        key?: unknown;
        value?: unknown;
        active?: unknown;
    }>, "many">;
    preRequestScript: z.ZodCatch<z.ZodString>;
    testScript: z.ZodCatch<z.ZodString>;
    auth: z.ZodIntersection<z.ZodDiscriminatedUnion<"authType", [z.ZodObject<{
        authType: z.ZodLiteral<"none">;
    }, "strip", z.ZodTypeAny, {
        authType: "none";
    }, {
        authType: "none";
    }>, z.ZodObject<{
        authType: z.ZodLiteral<"inherit">;
    }, "strip", z.ZodTypeAny, {
        authType: "inherit";
    }, {
        authType: "inherit";
    }>, z.ZodObject<{
        authType: z.ZodLiteral<"basic">;
        username: z.ZodCatch<z.ZodString>;
        password: z.ZodCatch<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        authType: "basic";
        username: string;
        password: string;
    }, {
        authType: "basic";
        username?: unknown;
        password?: unknown;
    }>, z.ZodObject<{
        authType: z.ZodLiteral<"bearer">;
        token: z.ZodCatch<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        authType: "bearer";
        token: string;
    }, {
        authType: "bearer";
        token?: unknown;
    }>, z.ZodObject<{
        authType: z.ZodLiteral<"oauth-2">;
        token: z.ZodCatch<z.ZodString>;
        oidcDiscoveryURL: z.ZodCatch<z.ZodString>;
        authURL: z.ZodCatch<z.ZodString>;
        accessTokenURL: z.ZodCatch<z.ZodString>;
        clientID: z.ZodCatch<z.ZodString>;
        scope: z.ZodCatch<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        authType: "oauth-2";
        token: string;
        oidcDiscoveryURL: string;
        authURL: string;
        accessTokenURL: string;
        clientID: string;
        scope: string;
    }, {
        authType: "oauth-2";
        token?: unknown;
        oidcDiscoveryURL?: unknown;
        authURL?: unknown;
        accessTokenURL?: unknown;
        clientID?: unknown;
        scope?: unknown;
    }>, z.ZodObject<{
        authType: z.ZodLiteral<"api-key">;
        key: z.ZodCatch<z.ZodString>;
        value: z.ZodCatch<z.ZodString>;
        addTo: z.ZodCatch<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        key: string;
        authType: "api-key";
        addTo: string;
    }, {
        authType: "api-key";
        key?: unknown;
        value?: unknown;
        addTo?: unknown;
    }>]>, z.ZodObject<{
        authActive: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        authActive: boolean;
    }, {
        authActive: boolean;
    }>>;
    body: z.ZodUnion<[z.ZodObject<{
        contentType: z.ZodLiteral<null>;
        body: z.ZodCatch<z.ZodLiteral<null>>;
    }, "strip", z.ZodTypeAny, {
        contentType: null;
        body: null;
    }, {
        contentType: null;
        body?: unknown;
    }>, z.ZodObject<{
        contentType: z.ZodLiteral<"multipart/form-data">;
        body: z.ZodCatch<z.ZodArray<z.ZodIntersection<z.ZodObject<{
            key: z.ZodString;
            active: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            key: string;
            active: boolean;
        }, {
            key: string;
            active: boolean;
        }>, z.ZodUnion<[z.ZodObject<{
            isFile: z.ZodLiteral<true>;
            value: z.ZodArray<z.ZodNullable<z.ZodType<Blob, z.ZodTypeDef, Blob>>, "many">;
        }, "strip", z.ZodTypeAny, {
            value: (Blob | null)[];
            isFile: true;
        }, {
            value: (Blob | null)[];
            isFile: true;
        }>, z.ZodObject<{
            isFile: z.ZodLiteral<false>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            isFile: false;
        }, {
            value: string;
            isFile: false;
        }>]>>, "many">>;
    }, "strip", z.ZodTypeAny, {
        contentType: "multipart/form-data";
        body: ({
            key: string;
            active: boolean;
        } & ({
            value: (Blob | null)[];
            isFile: true;
        } | {
            value: string;
            isFile: false;
        }))[];
    }, {
        contentType: "multipart/form-data";
        body?: unknown;
    }>, z.ZodObject<{
        contentType: z.ZodUnion<[z.ZodLiteral<"application/json">, z.ZodLiteral<"application/ld+json">, z.ZodLiteral<"application/hal+json">, z.ZodLiteral<"application/vnd.api+json">, z.ZodLiteral<"application/xml">, z.ZodLiteral<"application/x-www-form-urlencoded">, z.ZodLiteral<"text/html">, z.ZodLiteral<"text/plain">]>;
        body: z.ZodCatch<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        contentType: "application/json" | "application/ld+json" | "application/hal+json" | "application/vnd.api+json" | "application/xml" | "application/x-www-form-urlencoded" | "text/html" | "text/plain";
        body: string;
    }, {
        contentType: "application/json" | "application/ld+json" | "application/hal+json" | "application/vnd.api+json" | "application/xml" | "application/x-www-form-urlencoded" | "text/html" | "text/plain";
        body?: unknown;
    }>]>;
}, "strip", z.ZodTypeAny, {
    params: {
        value: string;
        key: string;
        active: boolean;
    }[];
    headers: {
        value: string;
        key: string;
        active: boolean;
    }[];
    name: string;
    method: string;
    preRequestScript: string;
    testScript: string;
    body: {
        contentType: null;
        body: null;
    } | {
        contentType: "multipart/form-data";
        body: ({
            key: string;
            active: boolean;
        } & ({
            value: (Blob | null)[];
            isFile: true;
        } | {
            value: string;
            isFile: false;
        }))[];
    } | {
        contentType: "application/json" | "application/ld+json" | "application/hal+json" | "application/vnd.api+json" | "application/xml" | "application/x-www-form-urlencoded" | "text/html" | "text/plain";
        body: string;
    };
    auth: ({
        authType: "none";
    } & {
        authActive: boolean;
    }) | ({
        authType: "basic";
        username: string;
        password: string;
    } & {
        authActive: boolean;
    }) | ({
        authType: "bearer";
        token: string;
    } & {
        authActive: boolean;
    }) | ({
        authType: "oauth-2";
        token: string;
        oidcDiscoveryURL: string;
        authURL: string;
        accessTokenURL: string;
        clientID: string;
        scope: string;
    } & {
        authActive: boolean;
    }) | ({
        value: string;
        key: string;
        authType: "api-key";
        addTo: string;
    } & {
        authActive: boolean;
    }) | ({
        authType: "inherit";
    } & {
        authActive: boolean;
    });
    v: "1";
    endpoint: string;
    id?: string | undefined;
}, {
    params: {
        key?: unknown;
        value?: unknown;
        active?: unknown;
    }[];
    headers: {
        key?: unknown;
        value?: unknown;
        active?: unknown;
    }[];
    name: string;
    method: string;
    body: {
        contentType: null;
        body?: unknown;
    } | {
        contentType: "multipart/form-data";
        body?: unknown;
    } | {
        contentType: "application/json" | "application/ld+json" | "application/hal+json" | "application/vnd.api+json" | "application/xml" | "application/x-www-form-urlencoded" | "text/html" | "text/plain";
        body?: unknown;
    };
    auth: ({
        authType: "none";
    } & {
        authActive: boolean;
    }) | ({
        authType: "basic";
        username?: unknown;
        password?: unknown;
    } & {
        authActive: boolean;
    }) | ({
        authType: "bearer";
        token?: unknown;
    } & {
        authActive: boolean;
    }) | ({
        authType: "oauth-2";
        token?: unknown;
        oidcDiscoveryURL?: unknown;
        authURL?: unknown;
        accessTokenURL?: unknown;
        clientID?: unknown;
        scope?: unknown;
    } & {
        authActive: boolean;
    }) | ({
        authType: "api-key";
        key?: unknown;
        value?: unknown;
        addTo?: unknown;
    } & {
        authActive: boolean;
    }) | ({
        authType: "inherit";
    } & {
        authActive: boolean;
    });
    v: "1";
    endpoint: string;
    id?: string | undefined;
    preRequestScript?: unknown;
    testScript?: unknown;
}>;
export declare function parseRequestBody(x: z.infer<typeof V0_SCHEMA>): z.infer<typeof V1_SCHEMA>["body"];
export declare function parseOldAuth(x: z.infer<typeof V0_SCHEMA>): z.infer<typeof V1_SCHEMA>["auth"];
declare const _default: import("verzod").Version<z.ZodObject<{
    v: z.ZodLiteral<"1">;
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    method: z.ZodString;
    endpoint: z.ZodString;
    params: z.ZodArray<z.ZodObject<{
        key: z.ZodCatch<z.ZodString>;
        value: z.ZodCatch<z.ZodString>;
        active: z.ZodCatch<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        key: string;
        active: boolean;
    }, {
        key?: unknown;
        value?: unknown;
        active?: unknown;
    }>, "many">;
    headers: z.ZodArray<z.ZodObject<{
        key: z.ZodCatch<z.ZodString>;
        value: z.ZodCatch<z.ZodString>;
        active: z.ZodCatch<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        key: string;
        active: boolean;
    }, {
        key?: unknown;
        value?: unknown;
        active?: unknown;
    }>, "many">;
    preRequestScript: z.ZodCatch<z.ZodString>;
    testScript: z.ZodCatch<z.ZodString>;
    auth: z.ZodIntersection<z.ZodDiscriminatedUnion<"authType", [z.ZodObject<{
        authType: z.ZodLiteral<"none">;
    }, "strip", z.ZodTypeAny, {
        authType: "none";
    }, {
        authType: "none";
    }>, z.ZodObject<{
        authType: z.ZodLiteral<"inherit">;
    }, "strip", z.ZodTypeAny, {
        authType: "inherit";
    }, {
        authType: "inherit";
    }>, z.ZodObject<{
        authType: z.ZodLiteral<"basic">;
        username: z.ZodCatch<z.ZodString>;
        password: z.ZodCatch<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        authType: "basic";
        username: string;
        password: string;
    }, {
        authType: "basic";
        username?: unknown;
        password?: unknown;
    }>, z.ZodObject<{
        authType: z.ZodLiteral<"bearer">;
        token: z.ZodCatch<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        authType: "bearer";
        token: string;
    }, {
        authType: "bearer";
        token?: unknown;
    }>, z.ZodObject<{
        authType: z.ZodLiteral<"oauth-2">;
        token: z.ZodCatch<z.ZodString>;
        oidcDiscoveryURL: z.ZodCatch<z.ZodString>;
        authURL: z.ZodCatch<z.ZodString>;
        accessTokenURL: z.ZodCatch<z.ZodString>;
        clientID: z.ZodCatch<z.ZodString>;
        scope: z.ZodCatch<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        authType: "oauth-2";
        token: string;
        oidcDiscoveryURL: string;
        authURL: string;
        accessTokenURL: string;
        clientID: string;
        scope: string;
    }, {
        authType: "oauth-2";
        token?: unknown;
        oidcDiscoveryURL?: unknown;
        authURL?: unknown;
        accessTokenURL?: unknown;
        clientID?: unknown;
        scope?: unknown;
    }>, z.ZodObject<{
        authType: z.ZodLiteral<"api-key">;
        key: z.ZodCatch<z.ZodString>;
        value: z.ZodCatch<z.ZodString>;
        addTo: z.ZodCatch<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        key: string;
        authType: "api-key";
        addTo: string;
    }, {
        authType: "api-key";
        key?: unknown;
        value?: unknown;
        addTo?: unknown;
    }>]>, z.ZodObject<{
        authActive: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        authActive: boolean;
    }, {
        authActive: boolean;
    }>>;
    body: z.ZodUnion<[z.ZodObject<{
        contentType: z.ZodLiteral<null>;
        body: z.ZodCatch<z.ZodLiteral<null>>;
    }, "strip", z.ZodTypeAny, {
        contentType: null;
        body: null;
    }, {
        contentType: null;
        body?: unknown;
    }>, z.ZodObject<{
        contentType: z.ZodLiteral<"multipart/form-data">;
        body: z.ZodCatch<z.ZodArray<z.ZodIntersection<z.ZodObject<{
            key: z.ZodString;
            active: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            key: string;
            active: boolean;
        }, {
            key: string;
            active: boolean;
        }>, z.ZodUnion<[z.ZodObject<{
            isFile: z.ZodLiteral<true>;
            value: z.ZodArray<z.ZodNullable<z.ZodType<Blob, z.ZodTypeDef, Blob>>, "many">;
        }, "strip", z.ZodTypeAny, {
            value: (Blob | null)[];
            isFile: true;
        }, {
            value: (Blob | null)[];
            isFile: true;
        }>, z.ZodObject<{
            isFile: z.ZodLiteral<false>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            isFile: false;
        }, {
            value: string;
            isFile: false;
        }>]>>, "many">>;
    }, "strip", z.ZodTypeAny, {
        contentType: "multipart/form-data";
        body: ({
            key: string;
            active: boolean;
        } & ({
            value: (Blob | null)[];
            isFile: true;
        } | {
            value: string;
            isFile: false;
        }))[];
    }, {
        contentType: "multipart/form-data";
        body?: unknown;
    }>, z.ZodObject<{
        contentType: z.ZodUnion<[z.ZodLiteral<"application/json">, z.ZodLiteral<"application/ld+json">, z.ZodLiteral<"application/hal+json">, z.ZodLiteral<"application/vnd.api+json">, z.ZodLiteral<"application/xml">, z.ZodLiteral<"application/x-www-form-urlencoded">, z.ZodLiteral<"text/html">, z.ZodLiteral<"text/plain">]>;
        body: z.ZodCatch<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        contentType: "application/json" | "application/ld+json" | "application/hal+json" | "application/vnd.api+json" | "application/xml" | "application/x-www-form-urlencoded" | "text/html" | "text/plain";
        body: string;
    }, {
        contentType: "application/json" | "application/ld+json" | "application/hal+json" | "application/vnd.api+json" | "application/xml" | "application/x-www-form-urlencoded" | "text/html" | "text/plain";
        body?: unknown;
    }>]>;
}, "strip", z.ZodTypeAny, {
    params: {
        value: string;
        key: string;
        active: boolean;
    }[];
    headers: {
        value: string;
        key: string;
        active: boolean;
    }[];
    name: string;
    method: string;
    preRequestScript: string;
    testScript: string;
    body: {
        contentType: null;
        body: null;
    } | {
        contentType: "multipart/form-data";
        body: ({
            key: string;
            active: boolean;
        } & ({
            value: (Blob | null)[];
            isFile: true;
        } | {
            value: string;
            isFile: false;
        }))[];
    } | {
        contentType: "application/json" | "application/ld+json" | "application/hal+json" | "application/vnd.api+json" | "application/xml" | "application/x-www-form-urlencoded" | "text/html" | "text/plain";
        body: string;
    };
    auth: ({
        authType: "none";
    } & {
        authActive: boolean;
    }) | ({
        authType: "basic";
        username: string;
        password: string;
    } & {
        authActive: boolean;
    }) | ({
        authType: "bearer";
        token: string;
    } & {
        authActive: boolean;
    }) | ({
        authType: "oauth-2";
        token: string;
        oidcDiscoveryURL: string;
        authURL: string;
        accessTokenURL: string;
        clientID: string;
        scope: string;
    } & {
        authActive: boolean;
    }) | ({
        value: string;
        key: string;
        authType: "api-key";
        addTo: string;
    } & {
        authActive: boolean;
    }) | ({
        authType: "inherit";
    } & {
        authActive: boolean;
    });
    v: "1";
    endpoint: string;
    id?: string | undefined;
}, {
    params: {
        key?: unknown;
        value?: unknown;
        active?: unknown;
    }[];
    headers: {
        key?: unknown;
        value?: unknown;
        active?: unknown;
    }[];
    name: string;
    method: string;
    body: {
        contentType: null;
        body?: unknown;
    } | {
        contentType: "multipart/form-data";
        body?: unknown;
    } | {
        contentType: "application/json" | "application/ld+json" | "application/hal+json" | "application/vnd.api+json" | "application/xml" | "application/x-www-form-urlencoded" | "text/html" | "text/plain";
        body?: unknown;
    };
    auth: ({
        authType: "none";
    } & {
        authActive: boolean;
    }) | ({
        authType: "basic";
        username?: unknown;
        password?: unknown;
    } & {
        authActive: boolean;
    }) | ({
        authType: "bearer";
        token?: unknown;
    } & {
        authActive: boolean;
    }) | ({
        authType: "oauth-2";
        token?: unknown;
        oidcDiscoveryURL?: unknown;
        authURL?: unknown;
        accessTokenURL?: unknown;
        clientID?: unknown;
        scope?: unknown;
    } & {
        authActive: boolean;
    }) | ({
        authType: "api-key";
        key?: unknown;
        value?: unknown;
        addTo?: unknown;
    } & {
        authActive: boolean;
    }) | ({
        authType: "inherit";
    } & {
        authActive: boolean;
    });
    v: "1";
    endpoint: string;
    id?: string | undefined;
    preRequestScript?: unknown;
    testScript?: unknown;
}>, {
    params: {
        value: string;
        key: string;
        active: boolean;
    }[];
    path: string;
    url: string;
    headers: {
        value: string;
        key: string;
        active: boolean;
    }[];
    name: string;
    method: string;
    preRequestScript: string;
    testScript: string;
    contentType: string;
    body: string;
    id?: string | undefined;
    rawParams?: string | undefined;
    auth?: string | undefined;
    httpUser?: string | undefined;
    httpPassword?: string | undefined;
    bearerToken?: string | undefined;
}>;
export default _default;

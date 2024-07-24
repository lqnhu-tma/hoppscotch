import { z } from "zod";
export declare const HoppGQLAuthNone: z.ZodObject<{
    authType: z.ZodLiteral<"none">;
}, "strip", z.ZodTypeAny, {
    authType: "none";
}, {
    authType: "none";
}>;
export type HoppGQLAuthNone = z.infer<typeof HoppGQLAuthNone>;
export declare const HoppGQLAuthBasic: z.ZodObject<{
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
export type HoppGQLAuthBasic = z.infer<typeof HoppGQLAuthBasic>;
export declare const HoppGQLAuthBearer: z.ZodObject<{
    authType: z.ZodLiteral<"bearer">;
    token: z.ZodCatch<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    authType: "bearer";
    token: string;
}, {
    authType: "bearer";
    token?: unknown;
}>;
export type HoppGQLAuthBearer = z.infer<typeof HoppGQLAuthBearer>;
export declare const HoppGQLAuthOAuth2: z.ZodObject<{
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
export type HoppGQLAuthOAuth2 = z.infer<typeof HoppGQLAuthOAuth2>;
export declare const HoppGQLAuthAPIKey: z.ZodObject<{
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
export type HoppGQLAuthAPIKey = z.infer<typeof HoppGQLAuthAPIKey>;
export declare const HoppGQLAuthInherit: z.ZodObject<{
    authType: z.ZodLiteral<"inherit">;
}, "strip", z.ZodTypeAny, {
    authType: "inherit";
}, {
    authType: "inherit";
}>;
export type HoppGQLAuthInherit = z.infer<typeof HoppGQLAuthInherit>;
export declare const HoppGQLAuth: z.ZodIntersection<z.ZodDiscriminatedUnion<"authType", [z.ZodObject<{
    authType: z.ZodLiteral<"none">;
}, "strip", z.ZodTypeAny, {
    authType: "none";
}, {
    authType: "none";
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
}>, z.ZodObject<{
    authType: z.ZodLiteral<"inherit">;
}, "strip", z.ZodTypeAny, {
    authType: "inherit";
}, {
    authType: "inherit";
}>]>, z.ZodObject<{
    authActive: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    authActive: boolean;
}, {
    authActive: boolean;
}>>;
export type HoppGQLAuth = z.infer<typeof HoppGQLAuth>;
export declare const V2_SCHEMA: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    v: z.ZodLiteral<2>;
    name: z.ZodString;
    url: z.ZodString;
    headers: z.ZodCatch<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
    query: z.ZodString;
    variables: z.ZodString;
    auth: z.ZodIntersection<z.ZodDiscriminatedUnion<"authType", [z.ZodObject<{
        authType: z.ZodLiteral<"none">;
    }, "strip", z.ZodTypeAny, {
        authType: "none";
    }, {
        authType: "none";
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
    }>, z.ZodObject<{
        authType: z.ZodLiteral<"inherit">;
    }, "strip", z.ZodTypeAny, {
        authType: "inherit";
    }, {
        authType: "inherit";
    }>]>, z.ZodObject<{
        authActive: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        authActive: boolean;
    }, {
        authActive: boolean;
    }>>;
}, "strip", z.ZodTypeAny, {
    url: string;
    headers: {
        value: string;
        key: string;
        active: boolean;
    }[];
    name: string;
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
    v: 2;
    query: string;
    variables: string;
    id?: string | undefined;
}, {
    url: string;
    name: string;
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
    v: 2;
    query: string;
    variables: string;
    id?: string | undefined;
    headers?: unknown;
}>;
declare const _default: import("verzod").Version<z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    v: z.ZodLiteral<2>;
    name: z.ZodString;
    url: z.ZodString;
    headers: z.ZodCatch<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
    query: z.ZodString;
    variables: z.ZodString;
    auth: z.ZodIntersection<z.ZodDiscriminatedUnion<"authType", [z.ZodObject<{
        authType: z.ZodLiteral<"none">;
    }, "strip", z.ZodTypeAny, {
        authType: "none";
    }, {
        authType: "none";
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
    }>, z.ZodObject<{
        authType: z.ZodLiteral<"inherit">;
    }, "strip", z.ZodTypeAny, {
        authType: "inherit";
    }, {
        authType: "inherit";
    }>]>, z.ZodObject<{
        authActive: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        authActive: boolean;
    }, {
        authActive: boolean;
    }>>;
}, "strip", z.ZodTypeAny, {
    url: string;
    headers: {
        value: string;
        key: string;
        active: boolean;
    }[];
    name: string;
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
    v: 2;
    query: string;
    variables: string;
    id?: string | undefined;
}, {
    url: string;
    name: string;
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
    v: 2;
    query: string;
    variables: string;
    id?: string | undefined;
    headers?: unknown;
}>, {
    url: string;
    headers: {
        value: string;
        key: string;
        active: boolean;
    }[];
    name: string;
    v: 1;
    query: string;
    variables: string;
}>;
export default _default;

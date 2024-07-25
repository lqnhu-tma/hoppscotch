import { z } from "zod";
import { HoppRESTAuthOAuth2 } from "../../rest";
export { HoppRESTAuthOAuth2 as HoppGQLAuthOAuth2 } from "../../rest";
export type HoppGqlAuthOAuth2 = z.infer<typeof HoppRESTAuthOAuth2>;
export declare const HoppGQLAuth: z.ZodIntersection<z.ZodDiscriminatedUnion<"authType", [z.ZodObject<{
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
    authType: z.ZodLiteral<"oauth-2">;
    addTo: z.ZodCatch<z.ZodEnum<["HEADERS", "QUERY_PARAMS"]>>;
    grantTypeInfo: z.ZodDiscriminatedUnion<"grantType", [z.ZodObject<{
        token: z.ZodCatch<z.ZodString>;
        clientID: z.ZodString;
        grantType: z.ZodLiteral<"AUTHORIZATION_CODE">;
        authEndpoint: z.ZodString;
        tokenEndpoint: z.ZodString;
        scopes: z.ZodOptional<z.ZodString>;
        isPKCE: z.ZodBoolean;
        codeVerifierMethod: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"plain">, z.ZodLiteral<"S256">]>>;
        clientSecret: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        token: string;
        clientID: string;
        grantType: "AUTHORIZATION_CODE";
        authEndpoint: string;
        tokenEndpoint: string;
        isPKCE: boolean;
        scopes?: string | undefined;
        codeVerifierMethod?: "plain" | "S256" | undefined;
        clientSecret?: string | undefined;
    }, {
        clientID: string;
        grantType: "AUTHORIZATION_CODE";
        authEndpoint: string;
        tokenEndpoint: string;
        isPKCE: boolean;
        token?: unknown;
        scopes?: string | undefined;
        codeVerifierMethod?: "plain" | "S256" | undefined;
        clientSecret?: string | undefined;
    }>, z.ZodObject<{
        grantType: z.ZodLiteral<"CLIENT_CREDENTIALS">;
        authEndpoint: z.ZodString;
        clientID: z.ZodString;
        clientSecret: z.ZodString;
        scopes: z.ZodOptional<z.ZodString>;
        token: z.ZodCatch<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        token: string;
        clientID: string;
        grantType: "CLIENT_CREDENTIALS";
        authEndpoint: string;
        clientSecret: string;
        scopes?: string | undefined;
    }, {
        clientID: string;
        grantType: "CLIENT_CREDENTIALS";
        authEndpoint: string;
        clientSecret: string;
        scopes?: string | undefined;
        token?: unknown;
    }>, z.ZodObject<{
        grantType: z.ZodLiteral<"PASSWORD">;
        authEndpoint: z.ZodString;
        clientID: z.ZodString;
        clientSecret: z.ZodString;
        scopes: z.ZodOptional<z.ZodString>;
        username: z.ZodString;
        password: z.ZodString;
        token: z.ZodCatch<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        username: string;
        password: string;
        token: string;
        clientID: string;
        grantType: "PASSWORD";
        authEndpoint: string;
        clientSecret: string;
        scopes?: string | undefined;
    }, {
        username: string;
        password: string;
        clientID: string;
        grantType: "PASSWORD";
        authEndpoint: string;
        clientSecret: string;
        scopes?: string | undefined;
        token?: unknown;
    }>, z.ZodObject<{
        grantType: z.ZodLiteral<"IMPLICIT">;
        authEndpoint: z.ZodString;
        clientID: z.ZodString;
        scopes: z.ZodOptional<z.ZodString>;
        token: z.ZodCatch<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        token: string;
        clientID: string;
        grantType: "IMPLICIT";
        authEndpoint: string;
        scopes?: string | undefined;
    }, {
        clientID: string;
        grantType: "IMPLICIT";
        authEndpoint: string;
        scopes?: string | undefined;
        token?: unknown;
    }>]>;
}, "strip", z.ZodTypeAny, {
    authType: "oauth-2";
    addTo: "HEADERS" | "QUERY_PARAMS";
    grantTypeInfo: {
        token: string;
        clientID: string;
        grantType: "CLIENT_CREDENTIALS";
        authEndpoint: string;
        clientSecret: string;
        scopes?: string | undefined;
    } | {
        username: string;
        password: string;
        token: string;
        clientID: string;
        grantType: "PASSWORD";
        authEndpoint: string;
        clientSecret: string;
        scopes?: string | undefined;
    } | {
        token: string;
        clientID: string;
        grantType: "IMPLICIT";
        authEndpoint: string;
        scopes?: string | undefined;
    } | {
        token: string;
        clientID: string;
        grantType: "AUTHORIZATION_CODE";
        authEndpoint: string;
        tokenEndpoint: string;
        isPKCE: boolean;
        scopes?: string | undefined;
        codeVerifierMethod?: "plain" | "S256" | undefined;
        clientSecret?: string | undefined;
    };
}, {
    authType: "oauth-2";
    grantTypeInfo: {
        clientID: string;
        grantType: "CLIENT_CREDENTIALS";
        authEndpoint: string;
        clientSecret: string;
        scopes?: string | undefined;
        token?: unknown;
    } | {
        username: string;
        password: string;
        clientID: string;
        grantType: "PASSWORD";
        authEndpoint: string;
        clientSecret: string;
        scopes?: string | undefined;
        token?: unknown;
    } | {
        clientID: string;
        grantType: "IMPLICIT";
        authEndpoint: string;
        scopes?: string | undefined;
        token?: unknown;
    } | {
        clientID: string;
        grantType: "AUTHORIZATION_CODE";
        authEndpoint: string;
        tokenEndpoint: string;
        isPKCE: boolean;
        token?: unknown;
        scopes?: string | undefined;
        codeVerifierMethod?: "plain" | "S256" | undefined;
        clientSecret?: string | undefined;
    };
    addTo?: unknown;
}>]>, z.ZodObject<{
    authActive: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    authActive: boolean;
}, {
    authActive: boolean;
}>>;
export type HoppGQLAuth = z.infer<typeof HoppGQLAuth>;
export declare const V3_SCHEMA: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
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
    name: z.ZodString;
    query: z.ZodString;
    variables: z.ZodString;
    v: z.ZodLiteral<3>;
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
        authType: z.ZodLiteral<"oauth-2">;
        addTo: z.ZodCatch<z.ZodEnum<["HEADERS", "QUERY_PARAMS"]>>;
        grantTypeInfo: z.ZodDiscriminatedUnion<"grantType", [z.ZodObject<{
            token: z.ZodCatch<z.ZodString>;
            clientID: z.ZodString;
            grantType: z.ZodLiteral<"AUTHORIZATION_CODE">;
            authEndpoint: z.ZodString;
            tokenEndpoint: z.ZodString;
            scopes: z.ZodOptional<z.ZodString>;
            isPKCE: z.ZodBoolean;
            codeVerifierMethod: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"plain">, z.ZodLiteral<"S256">]>>;
            clientSecret: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            token: string;
            clientID: string;
            grantType: "AUTHORIZATION_CODE";
            authEndpoint: string;
            tokenEndpoint: string;
            isPKCE: boolean;
            scopes?: string | undefined;
            codeVerifierMethod?: "plain" | "S256" | undefined;
            clientSecret?: string | undefined;
        }, {
            clientID: string;
            grantType: "AUTHORIZATION_CODE";
            authEndpoint: string;
            tokenEndpoint: string;
            isPKCE: boolean;
            token?: unknown;
            scopes?: string | undefined;
            codeVerifierMethod?: "plain" | "S256" | undefined;
            clientSecret?: string | undefined;
        }>, z.ZodObject<{
            grantType: z.ZodLiteral<"CLIENT_CREDENTIALS">;
            authEndpoint: z.ZodString;
            clientID: z.ZodString;
            clientSecret: z.ZodString;
            scopes: z.ZodOptional<z.ZodString>;
            token: z.ZodCatch<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            token: string;
            clientID: string;
            grantType: "CLIENT_CREDENTIALS";
            authEndpoint: string;
            clientSecret: string;
            scopes?: string | undefined;
        }, {
            clientID: string;
            grantType: "CLIENT_CREDENTIALS";
            authEndpoint: string;
            clientSecret: string;
            scopes?: string | undefined;
            token?: unknown;
        }>, z.ZodObject<{
            grantType: z.ZodLiteral<"PASSWORD">;
            authEndpoint: z.ZodString;
            clientID: z.ZodString;
            clientSecret: z.ZodString;
            scopes: z.ZodOptional<z.ZodString>;
            username: z.ZodString;
            password: z.ZodString;
            token: z.ZodCatch<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            username: string;
            password: string;
            token: string;
            clientID: string;
            grantType: "PASSWORD";
            authEndpoint: string;
            clientSecret: string;
            scopes?: string | undefined;
        }, {
            username: string;
            password: string;
            clientID: string;
            grantType: "PASSWORD";
            authEndpoint: string;
            clientSecret: string;
            scopes?: string | undefined;
            token?: unknown;
        }>, z.ZodObject<{
            grantType: z.ZodLiteral<"IMPLICIT">;
            authEndpoint: z.ZodString;
            clientID: z.ZodString;
            scopes: z.ZodOptional<z.ZodString>;
            token: z.ZodCatch<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            token: string;
            clientID: string;
            grantType: "IMPLICIT";
            authEndpoint: string;
            scopes?: string | undefined;
        }, {
            clientID: string;
            grantType: "IMPLICIT";
            authEndpoint: string;
            scopes?: string | undefined;
            token?: unknown;
        }>]>;
    }, "strip", z.ZodTypeAny, {
        authType: "oauth-2";
        addTo: "HEADERS" | "QUERY_PARAMS";
        grantTypeInfo: {
            token: string;
            clientID: string;
            grantType: "CLIENT_CREDENTIALS";
            authEndpoint: string;
            clientSecret: string;
            scopes?: string | undefined;
        } | {
            username: string;
            password: string;
            token: string;
            clientID: string;
            grantType: "PASSWORD";
            authEndpoint: string;
            clientSecret: string;
            scopes?: string | undefined;
        } | {
            token: string;
            clientID: string;
            grantType: "IMPLICIT";
            authEndpoint: string;
            scopes?: string | undefined;
        } | {
            token: string;
            clientID: string;
            grantType: "AUTHORIZATION_CODE";
            authEndpoint: string;
            tokenEndpoint: string;
            isPKCE: boolean;
            scopes?: string | undefined;
            codeVerifierMethod?: "plain" | "S256" | undefined;
            clientSecret?: string | undefined;
        };
    }, {
        authType: "oauth-2";
        grantTypeInfo: {
            clientID: string;
            grantType: "CLIENT_CREDENTIALS";
            authEndpoint: string;
            clientSecret: string;
            scopes?: string | undefined;
            token?: unknown;
        } | {
            username: string;
            password: string;
            clientID: string;
            grantType: "PASSWORD";
            authEndpoint: string;
            clientSecret: string;
            scopes?: string | undefined;
            token?: unknown;
        } | {
            clientID: string;
            grantType: "IMPLICIT";
            authEndpoint: string;
            scopes?: string | undefined;
            token?: unknown;
        } | {
            clientID: string;
            grantType: "AUTHORIZATION_CODE";
            authEndpoint: string;
            tokenEndpoint: string;
            isPKCE: boolean;
            token?: unknown;
            scopes?: string | undefined;
            codeVerifierMethod?: "plain" | "S256" | undefined;
            clientSecret?: string | undefined;
        };
        addTo?: unknown;
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
        authType: "oauth-2";
        addTo: "HEADERS" | "QUERY_PARAMS";
        grantTypeInfo: {
            token: string;
            clientID: string;
            grantType: "CLIENT_CREDENTIALS";
            authEndpoint: string;
            clientSecret: string;
            scopes?: string | undefined;
        } | {
            username: string;
            password: string;
            token: string;
            clientID: string;
            grantType: "PASSWORD";
            authEndpoint: string;
            clientSecret: string;
            scopes?: string | undefined;
        } | {
            token: string;
            clientID: string;
            grantType: "IMPLICIT";
            authEndpoint: string;
            scopes?: string | undefined;
        } | {
            token: string;
            clientID: string;
            grantType: "AUTHORIZATION_CODE";
            authEndpoint: string;
            tokenEndpoint: string;
            isPKCE: boolean;
            scopes?: string | undefined;
            codeVerifierMethod?: "plain" | "S256" | undefined;
            clientSecret?: string | undefined;
        };
    } & {
        authActive: boolean;
    }) | ({
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
    v: 3;
    query: string;
    variables: string;
    id?: string | undefined;
}, {
    url: string;
    name: string;
    auth: ({
        authType: "oauth-2";
        grantTypeInfo: {
            clientID: string;
            grantType: "CLIENT_CREDENTIALS";
            authEndpoint: string;
            clientSecret: string;
            scopes?: string | undefined;
            token?: unknown;
        } | {
            username: string;
            password: string;
            clientID: string;
            grantType: "PASSWORD";
            authEndpoint: string;
            clientSecret: string;
            scopes?: string | undefined;
            token?: unknown;
        } | {
            clientID: string;
            grantType: "IMPLICIT";
            authEndpoint: string;
            scopes?: string | undefined;
            token?: unknown;
        } | {
            clientID: string;
            grantType: "AUTHORIZATION_CODE";
            authEndpoint: string;
            tokenEndpoint: string;
            isPKCE: boolean;
            token?: unknown;
            scopes?: string | undefined;
            codeVerifierMethod?: "plain" | "S256" | undefined;
            clientSecret?: string | undefined;
        };
        addTo?: unknown;
    } & {
        authActive: boolean;
    }) | ({
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
    v: 3;
    query: string;
    variables: string;
    id?: string | undefined;
    headers?: unknown;
}>;
declare const _default: import("verzod").Version<z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
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
    name: z.ZodString;
    query: z.ZodString;
    variables: z.ZodString;
    v: z.ZodLiteral<3>;
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
        authType: z.ZodLiteral<"oauth-2">;
        addTo: z.ZodCatch<z.ZodEnum<["HEADERS", "QUERY_PARAMS"]>>;
        grantTypeInfo: z.ZodDiscriminatedUnion<"grantType", [z.ZodObject<{
            token: z.ZodCatch<z.ZodString>;
            clientID: z.ZodString;
            grantType: z.ZodLiteral<"AUTHORIZATION_CODE">;
            authEndpoint: z.ZodString;
            tokenEndpoint: z.ZodString;
            scopes: z.ZodOptional<z.ZodString>;
            isPKCE: z.ZodBoolean;
            codeVerifierMethod: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"plain">, z.ZodLiteral<"S256">]>>;
            clientSecret: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            token: string;
            clientID: string;
            grantType: "AUTHORIZATION_CODE";
            authEndpoint: string;
            tokenEndpoint: string;
            isPKCE: boolean;
            scopes?: string | undefined;
            codeVerifierMethod?: "plain" | "S256" | undefined;
            clientSecret?: string | undefined;
        }, {
            clientID: string;
            grantType: "AUTHORIZATION_CODE";
            authEndpoint: string;
            tokenEndpoint: string;
            isPKCE: boolean;
            token?: unknown;
            scopes?: string | undefined;
            codeVerifierMethod?: "plain" | "S256" | undefined;
            clientSecret?: string | undefined;
        }>, z.ZodObject<{
            grantType: z.ZodLiteral<"CLIENT_CREDENTIALS">;
            authEndpoint: z.ZodString;
            clientID: z.ZodString;
            clientSecret: z.ZodString;
            scopes: z.ZodOptional<z.ZodString>;
            token: z.ZodCatch<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            token: string;
            clientID: string;
            grantType: "CLIENT_CREDENTIALS";
            authEndpoint: string;
            clientSecret: string;
            scopes?: string | undefined;
        }, {
            clientID: string;
            grantType: "CLIENT_CREDENTIALS";
            authEndpoint: string;
            clientSecret: string;
            scopes?: string | undefined;
            token?: unknown;
        }>, z.ZodObject<{
            grantType: z.ZodLiteral<"PASSWORD">;
            authEndpoint: z.ZodString;
            clientID: z.ZodString;
            clientSecret: z.ZodString;
            scopes: z.ZodOptional<z.ZodString>;
            username: z.ZodString;
            password: z.ZodString;
            token: z.ZodCatch<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            username: string;
            password: string;
            token: string;
            clientID: string;
            grantType: "PASSWORD";
            authEndpoint: string;
            clientSecret: string;
            scopes?: string | undefined;
        }, {
            username: string;
            password: string;
            clientID: string;
            grantType: "PASSWORD";
            authEndpoint: string;
            clientSecret: string;
            scopes?: string | undefined;
            token?: unknown;
        }>, z.ZodObject<{
            grantType: z.ZodLiteral<"IMPLICIT">;
            authEndpoint: z.ZodString;
            clientID: z.ZodString;
            scopes: z.ZodOptional<z.ZodString>;
            token: z.ZodCatch<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            token: string;
            clientID: string;
            grantType: "IMPLICIT";
            authEndpoint: string;
            scopes?: string | undefined;
        }, {
            clientID: string;
            grantType: "IMPLICIT";
            authEndpoint: string;
            scopes?: string | undefined;
            token?: unknown;
        }>]>;
    }, "strip", z.ZodTypeAny, {
        authType: "oauth-2";
        addTo: "HEADERS" | "QUERY_PARAMS";
        grantTypeInfo: {
            token: string;
            clientID: string;
            grantType: "CLIENT_CREDENTIALS";
            authEndpoint: string;
            clientSecret: string;
            scopes?: string | undefined;
        } | {
            username: string;
            password: string;
            token: string;
            clientID: string;
            grantType: "PASSWORD";
            authEndpoint: string;
            clientSecret: string;
            scopes?: string | undefined;
        } | {
            token: string;
            clientID: string;
            grantType: "IMPLICIT";
            authEndpoint: string;
            scopes?: string | undefined;
        } | {
            token: string;
            clientID: string;
            grantType: "AUTHORIZATION_CODE";
            authEndpoint: string;
            tokenEndpoint: string;
            isPKCE: boolean;
            scopes?: string | undefined;
            codeVerifierMethod?: "plain" | "S256" | undefined;
            clientSecret?: string | undefined;
        };
    }, {
        authType: "oauth-2";
        grantTypeInfo: {
            clientID: string;
            grantType: "CLIENT_CREDENTIALS";
            authEndpoint: string;
            clientSecret: string;
            scopes?: string | undefined;
            token?: unknown;
        } | {
            username: string;
            password: string;
            clientID: string;
            grantType: "PASSWORD";
            authEndpoint: string;
            clientSecret: string;
            scopes?: string | undefined;
            token?: unknown;
        } | {
            clientID: string;
            grantType: "IMPLICIT";
            authEndpoint: string;
            scopes?: string | undefined;
            token?: unknown;
        } | {
            clientID: string;
            grantType: "AUTHORIZATION_CODE";
            authEndpoint: string;
            tokenEndpoint: string;
            isPKCE: boolean;
            token?: unknown;
            scopes?: string | undefined;
            codeVerifierMethod?: "plain" | "S256" | undefined;
            clientSecret?: string | undefined;
        };
        addTo?: unknown;
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
        authType: "oauth-2";
        addTo: "HEADERS" | "QUERY_PARAMS";
        grantTypeInfo: {
            token: string;
            clientID: string;
            grantType: "CLIENT_CREDENTIALS";
            authEndpoint: string;
            clientSecret: string;
            scopes?: string | undefined;
        } | {
            username: string;
            password: string;
            token: string;
            clientID: string;
            grantType: "PASSWORD";
            authEndpoint: string;
            clientSecret: string;
            scopes?: string | undefined;
        } | {
            token: string;
            clientID: string;
            grantType: "IMPLICIT";
            authEndpoint: string;
            scopes?: string | undefined;
        } | {
            token: string;
            clientID: string;
            grantType: "AUTHORIZATION_CODE";
            authEndpoint: string;
            tokenEndpoint: string;
            isPKCE: boolean;
            scopes?: string | undefined;
            codeVerifierMethod?: "plain" | "S256" | undefined;
            clientSecret?: string | undefined;
        };
    } & {
        authActive: boolean;
    }) | ({
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
    v: 3;
    query: string;
    variables: string;
    id?: string | undefined;
}, {
    url: string;
    name: string;
    auth: ({
        authType: "oauth-2";
        grantTypeInfo: {
            clientID: string;
            grantType: "CLIENT_CREDENTIALS";
            authEndpoint: string;
            clientSecret: string;
            scopes?: string | undefined;
            token?: unknown;
        } | {
            username: string;
            password: string;
            clientID: string;
            grantType: "PASSWORD";
            authEndpoint: string;
            clientSecret: string;
            scopes?: string | undefined;
            token?: unknown;
        } | {
            clientID: string;
            grantType: "IMPLICIT";
            authEndpoint: string;
            scopes?: string | undefined;
            token?: unknown;
        } | {
            clientID: string;
            grantType: "AUTHORIZATION_CODE";
            authEndpoint: string;
            tokenEndpoint: string;
            isPKCE: boolean;
            token?: unknown;
            scopes?: string | undefined;
            codeVerifierMethod?: "plain" | "S256" | undefined;
            clientSecret?: string | undefined;
        };
        addTo?: unknown;
    } & {
        authActive: boolean;
    }) | ({
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
    v: 3;
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
}>;
export default _default;

import { z } from "zod";
export declare const HoppRESTAuthAPIKey: z.ZodObject<{
    value: z.ZodCatch<z.ZodString>;
    key: z.ZodCatch<z.ZodString>;
    authType: z.ZodLiteral<"api-key">;
    addTo: z.ZodCatch<z.ZodEnum<["HEADERS", "QUERY_PARAMS"]>>;
}, "strip", z.ZodTypeAny, {
    value: string;
    key: string;
    authType: "api-key";
    addTo: "HEADERS" | "QUERY_PARAMS";
}, {
    authType: "api-key";
    value?: unknown;
    key?: unknown;
    addTo?: unknown;
}>;
export type HoppRESTAuthAPIKey = z.infer<typeof HoppRESTAuthAPIKey>;
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
    grantTypeInfo: z.ZodDiscriminatedUnion<"grantType", [z.ZodObject<{
        grantType: z.ZodLiteral<"AUTHORIZATION_CODE">;
        authEndpoint: z.ZodString;
        tokenEndpoint: z.ZodString;
        clientID: z.ZodString;
        clientSecret: z.ZodString;
        scopes: z.ZodOptional<z.ZodString>;
        token: z.ZodCatch<z.ZodString>;
        isPKCE: z.ZodBoolean;
        codeVerifierMethod: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"plain">, z.ZodLiteral<"S256">]>>;
    }, "strip", z.ZodTypeAny, {
        token: string;
        clientID: string;
        grantType: "AUTHORIZATION_CODE";
        authEndpoint: string;
        tokenEndpoint: string;
        clientSecret: string;
        isPKCE: boolean;
        scopes?: string | undefined;
        codeVerifierMethod?: "plain" | "S256" | undefined;
    }, {
        clientID: string;
        grantType: "AUTHORIZATION_CODE";
        authEndpoint: string;
        tokenEndpoint: string;
        clientSecret: string;
        isPKCE: boolean;
        scopes?: string | undefined;
        token?: unknown;
        codeVerifierMethod?: "plain" | "S256" | undefined;
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
    addTo: z.ZodCatch<z.ZodEnum<["HEADERS", "QUERY_PARAMS"]>>;
}, "strip", z.ZodTypeAny, {
    authType: "oauth-2";
    addTo: "HEADERS" | "QUERY_PARAMS";
    grantTypeInfo: {
        token: string;
        clientID: string;
        grantType: "AUTHORIZATION_CODE";
        authEndpoint: string;
        tokenEndpoint: string;
        clientSecret: string;
        isPKCE: boolean;
        scopes?: string | undefined;
        codeVerifierMethod?: "plain" | "S256" | undefined;
    } | {
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
    };
}, {
    authType: "oauth-2";
    grantTypeInfo: {
        clientID: string;
        grantType: "AUTHORIZATION_CODE";
        authEndpoint: string;
        tokenEndpoint: string;
        clientSecret: string;
        isPKCE: boolean;
        scopes?: string | undefined;
        token?: unknown;
        codeVerifierMethod?: "plain" | "S256" | undefined;
    } | {
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
    };
    addTo?: unknown;
}>, z.ZodObject<{
    value: z.ZodCatch<z.ZodString>;
    key: z.ZodCatch<z.ZodString>;
    authType: z.ZodLiteral<"api-key">;
    addTo: z.ZodCatch<z.ZodEnum<["HEADERS", "QUERY_PARAMS"]>>;
}, "strip", z.ZodTypeAny, {
    value: string;
    key: string;
    authType: "api-key";
    addTo: "HEADERS" | "QUERY_PARAMS";
}, {
    authType: "api-key";
    value?: unknown;
    key?: unknown;
    addTo?: unknown;
}>]>, z.ZodObject<{
    authActive: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    authActive: boolean;
}, {
    authActive: boolean;
}>>;
export type HoppRESTAuth = z.infer<typeof HoppRESTAuth>;
export declare const V4_SCHEMA: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
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
    name: z.ZodString;
    method: z.ZodString;
    preRequestScript: z.ZodCatch<z.ZodString>;
    testScript: z.ZodCatch<z.ZodString>;
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
    endpoint: z.ZodString;
    requestVariables: z.ZodArray<z.ZodObject<{
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
    v: z.ZodLiteral<"4">;
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
        grantTypeInfo: z.ZodDiscriminatedUnion<"grantType", [z.ZodObject<{
            grantType: z.ZodLiteral<"AUTHORIZATION_CODE">;
            authEndpoint: z.ZodString;
            tokenEndpoint: z.ZodString;
            clientID: z.ZodString;
            clientSecret: z.ZodString;
            scopes: z.ZodOptional<z.ZodString>;
            token: z.ZodCatch<z.ZodString>;
            isPKCE: z.ZodBoolean;
            codeVerifierMethod: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"plain">, z.ZodLiteral<"S256">]>>;
        }, "strip", z.ZodTypeAny, {
            token: string;
            clientID: string;
            grantType: "AUTHORIZATION_CODE";
            authEndpoint: string;
            tokenEndpoint: string;
            clientSecret: string;
            isPKCE: boolean;
            scopes?: string | undefined;
            codeVerifierMethod?: "plain" | "S256" | undefined;
        }, {
            clientID: string;
            grantType: "AUTHORIZATION_CODE";
            authEndpoint: string;
            tokenEndpoint: string;
            clientSecret: string;
            isPKCE: boolean;
            scopes?: string | undefined;
            token?: unknown;
            codeVerifierMethod?: "plain" | "S256" | undefined;
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
        addTo: z.ZodCatch<z.ZodEnum<["HEADERS", "QUERY_PARAMS"]>>;
    }, "strip", z.ZodTypeAny, {
        authType: "oauth-2";
        addTo: "HEADERS" | "QUERY_PARAMS";
        grantTypeInfo: {
            token: string;
            clientID: string;
            grantType: "AUTHORIZATION_CODE";
            authEndpoint: string;
            tokenEndpoint: string;
            clientSecret: string;
            isPKCE: boolean;
            scopes?: string | undefined;
            codeVerifierMethod?: "plain" | "S256" | undefined;
        } | {
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
        };
    }, {
        authType: "oauth-2";
        grantTypeInfo: {
            clientID: string;
            grantType: "AUTHORIZATION_CODE";
            authEndpoint: string;
            tokenEndpoint: string;
            clientSecret: string;
            isPKCE: boolean;
            scopes?: string | undefined;
            token?: unknown;
            codeVerifierMethod?: "plain" | "S256" | undefined;
        } | {
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
        };
        addTo?: unknown;
    }>, z.ZodObject<{
        value: z.ZodCatch<z.ZodString>;
        key: z.ZodCatch<z.ZodString>;
        authType: z.ZodLiteral<"api-key">;
        addTo: z.ZodCatch<z.ZodEnum<["HEADERS", "QUERY_PARAMS"]>>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        key: string;
        authType: "api-key";
        addTo: "HEADERS" | "QUERY_PARAMS";
    }, {
        authType: "api-key";
        value?: unknown;
        key?: unknown;
        addTo?: unknown;
    }>]>, z.ZodObject<{
        authActive: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        authActive: boolean;
    }, {
        authActive: boolean;
    }>>;
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
        authType: "inherit";
    } & {
        authActive: boolean;
    }) | ({
        authType: "oauth-2";
        addTo: "HEADERS" | "QUERY_PARAMS";
        grantTypeInfo: {
            token: string;
            clientID: string;
            grantType: "AUTHORIZATION_CODE";
            authEndpoint: string;
            tokenEndpoint: string;
            clientSecret: string;
            isPKCE: boolean;
            scopes?: string | undefined;
            codeVerifierMethod?: "plain" | "S256" | undefined;
        } | {
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
        };
    } & {
        authActive: boolean;
    }) | ({
        value: string;
        key: string;
        authType: "api-key";
        addTo: "HEADERS" | "QUERY_PARAMS";
    } & {
        authActive: boolean;
    });
    v: "4";
    endpoint: string;
    requestVariables: {
        value: string;
        key: string;
        active: boolean;
    }[];
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
        authType: "inherit";
    } & {
        authActive: boolean;
    }) | ({
        authType: "oauth-2";
        grantTypeInfo: {
            clientID: string;
            grantType: "AUTHORIZATION_CODE";
            authEndpoint: string;
            tokenEndpoint: string;
            clientSecret: string;
            isPKCE: boolean;
            scopes?: string | undefined;
            token?: unknown;
            codeVerifierMethod?: "plain" | "S256" | undefined;
        } | {
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
        };
        addTo?: unknown;
    } & {
        authActive: boolean;
    }) | ({
        authType: "api-key";
        value?: unknown;
        key?: unknown;
        addTo?: unknown;
    } & {
        authActive: boolean;
    });
    v: "4";
    endpoint: string;
    requestVariables: {
        key?: unknown;
        value?: unknown;
        active?: unknown;
    }[];
    id?: string | undefined;
    preRequestScript?: unknown;
    testScript?: unknown;
}>;
declare const _default: import("verzod").Version<z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
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
    name: z.ZodString;
    method: z.ZodString;
    preRequestScript: z.ZodCatch<z.ZodString>;
    testScript: z.ZodCatch<z.ZodString>;
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
    endpoint: z.ZodString;
    requestVariables: z.ZodArray<z.ZodObject<{
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
    v: z.ZodLiteral<"4">;
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
        grantTypeInfo: z.ZodDiscriminatedUnion<"grantType", [z.ZodObject<{
            grantType: z.ZodLiteral<"AUTHORIZATION_CODE">;
            authEndpoint: z.ZodString;
            tokenEndpoint: z.ZodString;
            clientID: z.ZodString;
            clientSecret: z.ZodString;
            scopes: z.ZodOptional<z.ZodString>;
            token: z.ZodCatch<z.ZodString>;
            isPKCE: z.ZodBoolean;
            codeVerifierMethod: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"plain">, z.ZodLiteral<"S256">]>>;
        }, "strip", z.ZodTypeAny, {
            token: string;
            clientID: string;
            grantType: "AUTHORIZATION_CODE";
            authEndpoint: string;
            tokenEndpoint: string;
            clientSecret: string;
            isPKCE: boolean;
            scopes?: string | undefined;
            codeVerifierMethod?: "plain" | "S256" | undefined;
        }, {
            clientID: string;
            grantType: "AUTHORIZATION_CODE";
            authEndpoint: string;
            tokenEndpoint: string;
            clientSecret: string;
            isPKCE: boolean;
            scopes?: string | undefined;
            token?: unknown;
            codeVerifierMethod?: "plain" | "S256" | undefined;
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
        addTo: z.ZodCatch<z.ZodEnum<["HEADERS", "QUERY_PARAMS"]>>;
    }, "strip", z.ZodTypeAny, {
        authType: "oauth-2";
        addTo: "HEADERS" | "QUERY_PARAMS";
        grantTypeInfo: {
            token: string;
            clientID: string;
            grantType: "AUTHORIZATION_CODE";
            authEndpoint: string;
            tokenEndpoint: string;
            clientSecret: string;
            isPKCE: boolean;
            scopes?: string | undefined;
            codeVerifierMethod?: "plain" | "S256" | undefined;
        } | {
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
        };
    }, {
        authType: "oauth-2";
        grantTypeInfo: {
            clientID: string;
            grantType: "AUTHORIZATION_CODE";
            authEndpoint: string;
            tokenEndpoint: string;
            clientSecret: string;
            isPKCE: boolean;
            scopes?: string | undefined;
            token?: unknown;
            codeVerifierMethod?: "plain" | "S256" | undefined;
        } | {
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
        };
        addTo?: unknown;
    }>, z.ZodObject<{
        value: z.ZodCatch<z.ZodString>;
        key: z.ZodCatch<z.ZodString>;
        authType: z.ZodLiteral<"api-key">;
        addTo: z.ZodCatch<z.ZodEnum<["HEADERS", "QUERY_PARAMS"]>>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        key: string;
        authType: "api-key";
        addTo: "HEADERS" | "QUERY_PARAMS";
    }, {
        authType: "api-key";
        value?: unknown;
        key?: unknown;
        addTo?: unknown;
    }>]>, z.ZodObject<{
        authActive: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        authActive: boolean;
    }, {
        authActive: boolean;
    }>>;
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
        authType: "inherit";
    } & {
        authActive: boolean;
    }) | ({
        authType: "oauth-2";
        addTo: "HEADERS" | "QUERY_PARAMS";
        grantTypeInfo: {
            token: string;
            clientID: string;
            grantType: "AUTHORIZATION_CODE";
            authEndpoint: string;
            tokenEndpoint: string;
            clientSecret: string;
            isPKCE: boolean;
            scopes?: string | undefined;
            codeVerifierMethod?: "plain" | "S256" | undefined;
        } | {
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
        };
    } & {
        authActive: boolean;
    }) | ({
        value: string;
        key: string;
        authType: "api-key";
        addTo: "HEADERS" | "QUERY_PARAMS";
    } & {
        authActive: boolean;
    });
    v: "4";
    endpoint: string;
    requestVariables: {
        value: string;
        key: string;
        active: boolean;
    }[];
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
        authType: "inherit";
    } & {
        authActive: boolean;
    }) | ({
        authType: "oauth-2";
        grantTypeInfo: {
            clientID: string;
            grantType: "AUTHORIZATION_CODE";
            authEndpoint: string;
            tokenEndpoint: string;
            clientSecret: string;
            isPKCE: boolean;
            scopes?: string | undefined;
            token?: unknown;
            codeVerifierMethod?: "plain" | "S256" | undefined;
        } | {
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
        };
        addTo?: unknown;
    } & {
        authActive: boolean;
    }) | ({
        authType: "api-key";
        value?: unknown;
        key?: unknown;
        addTo?: unknown;
    } & {
        authActive: boolean;
    });
    v: "4";
    endpoint: string;
    requestVariables: {
        key?: unknown;
        value?: unknown;
        active?: unknown;
    }[];
    id?: string | undefined;
    preRequestScript?: unknown;
    testScript?: unknown;
}>, {
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
    }) | ({
        authType: "oauth-2";
        addTo: "HEADERS" | "QUERY_PARAMS";
        grantTypeInfo: {
            token: string;
            clientID: string;
            grantType: "AUTHORIZATION_CODE";
            authEndpoint: string;
            tokenEndpoint: string;
            clientSecret: string;
            isPKCE: boolean;
            scopes?: string | undefined;
            codeVerifierMethod?: "plain" | "S256" | undefined;
        } | {
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
        };
    } & {
        authActive: boolean;
    });
    v: "3";
    endpoint: string;
    requestVariables: {
        value: string;
        key: string;
        active: boolean;
    }[];
    id?: string | undefined;
}>;
export default _default;

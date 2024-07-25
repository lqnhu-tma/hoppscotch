import { InferredEntity } from "verzod";
import { z } from "zod";
export * from "./content-types";
export { FormDataKeyValue, HoppRESTReqBodyFormData, HoppRESTAuthBasic, HoppRESTAuthInherit, HoppRESTAuthBearer, HoppRESTAuthNone, HoppRESTReqBody, HoppRESTHeaders, } from "./v/1";
export { ClientCredentialsGrantTypeParams, ImplicitOauthFlowParams, PasswordGrantTypeParams, } from "./v/3";
export { AuthCodeGrantTypeParams, HoppRESTAuthOAuth2, HoppRESTAuth, } from "./v/5";
export { HoppRESTAuthAPIKey } from "./v/4";
export { HoppRESTRequestVariables } from "./v/2";
export declare const HoppRESTRequest: import("verzod").VersionedEntity<5, {
    0: import("verzod").Version<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        url: z.ZodString;
        path: z.ZodString;
        headers: z.ZodArray<z.ZodObject<{
            key: z.ZodString;
            value: z.ZodString;
            active: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            value: string;
            key: string;
            active: boolean;
        }, {
            value: string;
            key: string;
            active: boolean;
        }>, "many">;
        params: z.ZodArray<z.ZodObject<{
            key: z.ZodString;
            value: z.ZodString;
            active: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            value: string;
            key: string;
            active: boolean;
        }, {
            value: string;
            key: string;
            active: boolean;
        }>, "many">;
        name: z.ZodString;
        method: z.ZodString;
        preRequestScript: z.ZodString;
        testScript: z.ZodString;
        contentType: z.ZodString;
        body: z.ZodString;
        rawParams: z.ZodOptional<z.ZodString>;
        auth: z.ZodOptional<z.ZodString>;
        httpUser: z.ZodOptional<z.ZodString>;
        httpPassword: z.ZodOptional<z.ZodString>;
        bearerToken: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>, unknown>;
    1: import("verzod").Version<z.ZodObject<{
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
    2: import("verzod").Version<z.ZodObject<{
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
        endpoint: z.ZodString;
        v: z.ZodLiteral<"2">;
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
        v: "2";
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
        v: "2";
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
    }>;
    3: import("verzod").Version<z.ZodObject<{
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
        v: z.ZodLiteral<"3">;
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
        });
        v: "3";
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
        v: "2";
        endpoint: string;
        requestVariables: {
            value: string;
            key: string;
            active: boolean;
        }[];
        id?: string | undefined;
    }>;
    4: import("verzod").Version<z.ZodObject<{
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
    5: import("verzod").Version<z.ZodObject<{
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
        v: z.ZodLiteral<"5">;
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
            value: string;
            key: string;
            authType: "api-key";
            addTo: "HEADERS" | "QUERY_PARAMS";
        } & {
            authActive: boolean;
        }) | ({
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
        });
        v: "5";
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
            authType: "api-key";
            value?: unknown;
            key?: unknown;
            addTo?: unknown;
        } & {
            authActive: boolean;
        }) | ({
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
        });
        v: "5";
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
    }>;
}>;
export type HoppRESTRequest = InferredEntity<typeof HoppRESTRequest>;
export declare const RESTReqSchemaVersion = "5";
export type HoppRESTParam = HoppRESTRequest["params"][number];
export type HoppRESTHeader = HoppRESTRequest["headers"][number];
export type HoppRESTRequestVariable = HoppRESTRequest["requestVariables"][number];
export declare const isEqualHoppRESTRequest: (x: {
    readonly params: {
        value: string;
        key: string;
        active: boolean;
    }[];
    readonly headers: {
        value: string;
        key: string;
        active: boolean;
    }[];
    readonly name: string;
    readonly method: string;
    readonly preRequestScript: string;
    readonly testScript: string;
    readonly body: {
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
    readonly auth: ({
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
        value: string;
        key: string;
        authType: "api-key";
        addTo: "HEADERS" | "QUERY_PARAMS";
    } & {
        authActive: boolean;
    }) | ({
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
    });
    readonly v: "5";
    readonly endpoint: string;
    readonly requestVariables: {
        value: string;
        key: string;
        active: boolean;
    }[];
    readonly id?: string | undefined;
}, y: {
    readonly params: {
        value: string;
        key: string;
        active: boolean;
    }[];
    readonly headers: {
        value: string;
        key: string;
        active: boolean;
    }[];
    readonly name: string;
    readonly method: string;
    readonly preRequestScript: string;
    readonly testScript: string;
    readonly body: {
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
    readonly auth: ({
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
        value: string;
        key: string;
        authType: "api-key";
        addTo: "HEADERS" | "QUERY_PARAMS";
    } & {
        authActive: boolean;
    }) | ({
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
    });
    readonly v: "5";
    readonly endpoint: string;
    readonly requestVariables: {
        value: string;
        key: string;
        active: boolean;
    }[];
    readonly id?: string | undefined;
}) => boolean;
/**
 * Safely tries to extract REST Request data from an unknown value.
 * If we fail to detect certain bits, we just resolve it to the default value
 * @param x The value to extract REST Request data from
 * @param defaultReq The default REST Request to source from
 *
 * @deprecated Usage of this function is no longer recommended and is only here
 * for legacy reasons and will be removed
 */
export declare function safelyExtractRESTRequest(x: unknown, defaultReq: HoppRESTRequest): HoppRESTRequest;
export declare function makeRESTRequest(x: Omit<HoppRESTRequest, "v">): HoppRESTRequest;
export declare function getDefaultRESTRequest(): HoppRESTRequest;
/**
 * Checks if the given value is a HoppRESTRequest
 * @param x The value to check
 *
 * @deprecated This function is no longer recommended and is only here for legacy reasons
 * Use `HoppRESTRequest.is`/`HoppRESTRequest.isLatest` instead.
 */
export declare function isHoppRESTRequest(x: unknown): x is HoppRESTRequest;
/**
 * Safely parses a value into a HoppRESTRequest.
 * @param x The value to check
 *
 * @deprecated This function is no longer recommended and is only here for
 * legacy reasons. Use `HoppRESTRequest.safeParse` instead.
 */
export declare function translateToNewRequest(x: unknown): HoppRESTRequest;

import { z } from "zod";
declare const baseCollectionSchema: z.ZodObject<{
    v: z.ZodLiteral<1>;
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    requests: z.ZodArray<z.ZodLazy<z.ZodUnion<[z.ZodEffects<z.ZodType<{
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
    } | {
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
    } | {
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
    } | {
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
    } | {
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
    } | {
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
    }, z.ZodTypeDef, {
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
    } | {
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
    } | {
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
    } | {
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
    } | {
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
    } | {
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
    } | {
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
    } | {
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
    } | {
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
    } | {
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
    } | {
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
    }>, z.ZodEffects<z.ZodType<{
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
    } | {
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
    } | {
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
    } | {
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
        });
        v: 4;
        query: string;
        variables: string;
        id?: string | undefined;
    } | {
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
        });
        v: 5;
        query: string;
        variables: string;
        id?: string | undefined;
    }, z.ZodTypeDef, {
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
    } | {
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
    } | {
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
    } | {
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
        });
        v: 4;
        query: string;
        variables: string;
        id?: string | undefined;
    } | {
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
        });
        v: 5;
        query: string;
        variables: string;
        id?: string | undefined;
    }>, {
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
        });
        v: 5;
        query: string;
        variables: string;
        id?: string | undefined;
    }, {
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
    } | {
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
    } | {
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
    } | {
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
        });
        v: 4;
        query: string;
        variables: string;
        id?: string | undefined;
    } | {
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
        });
        v: 5;
        query: string;
        variables: string;
        id?: string | undefined;
    }>]>>, "many">;
}, "strip", z.ZodTypeAny, {
    name: string;
    v: 1;
    requests: ({
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
    } | {
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
        });
        v: 5;
        query: string;
        variables: string;
        id?: string | undefined;
    })[];
    id?: string | undefined;
}, {
    name: string;
    v: 1;
    requests: ({
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
    } | {
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
    } | {
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
    } | {
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
    } | {
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
    } | {
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
    } | {
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
    } | {
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
    } | {
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
    } | {
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
        });
        v: 4;
        query: string;
        variables: string;
        id?: string | undefined;
    } | {
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
        });
        v: 5;
        query: string;
        variables: string;
        id?: string | undefined;
    })[];
    id?: string | undefined;
}>;
type Input = z.input<typeof baseCollectionSchema> & {
    folders: Input[];
};
type Output = z.output<typeof baseCollectionSchema> & {
    folders: Output[];
};
export declare const V1_SCHEMA: z.ZodType<Output, z.ZodTypeDef, Input>;
declare const _default: import("verzod").Version<z.ZodType<Output, z.ZodTypeDef, Input>, unknown>;
export default _default;

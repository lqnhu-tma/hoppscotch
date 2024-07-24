import { z } from "zod";
declare const baseCollectionSchema: z.ZodObject<{
    v: z.ZodLiteral<2>;
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
    auth: z.ZodUnion<[z.ZodIntersection<z.ZodDiscriminatedUnion<"authType", [z.ZodObject<{
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
    }>>, z.ZodIntersection<z.ZodDiscriminatedUnion<"authType", [z.ZodObject<{
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
    }>>]>;
    headers: z.ZodUnion<[z.ZodArray<z.ZodObject<{
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
    }>, "many">, z.ZodArray<z.ZodObject<{
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
    }>, "many">]>;
}, "strip", z.ZodTypeAny, {
    headers: ({
        value: string;
        key: string;
        active: boolean;
    }[] | {
        value: string;
        key: string;
        active: boolean;
    }[]) & ({
        value: string;
        key: string;
        active: boolean;
    }[] | {
        value: string;
        key: string;
        active: boolean;
    }[] | undefined);
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
    }) | ({
        authType: "none";
    } & {
        authActive: boolean;
    } & {
        authType: "none";
    } & {
        authActive: boolean;
    }) | ({
        authType: "basic";
        username: string;
        password: string;
    } & {
        authActive: boolean;
    } & {
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
    } & {
        authType: "bearer";
        token: string;
    } & {
        authActive: boolean;
    }) | ({
        authType: "inherit";
    } & {
        authActive: boolean;
    } & {
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
    } & {
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
    } & {
        authActive: boolean;
    }) | ({
        authType: "none";
    } & {
        authActive: boolean;
    } & {
        authType: "none";
    } & {
        authActive: boolean;
    }) | ({
        authType: "basic";
        username: string;
        password: string;
    } & {
        authActive: boolean;
    } & {
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
    } & {
        authType: "bearer";
        token: string;
    } & {
        authActive: boolean;
    }) | ({
        authType: "inherit";
    } & {
        authActive: boolean;
    } & {
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
    } & {
        value: string;
        key: string;
        authType: "api-key";
        addTo: "HEADERS" | "QUERY_PARAMS";
    } & {
        authActive: boolean;
    });
    v: 2;
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
    headers: ({
        key?: unknown;
        value?: unknown;
        active?: unknown;
    }[] | {
        key?: unknown;
        value?: unknown;
        active?: unknown;
    }[]) & ({
        key?: unknown;
        value?: unknown;
        active?: unknown;
    }[] | {
        key?: unknown;
        value?: unknown;
        active?: unknown;
    }[] | undefined);
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
        authType: "none";
    } & {
        authActive: boolean;
    } & {
        authType: "none";
    } & {
        authActive: boolean;
    }) | ({
        authType: "basic";
        username?: unknown;
        password?: unknown;
    } & {
        authActive: boolean;
    } & {
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
    } & {
        authType: "bearer";
        token?: unknown;
    } & {
        authActive: boolean;
    }) | ({
        authType: "inherit";
    } & {
        authActive: boolean;
    } & {
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
    } & {
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
    } & {
        authActive: boolean;
    }) | ({
        authType: "none";
    } & {
        authActive: boolean;
    } & {
        authType: "none";
    } & {
        authActive: boolean;
    }) | ({
        authType: "basic";
        username?: unknown;
        password?: unknown;
    } & {
        authActive: boolean;
    } & {
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
    } & {
        authType: "bearer";
        token?: unknown;
    } & {
        authActive: boolean;
    }) | ({
        authType: "inherit";
    } & {
        authActive: boolean;
    } & {
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
    } & {
        authType: "api-key";
        value?: unknown;
        key?: unknown;
        addTo?: unknown;
    } & {
        authActive: boolean;
    });
    v: 2;
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
export declare const V2_SCHEMA: z.ZodType<Output, z.ZodTypeDef, Input>;
declare const _default: import("verzod").Version<z.ZodType<Output, z.ZodTypeDef, Input>, {
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
} & {
    folders: ({
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
    } & any)[];
}>;
export default _default;

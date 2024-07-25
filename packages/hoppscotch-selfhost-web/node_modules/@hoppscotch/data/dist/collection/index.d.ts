import { InferredEntity } from "verzod";
import { z } from "zod";
export declare const HoppCollection: import("verzod").VersionedEntity<2, {
    1: import("verzod").Version<z.ZodType<{
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
    }, z.ZodTypeDef, {
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
        } & any)[];
    }>, unknown>;
    2: import("verzod").Version<z.ZodType<{
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
    } & {
        folders: ({
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
        } & any)[];
    }, z.ZodTypeDef, {
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
    } & {
        folders: ({
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
        } & any)[];
    }>, {
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
}>;
export type HoppCollection = InferredEntity<typeof HoppCollection>;
export declare const CollectionSchemaVersion = 2;
/**
 * Generates a Collection object. This ignores the version number object
 * @param x The Collection Data
 * @returns The final collection
 */
export declare function makeCollection(x: Omit<HoppCollection, "v">): HoppCollection;
/**
 * Translates an old collection to a new collection
 * @param x The collection object to load
 * @returns The proper new collection format
 */
export declare function translateToNewRESTCollection(x: any): HoppCollection;
/**
 * Translates an old collection to a new collection
 * @param x The collection object to load
 * @returns The proper new collection format
 */
export declare function translateToNewGQLCollection(x: any): HoppCollection;

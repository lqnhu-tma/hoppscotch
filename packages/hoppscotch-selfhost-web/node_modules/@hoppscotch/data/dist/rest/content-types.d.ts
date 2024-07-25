export declare const knownContentTypes: {
    "application/json": string;
    "application/ld+json": string;
    "application/hal+json": string;
    "application/vnd.api+json": string;
    "application/xml": string;
    "application/x-www-form-urlencoded": string;
    "multipart/form-data": string;
    "text/html": string;
    "text/plain": string;
};
export type ValidContentTypes = keyof typeof knownContentTypes;
export declare const ValidContentTypesList: ("multipart/form-data" | "application/json" | "application/ld+json" | "application/hal+json" | "application/vnd.api+json" | "application/xml" | "application/x-www-form-urlencoded" | "text/html" | "text/plain")[];

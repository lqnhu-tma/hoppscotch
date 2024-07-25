import { z } from "zod";
export declare const V0_SCHEMA: z.ZodObject<{
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
}>;
declare const _default: import("verzod").Version<z.ZodObject<{
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
export default _default;

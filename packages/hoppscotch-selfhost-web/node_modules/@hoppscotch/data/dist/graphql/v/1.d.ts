import { z } from "zod";
export declare const GQLHeader: z.ZodObject<{
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
}>;
export type GQLHeader = z.infer<typeof GQLHeader>;
export declare const V1_SCHEMA: z.ZodObject<{
    v: z.ZodLiteral<1>;
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
}, "strip", z.ZodTypeAny, {
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
}, {
    url: string;
    name: string;
    v: 1;
    query: string;
    variables: string;
    headers?: unknown;
}>;
declare const _default: import("verzod").Version<z.ZodObject<{
    v: z.ZodLiteral<1>;
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
}, "strip", z.ZodTypeAny, {
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
}, {
    url: string;
    name: string;
    v: 1;
    query: string;
    variables: string;
    headers?: unknown;
}>, unknown>;
export default _default;

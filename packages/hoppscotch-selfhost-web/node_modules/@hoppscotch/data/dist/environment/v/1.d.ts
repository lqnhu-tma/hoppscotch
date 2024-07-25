import { z } from "zod";
export declare const uniqueID: () => string;
export declare const V1_SCHEMA: z.ZodObject<{
    v: z.ZodLiteral<1>;
    id: z.ZodString;
    name: z.ZodString;
    variables: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        key: z.ZodString;
        secret: z.ZodLiteral<true>;
    }, "strip", z.ZodTypeAny, {
        key: string;
        secret: true;
    }, {
        key: string;
        secret: true;
    }>, z.ZodObject<{
        key: z.ZodString;
        value: z.ZodString;
        secret: z.ZodCatch<z.ZodLiteral<false>>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        key: string;
        secret: false;
    }, {
        value: string;
        key: string;
        secret?: unknown;
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    v: 1;
    variables: ({
        key: string;
        secret: true;
    } | {
        value: string;
        key: string;
        secret: false;
    })[];
}, {
    id: string;
    name: string;
    v: 1;
    variables: ({
        key: string;
        secret: true;
    } | {
        value: string;
        key: string;
        secret?: unknown;
    })[];
}>;
declare const _default: import("verzod").Version<z.ZodObject<{
    v: z.ZodLiteral<1>;
    id: z.ZodString;
    name: z.ZodString;
    variables: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        key: z.ZodString;
        secret: z.ZodLiteral<true>;
    }, "strip", z.ZodTypeAny, {
        key: string;
        secret: true;
    }, {
        key: string;
        secret: true;
    }>, z.ZodObject<{
        key: z.ZodString;
        value: z.ZodString;
        secret: z.ZodCatch<z.ZodLiteral<false>>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        key: string;
        secret: false;
    }, {
        value: string;
        key: string;
        secret?: unknown;
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    v: 1;
    variables: ({
        key: string;
        secret: true;
    } | {
        value: string;
        key: string;
        secret: false;
    })[];
}, {
    id: string;
    name: string;
    v: 1;
    variables: ({
        key: string;
        secret: true;
    } | {
        value: string;
        key: string;
        secret?: unknown;
    })[];
}>, {
    name: string;
    variables: {
        value: string;
        key: string;
    }[];
    id?: string | undefined;
}>;
export default _default;

import { z } from "zod";
export declare const V0_SCHEMA: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    variables: z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        key: string;
    }, {
        value: string;
        key: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    name: string;
    variables: {
        value: string;
        key: string;
    }[];
    id?: string | undefined;
}, {
    name: string;
    variables: {
        value: string;
        key: string;
    }[];
    id?: string | undefined;
}>;
declare const _default: import("verzod").Version<z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    variables: z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        key: string;
    }, {
        value: string;
        key: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    name: string;
    variables: {
        value: string;
        key: string;
    }[];
    id?: string | undefined;
}, {
    name: string;
    variables: {
        value: string;
        key: string;
    }[];
    id?: string | undefined;
}>, unknown>;
export default _default;

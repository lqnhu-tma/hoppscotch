import * as E from "fp-ts/Either";
import { InferredEntity } from "verzod";
import { z } from "zod";
export declare const Environment: import("verzod").VersionedEntity<1, {
    0: import("verzod").Version<z.ZodObject<{
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
    1: import("verzod").Version<z.ZodObject<{
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
}>;
export type Environment = InferredEntity<typeof Environment>;
export type EnvironmentVariable = InferredEntity<typeof Environment>["variables"][number];
export declare const EnvironmentSchemaVersion = 1;
export declare function parseBodyEnvVariablesE(body: string, env: Environment["variables"]): E.Left<"ENV_EXPAND_LOOP"> | E.Right<string>;
/**
 * @deprecated Use `parseBodyEnvVariablesE` instead.
 */
export declare const parseBodyEnvVariables: (body: string, env: Environment["variables"]) => string;
export declare function parseTemplateStringE(str: string, variables: Environment["variables"] | {
    secret: true;
    value: string;
    key: string;
}[], maskValue?: boolean): E.Left<"ENV_EXPAND_LOOP"> | E.Right<string>;
export type NonSecretEnvironmentVariable = Extract<EnvironmentVariable, {
    secret: false;
}>;
export type NonSecretEnvironment = Omit<Environment, "variables"> & {
    variables: NonSecretEnvironmentVariable[];
};
/**
 * @deprecated Use `parseTemplateStringE` instead
 */
export declare const parseTemplateString: (str: string, variables: Environment["variables"] | {
    secret: true;
    value: string;
    key: string;
}[], maskValue?: boolean) => string;
export declare const translateToNewEnvironmentVariables: (x: any) => Environment["variables"][number];
export declare const translateToNewEnvironment: (x: any) => Environment;

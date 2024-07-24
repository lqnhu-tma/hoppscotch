import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import * as O from 'fp-ts/Option';
import * as TE from 'fp-ts/TaskEither';
import * as E from 'fp-ts/Either';
import { TeamMemberRole } from './team/team.model';
import { RESTError } from './types/RESTError';
export declare function throwErr(errMessage: string): never;
export declare function throwHTTPErr(errorData: RESTError): never;
export declare const trace: <T>(val: T) => T;
export declare const namedTrace: <T>(name: string, transform?: (val: T) => unknown) => (val: T) => T;
export declare const getAnnotatedRequiredRoles: (reflector: Reflector, context: ExecutionContext) => O.Option<TeamMemberRole[]>;
export declare const getUserFromGQLContext: (ctx: ExecutionContext) => O.Option<any>;
export declare const getGqlArg: <ArgName extends string>(argName: ArgName, ctx: ExecutionContext) => unknown;
export declare const taskEitherValidateArraySeq: <A, B>(arr: TE.TaskEither<A, B>[]) => TE.TaskEither<A[], B[]>;
export declare const validateEmail: (email: string) => boolean;
export declare const validateSMTPEmail: (email: string) => boolean;
export declare const validateSMTPUrl: (url: string) => boolean;
export declare const validateUrl: (url: string) => boolean;
export declare function stringToJson<T>(str: string): E.Right<T | any> | E.Left<string>;
export declare function isValidLength(title: string, length: number): boolean;
export declare function checkEnvironmentAuthProvider(VITE_ALLOWED_AUTH_PROVIDERS: string): void;
export declare function escapeSqlLikeString(str: string): string;

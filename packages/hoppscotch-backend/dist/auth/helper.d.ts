import { AuthTokens } from 'src/types/AuthTokens';
import { Response } from 'express';
export declare enum Origin {
    ADMIN = "admin",
    APP = "app"
}
export declare enum AuthProvider {
    GOOGLE = "GOOGLE",
    GITHUB = "GITHUB",
    MICROSOFT = "MICROSOFT",
    EMAIL = "EMAIL"
}
export declare const authCookieHandler: (res: Response, authTokens: AuthTokens, redirect: boolean, redirectUrl: string | null) => void | Response<any, Record<string, any>>;
export declare const subscriptionContextCookieParser: (rawCookies: string) => AuthTokens;
export declare function authProviderCheck(provider: string, VITE_ALLOWED_AUTH_PROVIDERS: string): boolean;

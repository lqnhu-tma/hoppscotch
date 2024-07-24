import { AccessToken } from 'src/types/AccessToken';
export type CreateAccessTokenResponse = {
    token: string;
    info: AccessToken;
};
export type CLIErrorResponse = {
    reason: string;
};
export declare function createCLIErrorResponse(reason: string): CLIErrorResponse;

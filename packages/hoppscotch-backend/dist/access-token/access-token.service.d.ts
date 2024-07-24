import { HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAccessTokenDto } from './dto/create-access-token.dto';
import { AuthUser } from 'src/types/AuthUser';
import * as E from 'fp-ts/Either';
import { CreateAccessTokenResponse } from './helper';
import { AccessToken } from 'src/types/AccessToken';
export declare class AccessTokenService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    TITLE_LENGTH: number;
    VALID_TOKEN_DURATIONS: number[];
    TOKEN_PREFIX: string;
    private calculateExpirationDate;
    private validateExpirationDate;
    private cast;
    private extractUUID;
    createPAT(createAccessTokenDto: CreateAccessTokenDto, user: AuthUser): Promise<E.Left<{
        message: string;
        statusCode: HttpStatus;
    }> | E.Right<CreateAccessTokenResponse>>;
    deletePAT(accessTokenID: string): Promise<E.Right<boolean> | E.Left<{
        message: string;
        statusCode: HttpStatus;
    }>>;
    listAllUserPAT(userUid: string, offset: number, limit: number): Promise<any>;
    getUserPAT(accessToken: string): Promise<E.Right<any> | E.Left<string>>;
    updateLastUsedForPAT(token: string): Promise<E.Left<string> | E.Right<AccessToken>>;
}

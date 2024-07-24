import { HttpStatus } from '@nestjs/common';
import { MailerService } from 'src/mailer/mailer.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';
import { VerifyMagicDto } from './dto/verify-magic.dto';
import * as O from 'fp-ts/Option';
import * as E from 'fp-ts/Either';
import { DeviceIdentifierToken } from 'src/types/Passwordless';
import { AuthTokens } from 'src/types/AuthTokens';
import { JwtService } from '@nestjs/jwt';
import { RESTError } from 'src/types/RESTError';
import { AuthUser, IsAdmin } from 'src/types/AuthUser';
import { ConfigService } from '@nestjs/config';
import { InfraConfigService } from 'src/infra-config/infra-config.service';
export declare class AuthService {
    private usersService;
    private prismaService;
    private jwtService;
    private readonly mailerService;
    private readonly configService;
    private infraConfigService;
    constructor(usersService: UserService, prismaService: PrismaService, jwtService: JwtService, mailerService: MailerService, configService: ConfigService, infraConfigService: InfraConfigService);
    private generateMagicLinkTokens;
    private validatePasswordlessTokens;
    private generateRefreshToken;
    generateAuthTokens(userUid: string): Promise<E.Left<RESTError> | E.Right<AuthTokens>>;
    private deleteMagicLinkVerificationTokens;
    checkIfProviderAccountExists(user: AuthUser, SSOUserData: any): Promise<O.None | O.Some<any>>;
    signInMagicLink(email: string, origin: string): Promise<E.Left<{
        message: "invalid/email";
        statusCode: HttpStatus;
    }> | E.Right<DeviceIdentifierToken>>;
    verifyMagicLinkTokens(magicLinkIDTokens: VerifyMagicDto): Promise<E.Right<AuthTokens> | E.Left<RESTError>>;
    refreshAuthTokens(hashedRefreshToken: string, user: AuthUser): Promise<E.Right<AuthTokens> | E.Left<{
        message: string | Record<string, string>;
        statusCode: HttpStatus;
    }>>;
    verifyAdmin(user: AuthUser): Promise<E.Left<RESTError> | E.Right<IsAdmin>>;
    getAuthProviders(): string[];
}

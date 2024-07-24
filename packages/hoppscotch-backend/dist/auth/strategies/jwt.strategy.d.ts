import { Strategy } from 'passport-jwt';
import { AccessTokenPayload } from 'src/types/AuthTokens';
import { UserService } from 'src/user/user.service';
import { ConfigService } from '@nestjs/config';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private usersService;
    private configService;
    constructor(usersService: UserService, configService: ConfigService);
    validate(payload: AccessTokenPayload): Promise<User>;
}
export {};

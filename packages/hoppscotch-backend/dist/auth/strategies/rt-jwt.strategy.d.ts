import { Strategy } from 'passport-jwt';
import { UserService } from 'src/user/user.service';
import { RefreshTokenPayload } from 'src/types/AuthTokens';
import { ConfigService } from '@nestjs/config';
declare const RTJwtStrategy_base: new (...args: any[]) => Strategy;
export declare class RTJwtStrategy extends RTJwtStrategy_base {
    private usersService;
    private configService;
    constructor(usersService: UserService, configService: ConfigService);
    validate(payload: RefreshTokenPayload): Promise<User>;
}
export {};

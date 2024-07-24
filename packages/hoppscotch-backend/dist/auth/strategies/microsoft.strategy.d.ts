import { Strategy } from 'passport-microsoft';
import { AuthService } from '../auth.service';
import { UserService } from 'src/user/user.service';
import { ConfigService } from '@nestjs/config';
declare const MicrosoftStrategy_base: new (...args: any[]) => Strategy;
export declare class MicrosoftStrategy extends MicrosoftStrategy_base {
    private authService;
    private usersService;
    private configService;
    constructor(authService: AuthService, usersService: UserService, configService: ConfigService);
    validate(accessToken: string, refreshToken: string, profile: any, done: any): Promise<any>;
}
export {};

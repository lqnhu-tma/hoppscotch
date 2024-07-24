import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { UserService } from 'src/user/user.service';
import { AuthService } from '../auth.service';
import { ConfigService } from '@nestjs/config';
declare const GoogleStrategy_base: new (...args: any[]) => Strategy;
export declare class GoogleStrategy extends GoogleStrategy_base {
    private usersService;
    private authService;
    private configService;
    constructor(usersService: UserService, authService: AuthService, configService: ConfigService);
    validate(req: Request, accessToken: any, refreshToken: any, profile: any, done: VerifyCallback): Promise<any>;
}
export {};

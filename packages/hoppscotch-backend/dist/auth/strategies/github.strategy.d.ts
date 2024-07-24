import { Strategy } from 'passport-github2';
import { AuthService } from '../auth.service';
import { UserService } from 'src/user/user.service';
import { ConfigService } from '@nestjs/config';
declare const GithubStrategy_base: new (...args: any[]) => Strategy;
export declare class GithubStrategy extends GithubStrategy_base {
    private authService;
    private usersService;
    private configService;
    constructor(authService: AuthService, usersService: UserService, configService: ConfigService);
    validate(accessToken: any, refreshToken: any, profile: any, done: any): Promise<any>;
}
export {};

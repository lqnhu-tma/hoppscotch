import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ConfigService } from '@nestjs/config';
declare const MicrosoftSSOGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class MicrosoftSSOGuard extends MicrosoftSSOGuard_base implements CanActivate {
    private readonly configService;
    constructor(configService: ConfigService);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
    getAuthenticateOptions(context: ExecutionContext): {
        state: {
            redirect_uri: any;
        };
    };
}
export {};

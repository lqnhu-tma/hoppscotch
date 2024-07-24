import { CanActivate, ExecutionContext } from '@nestjs/common';
import { AccessTokenService } from 'src/access-token/access-token.service';
export declare class PATAuthGuard implements CanActivate {
    private accessTokenService;
    constructor(accessTokenService: AccessTokenService);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private extractTokenFromHeader;
}

import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AccessTokenService } from 'src/access-token/access-token.service';
export declare class AccessTokenInterceptor implements NestInterceptor {
    private readonly accessTokenService;
    constructor(accessTokenService: AccessTokenService);
    intercept(context: ExecutionContext, handler: CallHandler): Observable<any>;
}

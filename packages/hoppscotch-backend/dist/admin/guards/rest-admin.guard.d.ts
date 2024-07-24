import { ExecutionContext, CanActivate } from '@nestjs/common';
export declare class RESTAdminGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean;
}

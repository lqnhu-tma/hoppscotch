import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserService } from 'src/user/user.service';
export declare class UserLastActiveOnInterceptor implements NestInterceptor {
    private userService;
    constructor(userService: UserService);
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
    restHandler(context: ExecutionContext, next: CallHandler): Observable<any>;
    graphqlHandler(context: ExecutionContext, next: CallHandler): Observable<any>;
}

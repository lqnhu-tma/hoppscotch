"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLastActiveOnInterceptor = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const user_service_1 = require("../user/user.service");
let UserLastActiveOnInterceptor = class UserLastActiveOnInterceptor {
    constructor(userService) {
        this.userService = userService;
    }
    intercept(context, next) {
        if (context.getType() === 'http') {
            return this.restHandler(context, next);
        }
        else if (context.getType() === 'graphql') {
            return this.graphqlHandler(context, next);
        }
    }
    restHandler(context, next) {
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        return next.handle().pipe((0, operators_1.tap)(() => {
            if (user && typeof user === 'object') {
                this.userService.updateUserLastActiveOn(user.uid);
            }
        }), (0, operators_1.catchError)((error) => {
            if (user && typeof user === 'object') {
                this.userService.updateUserLastActiveOn(user.uid);
            }
            return (0, rxjs_1.throwError)(() => error);
        }));
    }
    graphqlHandler(context, next) {
        var _a;
        const contextObject = graphql_1.GqlExecutionContext.create(context).getContext();
        const user = (_a = contextObject === null || contextObject === void 0 ? void 0 : contextObject.req) === null || _a === void 0 ? void 0 : _a.user;
        return next.handle().pipe((0, operators_1.tap)(() => {
            if (user && typeof user === 'object') {
                this.userService.updateUserLastActiveOn(user.uid);
            }
        }), (0, operators_1.catchError)((error) => {
            if (user && typeof user === 'object') {
                this.userService.updateUserLastActiveOn(user.uid);
            }
            return (0, rxjs_1.throwError)(() => error);
        }));
    }
};
UserLastActiveOnInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserLastActiveOnInterceptor);
exports.UserLastActiveOnInterceptor = UserLastActiveOnInterceptor;
//# sourceMappingURL=user-last-active-on.interceptor.js.map
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
exports.AccessTokenInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const access_token_service_1 = require("../access-token/access-token.service");
const E = require("fp-ts/Either");
const errors_1 = require("../errors");
let AccessTokenInterceptor = class AccessTokenInterceptor {
    constructor(accessTokenService) {
        this.accessTokenService = accessTokenService;
    }
    intercept(context, handler) {
        const req = context.switchToHttp().getRequest();
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            throw new common_1.BadRequestException(errors_1.ACCESS_TOKEN_NOT_FOUND);
        }
        return handler.handle().pipe((0, rxjs_1.map)(async (data) => {
            const userAccessToken = await this.accessTokenService.updateLastUsedForPAT(token);
            if (E.isLeft(userAccessToken))
                throw new common_1.BadRequestException(userAccessToken.left);
            return data;
        }));
    }
};
AccessTokenInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [access_token_service_1.AccessTokenService])
], AccessTokenInterceptor);
exports.AccessTokenInterceptor = AccessTokenInterceptor;
//# sourceMappingURL=access-token.interceptor.js.map
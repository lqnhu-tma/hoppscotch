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
exports.PATAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const access_token_service_1 = require("../access-token/access-token.service");
const E = require("fp-ts/Either");
const luxon_1 = require("luxon");
const errors_1 = require("../errors");
const helper_1 = require("../access-token/helper");
let PATAuthGuard = class PATAuthGuard {
    constructor(accessTokenService) {
        this.accessTokenService = accessTokenService;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if (!token) {
            throw new common_1.BadRequestException((0, helper_1.createCLIErrorResponse)(errors_1.ACCESS_TOKEN_INVALID));
        }
        const userAccessToken = await this.accessTokenService.getUserPAT(token);
        if (E.isLeft(userAccessToken))
            throw new common_1.BadRequestException((0, helper_1.createCLIErrorResponse)(errors_1.ACCESS_TOKEN_INVALID));
        request.user = userAccessToken.right.user;
        const accessToken = userAccessToken.right;
        if (accessToken.expiresOn === null)
            return true;
        const today = luxon_1.DateTime.now().toISO();
        if (accessToken.expiresOn.toISOString() > today)
            return true;
        throw new common_1.BadRequestException((0, helper_1.createCLIErrorResponse)(errors_1.ACCESS_TOKEN_EXPIRED));
    }
    extractTokenFromHeader(request) {
        var _a, _b;
        const [type, token] = (_b = (_a = request.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')) !== null && _b !== void 0 ? _b : [];
        return type === 'Bearer' ? token : undefined;
    }
};
PATAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [access_token_service_1.AccessTokenService])
], PATAuthGuard);
exports.PATAuthGuard = PATAuthGuard;
//# sourceMappingURL=rest-pat-auth.guard.js.map
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
exports.GithubSSOGuard = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const helper_1 = require("../helper");
const errors_1 = require("../../errors");
const config_1 = require("@nestjs/config");
const utils_1 = require("../../utils");
let GithubSSOGuard = class GithubSSOGuard extends (0, passport_1.AuthGuard)('github') {
    constructor(configService) {
        super();
        this.configService = configService;
    }
    canActivate(context) {
        if (!(0, helper_1.authProviderCheck)(helper_1.AuthProvider.GITHUB, this.configService.get('INFRA.VITE_ALLOWED_AUTH_PROVIDERS'))) {
            (0, utils_1.throwHTTPErr)({ message: errors_1.AUTH_PROVIDER_NOT_SPECIFIED, statusCode: 404 });
        }
        return super.canActivate(context);
    }
    getAuthenticateOptions(context) {
        const req = context.switchToHttp().getRequest();
        return {
            state: {
                redirect_uri: req.query.redirect_uri,
            },
        };
    }
};
GithubSSOGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], GithubSSOGuard);
exports.GithubSSOGuard = GithubSSOGuard;
//# sourceMappingURL=github-sso.guard.js.map
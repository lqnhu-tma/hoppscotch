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
exports.GithubStrategy = void 0;
const passport_github2_1 = require("passport-github2");
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../auth.service");
const user_service_1 = require("../../user/user.service");
const O = require("fp-ts/Option");
const E = require("fp-ts/Either");
const config_1 = require("@nestjs/config");
let GithubStrategy = class GithubStrategy extends (0, passport_1.PassportStrategy)(passport_github2_1.Strategy) {
    constructor(authService, usersService, configService) {
        super({
            clientID: configService.get('INFRA.GITHUB_CLIENT_ID'),
            clientSecret: configService.get('INFRA.GITHUB_CLIENT_SECRET'),
            callbackURL: configService.get('INFRA.GITHUB_CALLBACK_URL'),
            scope: [configService.get('INFRA.GITHUB_SCOPE')],
            store: true,
        });
        this.authService = authService;
        this.usersService = usersService;
        this.configService = configService;
    }
    async validate(accessToken, refreshToken, profile, done) {
        const user = await this.usersService.findUserByEmail(profile.emails[0].value);
        if (O.isNone(user)) {
            const createdUser = await this.usersService.createUserSSO(accessToken, refreshToken, profile);
            return createdUser;
        }
        if (!user.value.displayName || !user.value.photoURL) {
            const updatedUser = await this.usersService.updateUserDetails(user.value, profile);
            if (E.isLeft(updatedUser)) {
                throw new common_1.UnauthorizedException(updatedUser.left);
            }
        }
        const providerAccountExists = await this.authService.checkIfProviderAccountExists(user.value, profile);
        if (O.isNone(providerAccountExists))
            await this.usersService.createProviderAccount(user.value, accessToken, refreshToken, profile);
        return user.value;
    }
};
GithubStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        user_service_1.UserService,
        config_1.ConfigService])
], GithubStrategy);
exports.GithubStrategy = GithubStrategy;
//# sourceMappingURL=github.strategy.js.map
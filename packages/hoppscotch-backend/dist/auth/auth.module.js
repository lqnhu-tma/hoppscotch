"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AuthModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const user_module_1 = require("../user/user.module");
const prisma_module_1 = require("../prisma/prisma.module");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const jwt_strategy_1 = require("./strategies/jwt.strategy");
const rt_jwt_strategy_1 = require("./strategies/rt-jwt.strategy");
const google_strategy_1 = require("./strategies/google.strategy");
const github_strategy_1 = require("./strategies/github.strategy");
const microsoft_strategy_1 = require("./strategies/microsoft.strategy");
const helper_1 = require("./helper");
const config_1 = require("@nestjs/config");
const helper_2 = require("../infra-config/helper");
const infra_config_module_1 = require("../infra-config/infra-config.module");
let AuthModule = AuthModule_1 = class AuthModule {
    static async register() {
        const isInfraConfigPopulated = await (0, helper_2.isInfraConfigTablePopulated)();
        if (!isInfraConfigPopulated) {
            return { module: AuthModule_1 };
        }
        const env = await (0, helper_2.loadInfraConfiguration)();
        const allowedAuthProviders = env.INFRA.VITE_ALLOWED_AUTH_PROVIDERS;
        const providers = [
            ...((0, helper_1.authProviderCheck)(helper_1.AuthProvider.GOOGLE, allowedAuthProviders)
                ? [google_strategy_1.GoogleStrategy]
                : []),
            ...((0, helper_1.authProviderCheck)(helper_1.AuthProvider.GITHUB, allowedAuthProviders)
                ? [github_strategy_1.GithubStrategy]
                : []),
            ...((0, helper_1.authProviderCheck)(helper_1.AuthProvider.MICROSOFT, allowedAuthProviders)
                ? [microsoft_strategy_1.MicrosoftStrategy]
                : []),
        ];
        return {
            module: AuthModule_1,
            providers,
        };
    }
};
AuthModule = AuthModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            prisma_module_1.PrismaModule,
            user_module_1.UserModule,
            passport_1.PassportModule,
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    secret: configService.get('JWT_SECRET'),
                }),
            }),
            infra_config_module_1.InfraConfigModule,
        ],
        providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy, rt_jwt_strategy_1.RTJwtStrategy],
        controllers: [auth_controller_1.AuthController],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map
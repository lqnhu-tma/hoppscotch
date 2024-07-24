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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessTokenController = void 0;
const common_1 = require("@nestjs/common");
const access_token_service_1 = require("./access-token.service");
const create_access_token_dto_1 = require("./dto/create-access-token.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const E = require("fp-ts/Either");
const utils_1 = require("../utils");
const gql_user_decorator_1 = require("../decorators/gql-user.decorator");
const throttler_behind_proxy_guard_1 = require("../guards/throttler-behind-proxy.guard");
const rest_pat_auth_guard_1 = require("../guards/rest-pat-auth.guard");
const access_token_interceptor_1 = require("../interceptors/access-token.interceptor");
const team_environments_service_1 = require("../team-environments/team-environments.service");
const team_collection_service_1 = require("../team-collection/team-collection.service");
const errors_1 = require("../errors");
const helper_1 = require("./helper");
let AccessTokenController = class AccessTokenController {
    constructor(accessTokenService, teamCollectionService, teamEnvironmentsService) {
        this.accessTokenService = accessTokenService;
        this.teamCollectionService = teamCollectionService;
        this.teamEnvironmentsService = teamEnvironmentsService;
    }
    async createPAT(user, createAccessTokenDto) {
        const result = await this.accessTokenService.createPAT(createAccessTokenDto, user);
        if (E.isLeft(result))
            (0, utils_1.throwHTTPErr)(result.left);
        return result.right;
    }
    async deletePAT(id) {
        const result = await this.accessTokenService.deletePAT(id);
        if (E.isLeft(result))
            (0, utils_1.throwHTTPErr)(result.left);
        return result.right;
    }
    async listAllUserPAT(user, offset, limit) {
        return await this.accessTokenService.listAllUserPAT(user.uid, offset, limit);
    }
    async fetchCollection(user, id) {
        const res = await this.teamCollectionService.getCollectionForCLI(id, user.uid);
        if (E.isLeft(res))
            throw new common_1.BadRequestException((0, helper_1.createCLIErrorResponse)(errors_1.ACCESS_TOKENS_INVALID_DATA_ID));
        return res.right;
    }
    async fetchEnvironment(user, id) {
        const res = await this.teamEnvironmentsService.getTeamEnvironmentForCLI(id, user.uid);
        if (E.isLeft(res))
            throw new common_1.BadRequestException((0, helper_1.createCLIErrorResponse)(errors_1.ACCESS_TOKENS_INVALID_DATA_ID));
        return res.right;
    }
};
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, gql_user_decorator_1.GqlUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof AuthUser_1.AuthUser !== "undefined" && AuthUser_1.AuthUser) === "function" ? _a : Object, create_access_token_dto_1.CreateAccessTokenDto]),
    __metadata("design:returntype", Promise)
], AccessTokenController.prototype, "createPAT", null);
__decorate([
    (0, common_1.Delete)('revoke'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AccessTokenController.prototype, "deletePAT", null);
__decorate([
    (0, common_1.Get)('list'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, gql_user_decorator_1.GqlUser)()),
    __param(1, (0, common_1.Query)('offset', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Query)('limit', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof AuthUser_1.AuthUser !== "undefined" && AuthUser_1.AuthUser) === "function" ? _b : Object, Number, Number]),
    __metadata("design:returntype", Promise)
], AccessTokenController.prototype, "listAllUserPAT", null);
__decorate([
    (0, common_1.Get)('collection/:id'),
    (0, common_1.UseGuards)(rest_pat_auth_guard_1.PATAuthGuard),
    (0, common_1.UseInterceptors)(access_token_interceptor_1.AccessTokenInterceptor),
    __param(0, (0, gql_user_decorator_1.GqlUser)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof AuthUser_1.AuthUser !== "undefined" && AuthUser_1.AuthUser) === "function" ? _c : Object, String]),
    __metadata("design:returntype", Promise)
], AccessTokenController.prototype, "fetchCollection", null);
__decorate([
    (0, common_1.Get)('environment/:id'),
    (0, common_1.UseGuards)(rest_pat_auth_guard_1.PATAuthGuard),
    (0, common_1.UseInterceptors)(access_token_interceptor_1.AccessTokenInterceptor),
    __param(0, (0, gql_user_decorator_1.GqlUser)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof AuthUser_1.AuthUser !== "undefined" && AuthUser_1.AuthUser) === "function" ? _d : Object, String]),
    __metadata("design:returntype", Promise)
], AccessTokenController.prototype, "fetchEnvironment", null);
AccessTokenController = __decorate([
    (0, common_1.UseGuards)(throttler_behind_proxy_guard_1.ThrottlerBehindProxyGuard),
    (0, common_1.Controller)({ path: 'access-tokens', version: '1' }),
    __metadata("design:paramtypes", [access_token_service_1.AccessTokenService,
        team_collection_service_1.TeamCollectionService,
        team_environments_service_1.TeamEnvironmentsService])
], AccessTokenController);
exports.AccessTokenController = AccessTokenController;
//# sourceMappingURL=access-token.controller.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamCollectionController = void 0;
const common_1 = require("@nestjs/common");
const team_collection_service_1 = require("./team-collection.service");
const E = require("fp-ts/Either");
const throttler_behind_proxy_guard_1 = require("../guards/throttler-behind-proxy.guard");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const requires_team_role_decorator_1 = require("../team/decorators/requires-team-role.decorator");
const client_1 = require("@prisma/client");
const rest_team_member_guard_1 = require("../team/guards/rest-team-member.guard");
const utils_1 = require("../utils");
const errors_1 = require("../errors");
let TeamCollectionController = class TeamCollectionController {
    constructor(teamCollectionService) {
        this.teamCollectionService = teamCollectionService;
    }
    async searchByTitle(searchQuery, teamID, take, skip) {
        if (!teamID || !searchQuery) {
            return {
                message: errors_1.INVALID_PARAMS,
                statusCode: common_1.HttpStatus.BAD_REQUEST,
            };
        }
        const res = await this.teamCollectionService.searchByTitle(searchQuery.trim(), teamID, parseInt(take), parseInt(skip));
        if (E.isLeft(res))
            (0, utils_1.throwHTTPErr)(res.left);
        return res.right;
    }
};
__decorate([
    (0, common_1.Get)('search/:teamID'),
    (0, requires_team_role_decorator_1.RequiresTeamRole)(client_1.TeamMemberRole.VIEWER, client_1.TeamMemberRole.EDITOR, client_1.TeamMemberRole.OWNER),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, rest_team_member_guard_1.RESTTeamMemberGuard),
    __param(0, (0, common_1.Query)('searchQuery')),
    __param(1, (0, common_1.Param)('teamID')),
    __param(2, (0, common_1.Query)('take')),
    __param(3, (0, common_1.Query)('skip')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], TeamCollectionController.prototype, "searchByTitle", null);
TeamCollectionController = __decorate([
    (0, common_1.UseGuards)(throttler_behind_proxy_guard_1.ThrottlerBehindProxyGuard),
    (0, common_1.Controller)({ path: 'team-collection', version: '1' }),
    __metadata("design:paramtypes", [team_collection_service_1.TeamCollectionService])
], TeamCollectionController);
exports.TeamCollectionController = TeamCollectionController;
//# sourceMappingURL=team-collection.controller.js.map
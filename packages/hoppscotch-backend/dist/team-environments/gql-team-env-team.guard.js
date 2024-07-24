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
exports.GqlTeamEnvTeamGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const team_environments_service_1 = require("./team-environments.service");
const errors_1 = require("../errors");
const team_service_1 = require("../team/team.service");
const graphql_1 = require("@nestjs/graphql");
const E = require("fp-ts/Either");
const utils_1 = require("../utils");
let GqlTeamEnvTeamGuard = class GqlTeamEnvTeamGuard {
    constructor(reflector, teamEnvironmentService, teamService) {
        this.reflector = reflector;
        this.teamEnvironmentService = teamEnvironmentService;
        this.teamService = teamService;
    }
    async canActivate(context) {
        const requireRoles = this.reflector.get('requiresTeamRole', context.getHandler());
        if (!requireRoles)
            throw new Error(errors_1.BUG_TEAM_ENV_GUARD_NO_REQUIRE_ROLES);
        const gqlExecCtx = graphql_1.GqlExecutionContext.create(context);
        const { user } = gqlExecCtx.getContext().req;
        if (user == undefined)
            throw new Error(errors_1.BUG_AUTH_NO_USER_CTX);
        const { id } = gqlExecCtx.getArgs();
        if (!id)
            (0, utils_1.throwErr)(errors_1.BUG_TEAM_ENV_GUARD_NO_ENV_ID);
        const teamEnvironment = await this.teamEnvironmentService.getTeamEnvironment(id);
        if (E.isLeft(teamEnvironment))
            (0, utils_1.throwErr)(errors_1.TEAM_ENVIRONMENT_NOT_FOUND);
        const member = await this.teamService.getTeamMember(teamEnvironment.right.teamID, user.uid);
        if (!member)
            (0, utils_1.throwErr)(errors_1.TEAM_ENVIRONMENT_NOT_TEAM_MEMBER);
        return requireRoles.includes(member.role);
    }
};
GqlTeamEnvTeamGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        team_environments_service_1.TeamEnvironmentsService,
        team_service_1.TeamService])
], GqlTeamEnvTeamGuard);
exports.GqlTeamEnvTeamGuard = GqlTeamEnvTeamGuard;
//# sourceMappingURL=gql-team-env-team.guard.js.map
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
exports.RESTTeamMemberGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const team_service_1 = require("../../team/team.service");
const errors_1 = require("../../errors");
const utils_1 = require("../../utils");
let RESTTeamMemberGuard = class RESTTeamMemberGuard {
    constructor(reflector, teamService) {
        this.reflector = reflector;
        this.teamService = teamService;
    }
    async canActivate(context) {
        const requireRoles = this.reflector.get('requiresTeamRole', context.getHandler());
        if (!requireRoles)
            (0, utils_1.throwHTTPErr)({ message: errors_1.BUG_TEAM_NO_REQUIRE_TEAM_ROLE, statusCode: 400 });
        const request = context.switchToHttp().getRequest();
        const { user } = request;
        if (user == undefined)
            (0, utils_1.throwHTTPErr)({ message: errors_1.BUG_AUTH_NO_USER_CTX, statusCode: 400 });
        const teamID = request.params.teamID;
        if (!teamID)
            (0, utils_1.throwHTTPErr)({ message: errors_1.BUG_TEAM_NO_TEAM_ID, statusCode: 400 });
        const teamMember = await this.teamService.getTeamMember(teamID, user.uid);
        if (!teamMember)
            (0, utils_1.throwHTTPErr)({ message: errors_1.TEAM_MEMBER_NOT_FOUND, statusCode: 404 });
        if (requireRoles.includes(teamMember.role))
            return true;
        (0, utils_1.throwHTTPErr)({ message: errors_1.TEAM_NOT_REQUIRED_ROLE, statusCode: 403 });
    }
};
RESTTeamMemberGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        team_service_1.TeamService])
], RESTTeamMemberGuard);
exports.RESTTeamMemberGuard = RESTTeamMemberGuard;
//# sourceMappingURL=rest-team-member.guard.js.map
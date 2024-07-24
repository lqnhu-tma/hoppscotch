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
exports.CreateTeamInvitationArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const team_model_1 = require("../team/team.model");
let CreateTeamInvitationArgs = class CreateTeamInvitationArgs {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID, {
        name: 'teamID',
        description: 'ID of the Team ID to invite from',
    }),
    __metadata("design:type", String)
], CreateTeamInvitationArgs.prototype, "teamID", void 0);
__decorate([
    (0, graphql_1.Field)({ name: 'inviteeEmail', description: 'Email of the user to invite' }),
    __metadata("design:type", String)
], CreateTeamInvitationArgs.prototype, "inviteeEmail", void 0);
__decorate([
    (0, graphql_1.Field)(() => team_model_1.TeamMemberRole, {
        name: 'inviteeRole',
        description: 'Role to be given to the user',
    }),
    __metadata("design:type", String)
], CreateTeamInvitationArgs.prototype, "inviteeRole", void 0);
CreateTeamInvitationArgs = __decorate([
    (0, graphql_1.ArgsType)()
], CreateTeamInvitationArgs);
exports.CreateTeamInvitationArgs = CreateTeamInvitationArgs;
//# sourceMappingURL=input-type.args.js.map
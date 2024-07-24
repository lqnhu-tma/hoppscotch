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
exports.UpdateTeamEnvironmentArgs = exports.CreateTeamEnvironmentArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
let CreateTeamEnvironmentArgs = class CreateTeamEnvironmentArgs {
};
__decorate([
    (0, graphql_1.Field)({
        name: 'name',
        description: 'Name of the Team Environment',
    }),
    __metadata("design:type", String)
], CreateTeamEnvironmentArgs.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID, {
        name: 'teamID',
        description: 'ID of the Team',
    }),
    __metadata("design:type", String)
], CreateTeamEnvironmentArgs.prototype, "teamID", void 0);
__decorate([
    (0, graphql_1.Field)({
        name: 'variables',
        description: 'JSON string of the variables object',
    }),
    __metadata("design:type", String)
], CreateTeamEnvironmentArgs.prototype, "variables", void 0);
CreateTeamEnvironmentArgs = __decorate([
    (0, graphql_1.ArgsType)()
], CreateTeamEnvironmentArgs);
exports.CreateTeamEnvironmentArgs = CreateTeamEnvironmentArgs;
let UpdateTeamEnvironmentArgs = class UpdateTeamEnvironmentArgs {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID, {
        name: 'id',
        description: 'ID of the Team Environment',
    }),
    __metadata("design:type", String)
], UpdateTeamEnvironmentArgs.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({
        name: 'name',
        description: 'Name of the Team Environment',
    }),
    __metadata("design:type", String)
], UpdateTeamEnvironmentArgs.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({
        name: 'variables',
        description: 'JSON string of the variables object',
    }),
    __metadata("design:type", String)
], UpdateTeamEnvironmentArgs.prototype, "variables", void 0);
UpdateTeamEnvironmentArgs = __decorate([
    (0, graphql_1.ArgsType)()
], UpdateTeamEnvironmentArgs);
exports.UpdateTeamEnvironmentArgs = UpdateTeamEnvironmentArgs;
//# sourceMappingURL=input-type.args.js.map
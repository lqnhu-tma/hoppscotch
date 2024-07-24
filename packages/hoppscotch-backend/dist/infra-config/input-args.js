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
exports.EnableAndDisableSSOArgs = exports.InfraConfigArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const InfraConfig_1 = require("../types/InfraConfig");
const helper_1 = require("./helper");
const helper_2 = require("../auth/helper");
let InfraConfigArgs = class InfraConfigArgs {
};
__decorate([
    (0, graphql_1.Field)(() => InfraConfig_1.InfraConfigEnum, {
        description: 'Infra Config Name',
    }),
    __metadata("design:type", String)
], InfraConfigArgs.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({
        description: 'Infra Config Value',
    }),
    __metadata("design:type", String)
], InfraConfigArgs.prototype, "value", void 0);
InfraConfigArgs = __decorate([
    (0, graphql_1.InputType)()
], InfraConfigArgs);
exports.InfraConfigArgs = InfraConfigArgs;
let EnableAndDisableSSOArgs = class EnableAndDisableSSOArgs {
};
__decorate([
    (0, graphql_1.Field)(() => helper_2.AuthProvider, {
        description: 'Auth Provider',
    }),
    __metadata("design:type", String)
], EnableAndDisableSSOArgs.prototype, "provider", void 0);
__decorate([
    (0, graphql_1.Field)(() => helper_1.ServiceStatus, {
        description: 'Auth Provider Status',
    }),
    __metadata("design:type", String)
], EnableAndDisableSSOArgs.prototype, "status", void 0);
EnableAndDisableSSOArgs = __decorate([
    (0, graphql_1.InputType)()
], EnableAndDisableSSOArgs);
exports.EnableAndDisableSSOArgs = EnableAndDisableSSOArgs;
//# sourceMappingURL=input-args.js.map
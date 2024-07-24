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
exports.InfraConfig = void 0;
const graphql_1 = require("@nestjs/graphql");
const helper_1 = require("../auth/helper");
const InfraConfig_1 = require("../types/InfraConfig");
const helper_2 = require("./helper");
let InfraConfig = class InfraConfig {
};
__decorate([
    (0, graphql_1.Field)({
        description: 'Infra Config Name',
    }),
    __metadata("design:type", String)
], InfraConfig.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({
        description: 'Infra Config Value',
    }),
    __metadata("design:type", String)
], InfraConfig.prototype, "value", void 0);
InfraConfig = __decorate([
    (0, graphql_1.ObjectType)()
], InfraConfig);
exports.InfraConfig = InfraConfig;
(0, graphql_1.registerEnumType)(InfraConfig_1.InfraConfigEnum, {
    name: 'InfraConfigEnum',
});
(0, graphql_1.registerEnumType)(helper_1.AuthProvider, {
    name: 'AuthProvider',
});
(0, graphql_1.registerEnumType)(helper_2.ServiceStatus, {
    name: 'ServiceStatus',
});
//# sourceMappingURL=infra-config.model.js.map
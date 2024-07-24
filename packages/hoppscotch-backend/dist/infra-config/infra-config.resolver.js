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
exports.InfraConfigResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const gql_throttler_guard_1 = require("../guards/gql-throttler.guard");
const infra_config_model_1 = require("./infra-config.model");
const infra_config_service_1 = require("./infra-config.service");
const gql_auth_guard_1 = require("../guards/gql-auth.guard");
let InfraConfigResolver = class InfraConfigResolver {
    constructor(infraConfigService) {
        this.infraConfigService = infraConfigService;
    }
    isSMTPEnabled() {
        return this.infraConfigService.isSMTPEnabled();
    }
};
__decorate([
    (0, graphql_1.Query)(() => Boolean, {
        description: 'Check if the SMTP is enabled or not',
    }),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InfraConfigResolver.prototype, "isSMTPEnabled", null);
InfraConfigResolver = __decorate([
    (0, common_1.UseGuards)(gql_throttler_guard_1.GqlThrottlerGuard),
    (0, graphql_1.Resolver)(() => infra_config_model_1.InfraConfig),
    __metadata("design:paramtypes", [infra_config_service_1.InfraConfigService])
], InfraConfigResolver);
exports.InfraConfigResolver = InfraConfigResolver;
//# sourceMappingURL=infra-config.resolver.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfraConfigModule = void 0;
const common_1 = require("@nestjs/common");
const infra_config_service_1 = require("./infra-config.service");
const prisma_module_1 = require("../prisma/prisma.module");
const infra_config_controller_1 = require("./infra-config.controller");
const infra_config_resolver_1 = require("./infra-config.resolver");
let InfraConfigModule = class InfraConfigModule {
};
InfraConfigModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        providers: [infra_config_resolver_1.InfraConfigResolver, infra_config_service_1.InfraConfigService],
        exports: [infra_config_service_1.InfraConfigService],
        controllers: [infra_config_controller_1.SiteController],
    })
], InfraConfigModule);
exports.InfraConfigModule = InfraConfigModule;
//# sourceMappingURL=infra-config.module.js.map
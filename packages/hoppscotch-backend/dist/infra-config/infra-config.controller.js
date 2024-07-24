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
exports.SiteController = void 0;
const common_1 = require("@nestjs/common");
const throttler_behind_proxy_guard_1 = require("../guards/throttler-behind-proxy.guard");
const infra_config_service_1 = require("./infra-config.service");
const E = require("fp-ts/Either");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const rest_admin_guard_1 = require("../admin/guards/rest-admin.guard");
const InfraConfig_1 = require("../types/InfraConfig");
const utils_1 = require("../utils");
let SiteController = class SiteController {
    constructor(infraConfigService) {
        this.infraConfigService = infraConfigService;
    }
    async fetchSetupInfo() {
        const status = await this.infraConfigService.get(InfraConfig_1.InfraConfigEnum.IS_FIRST_TIME_INFRA_SETUP);
        if (E.isLeft(status))
            (0, utils_1.throwHTTPErr)({
                message: status.left,
                statusCode: common_1.HttpStatus.NOT_FOUND,
            });
        return status.right;
    }
    async setSetupAsComplete() {
        const res = await this.infraConfigService.update(InfraConfig_1.InfraConfigEnum.IS_FIRST_TIME_INFRA_SETUP, false.toString(), false);
        if (E.isLeft(res))
            (0, utils_1.throwHTTPErr)({
                message: res.left,
                statusCode: common_1.HttpStatus.FORBIDDEN,
            });
        return res.right;
    }
};
__decorate([
    (0, common_1.Get)('setup'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, rest_admin_guard_1.RESTAdminGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SiteController.prototype, "fetchSetupInfo", null);
__decorate([
    (0, common_1.Put)('setup'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, rest_admin_guard_1.RESTAdminGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SiteController.prototype, "setSetupAsComplete", null);
SiteController = __decorate([
    (0, common_1.UseGuards)(throttler_behind_proxy_guard_1.ThrottlerBehindProxyGuard),
    (0, common_1.Controller)({ path: 'site', version: '1' }),
    __metadata("design:paramtypes", [infra_config_service_1.InfraConfigService])
], SiteController);
exports.SiteController = SiteController;
//# sourceMappingURL=infra-config.controller.js.map
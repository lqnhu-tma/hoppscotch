"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessTokenModule = void 0;
const common_1 = require("@nestjs/common");
const access_token_controller_1 = require("./access-token.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const access_token_service_1 = require("./access-token.service");
const team_collection_module_1 = require("../team-collection/team-collection.module");
const team_environments_module_1 = require("../team-environments/team-environments.module");
const team_module_1 = require("../team/team.module");
let AccessTokenModule = class AccessTokenModule {
};
AccessTokenModule = __decorate([
    (0, common_1.Module)({
        imports: [
            prisma_module_1.PrismaModule,
            team_collection_module_1.TeamCollectionModule,
            team_environments_module_1.TeamEnvironmentsModule,
            team_module_1.TeamModule,
        ],
        controllers: [access_token_controller_1.AccessTokenController],
        providers: [access_token_service_1.AccessTokenService],
        exports: [access_token_service_1.AccessTokenService],
    })
], AccessTokenModule);
exports.AccessTokenModule = AccessTokenModule;
//# sourceMappingURL=access-token.module.js.map
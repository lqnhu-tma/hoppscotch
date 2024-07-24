"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortcodeModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("../prisma/prisma.module");
const pubsub_module_1 = require("../pubsub/pubsub.module");
const user_module_1 = require("../user/user.module");
const shortcode_resolver_1 = require("./shortcode.resolver");
const shortcode_service_1 = require("./shortcode.service");
let ShortcodeModule = class ShortcodeModule {
};
ShortcodeModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, user_module_1.UserModule, pubsub_module_1.PubSubModule],
        providers: [shortcode_service_1.ShortcodeService, shortcode_resolver_1.ShortcodeResolver],
        exports: [shortcode_service_1.ShortcodeService],
    })
], ShortcodeModule);
exports.ShortcodeModule = ShortcodeModule;
//# sourceMappingURL=shortcode.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MailerModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailerModule = void 0;
const common_1 = require("@nestjs/common");
const mailer_1 = require("@nestjs-modules/mailer");
const handlebars_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/handlebars.adapter");
const mailer_service_1 = require("./mailer.service");
const config_1 = require("@nestjs/config");
const helper_1 = require("../infra-config/helper");
const helper_2 = require("./helper");
let MailerModule = MailerModule_1 = class MailerModule {
    static async register() {
        const config = new config_1.ConfigService();
        const env = await (0, helper_1.loadInfraConfiguration)();
        if (env.INFRA.MAILER_SMTP_ENABLE !== 'true') {
            console.log('Mailer module is disabled');
            return {
                module: MailerModule_1,
            };
        }
        let transportOption = (0, helper_2.getTransportOption)(env, config);
        const mailerAddressFrom = (0, helper_2.getMailerAddressFrom)(env, config);
        return {
            module: MailerModule_1,
            imports: [
                mailer_1.MailerModule.forRoot({
                    transport: transportOption,
                    defaults: {
                        from: mailerAddressFrom,
                    },
                    template: {
                        dir: __dirname + '/templates',
                        adapter: new handlebars_adapter_1.HandlebarsAdapter(),
                    },
                }),
            ],
        };
    }
};
MailerModule = MailerModule_1 = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [],
        providers: [mailer_service_1.MailerService],
        exports: [mailer_service_1.MailerService],
    })
], MailerModule);
exports.MailerModule = MailerModule;
//# sourceMappingURL=mailer.module.js.map
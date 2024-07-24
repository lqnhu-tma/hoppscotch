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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailerService = void 0;
const common_1 = require("@nestjs/common");
const utils_1 = require("../utils");
const errors_1 = require("../errors");
const mailer_1 = require("@nestjs-modules/mailer");
const config_1 = require("@nestjs/config");
let MailerService = class MailerService {
    constructor(nestMailerService, configService) {
        this.nestMailerService = nestMailerService;
        this.configService = configService;
    }
    resolveSubjectForMailDesc(mailDesc) {
        switch (mailDesc.template) {
            case 'team-invitation':
                return `A user has invited you to join a team workspace in Hoppscotch`;
            case 'user-invitation':
                return 'Sign in to Hoppscotch';
        }
    }
    async sendEmail(to, mailDesc) {
        if (this.configService.get('INFRA.MAILER_SMTP_ENABLE') !== 'true')
            return;
        try {
            await this.nestMailerService.sendMail({
                to,
                template: mailDesc.template,
                subject: this.resolveSubjectForMailDesc(mailDesc),
                context: mailDesc.variables,
            });
        }
        catch (error) {
            console.log('Error from sendEmail:', error);
            return (0, utils_1.throwErr)(errors_1.EMAIL_FAILED);
        }
    }
    async sendUserInvitationEmail(to, mailDesc) {
        if (this.configService.get('INFRA.MAILER_SMTP_ENABLE') !== 'true')
            return;
        try {
            const res = await this.nestMailerService.sendMail({
                to,
                template: mailDesc.template,
                subject: this.resolveSubjectForMailDesc(mailDesc),
                context: mailDesc.variables,
            });
            return res;
        }
        catch (error) {
            console.log('Error from sendUserInvitationEmail:', error);
            return (0, utils_1.throwErr)(errors_1.EMAIL_FAILED);
        }
    }
};
MailerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Optional)()),
    __metadata("design:paramtypes", [mailer_1.MailerService,
        config_1.ConfigService])
], MailerService);
exports.MailerService = MailerService;
//# sourceMappingURL=mailer.service.js.map
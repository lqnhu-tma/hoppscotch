import { AdminUserInvitationMailDescription, MailDescription, UserMagicLinkMailDescription } from './MailDescriptions';
import { MailerService as NestMailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
export declare class MailerService {
    private readonly nestMailerService;
    private readonly configService;
    constructor(nestMailerService: NestMailerService, configService: ConfigService);
    private resolveSubjectForMailDesc;
    sendEmail(to: string, mailDesc: MailDescription | UserMagicLinkMailDescription): Promise<never>;
    sendUserInvitationEmail(to: string, mailDesc: AdminUserInvitationMailDescription): Promise<any>;
}

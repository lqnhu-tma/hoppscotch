import { TransportType } from '@nestjs-modules/mailer/dist/interfaces/mailer-options.interface';
export declare function getMailerAddressFrom(env: any, config: any): string;
export declare function getTransportOption(env: any, config: any): TransportType;

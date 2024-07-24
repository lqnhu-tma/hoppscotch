export declare class MailerModule {
    static register(): Promise<{
        module: typeof MailerModule;
        imports?: undefined;
    } | {
        module: typeof MailerModule;
        imports: import("@nestjs/common").DynamicModule[];
    }>;
}

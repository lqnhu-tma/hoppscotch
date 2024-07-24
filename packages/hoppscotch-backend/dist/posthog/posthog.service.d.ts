import { SchedulerRegistry } from '@nestjs/schedule';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class PosthogService {
    private readonly configService;
    private readonly prismaService;
    private schedulerRegistry;
    private postHogClient;
    private POSTHOG_API_KEY;
    constructor(configService: ConfigService, prismaService: PrismaService, schedulerRegistry: SchedulerRegistry);
    onModuleInit(): Promise<void>;
    private scheduleCronJob;
    capture(): Promise<void>;
}

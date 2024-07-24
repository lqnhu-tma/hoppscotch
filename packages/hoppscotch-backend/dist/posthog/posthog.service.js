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
exports.PosthogService = void 0;
const common_1 = require("@nestjs/common");
const posthog_node_1 = require("posthog-node");
const schedule_1 = require("@nestjs/schedule");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("../prisma/prisma.service");
const cron_1 = require("cron");
const errors_1 = require("../errors");
const utils_1 = require("../utils");
let PosthogService = class PosthogService {
    constructor(configService, prismaService, schedulerRegistry) {
        this.configService = configService;
        this.prismaService = prismaService;
        this.schedulerRegistry = schedulerRegistry;
        this.POSTHOG_API_KEY = 'phc_9CipPajQC22mSkk2wxe2TXsUA0Ysyupe8dt5KQQELqx';
    }
    async onModuleInit() {
        if (this.configService.get('INFRA.ALLOW_ANALYTICS_COLLECTION') === 'true') {
            console.log('Initializing PostHog');
            this.postHogClient = new posthog_node_1.PostHog(this.POSTHOG_API_KEY, {
                host: 'https://eu.posthog.com',
            });
            this.scheduleCronJob();
        }
    }
    scheduleCronJob() {
        const job = new cron_1.CronJob(schedule_1.CronExpression.EVERY_WEEK, async () => {
            await this.capture();
        });
        this.schedulerRegistry.addCronJob('captureAnalytics', job);
        job.start();
    }
    async capture() {
        if (!this.postHogClient) {
            (0, utils_1.throwErr)(errors_1.POSTHOG_CLIENT_NOT_INITIALIZED);
        }
        this.postHogClient.capture({
            distinctId: this.configService.get('INFRA.ANALYTICS_USER_ID'),
            event: 'sh_instance',
            properties: {
                type: 'COMMUNITY',
                total_user_count: await this.prismaService.user.count(),
                total_workspace_count: await this.prismaService.team.count(),
                version: this.configService.get('npm_package_version'),
            },
        });
        console.log('Sent event to PostHog');
    }
};
PosthogService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        prisma_service_1.PrismaService,
        schedule_1.SchedulerRegistry])
], PosthogService);
exports.PosthogService = PosthogService;
//# sourceMappingURL=posthog.service.js.map
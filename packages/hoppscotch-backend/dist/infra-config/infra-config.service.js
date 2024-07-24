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
exports.InfraConfigService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const E = require("fp-ts/Either");
const InfraConfig_1 = require("../types/InfraConfig");
const errors_1 = require("../errors");
const utils_1 = require("../utils");
const config_1 = require("@nestjs/config");
const helper_1 = require("./helper");
const helper_2 = require("../auth/helper");
let InfraConfigService = class InfraConfigService {
    constructor(prisma, configService) {
        this.prisma = prisma;
        this.configService = configService;
        this.EXCLUDE_FROM_UPDATE_CONFIGS = [
            InfraConfig_1.InfraConfigEnum.VITE_ALLOWED_AUTH_PROVIDERS,
            InfraConfig_1.InfraConfigEnum.ALLOW_ANALYTICS_COLLECTION,
            InfraConfig_1.InfraConfigEnum.ANALYTICS_USER_ID,
            InfraConfig_1.InfraConfigEnum.IS_FIRST_TIME_INFRA_SETUP,
            InfraConfig_1.InfraConfigEnum.MAILER_SMTP_ENABLE,
        ];
        this.EXCLUDE_FROM_FETCH_CONFIGS = [
            InfraConfig_1.InfraConfigEnum.VITE_ALLOWED_AUTH_PROVIDERS,
            InfraConfig_1.InfraConfigEnum.ANALYTICS_USER_ID,
            InfraConfig_1.InfraConfigEnum.IS_FIRST_TIME_INFRA_SETUP,
        ];
    }
    async onModuleInit() {
        await this.initializeInfraConfigTable();
    }
    async initializeInfraConfigTable() {
        try {
            const propsToInsert = await (0, helper_1.getMissingInfraConfigEntries)();
            if (propsToInsert.length > 0) {
                await this.prisma.infraConfig.createMany({ data: propsToInsert });
                (0, helper_1.stopApp)();
            }
        }
        catch (error) {
            if (error.code === 'P1001') {
            }
            else if (error.code === 'P2021') {
                (0, utils_1.throwErr)(errors_1.DATABASE_TABLE_NOT_EXIST);
            }
            else {
                (0, utils_1.throwErr)(error);
            }
        }
    }
    cast(dbInfraConfig) {
        var _a;
        return {
            name: dbInfraConfig.name,
            value: (_a = dbInfraConfig.value) !== null && _a !== void 0 ? _a : '',
        };
    }
    async getInfraConfigsMap() {
        const infraConfigs = await this.prisma.infraConfig.findMany();
        const infraConfigMap = {};
        infraConfigs.forEach((config) => {
            infraConfigMap[config.name] = config.value;
        });
        return infraConfigMap;
    }
    async update(name, value, restartEnabled = false) {
        const isValidate = this.validateEnvValues([{ name, value }]);
        if (E.isLeft(isValidate))
            return E.left(isValidate.left);
        try {
            const infraConfig = await this.prisma.infraConfig.update({
                where: { name },
                data: { value },
            });
            if (restartEnabled)
                (0, helper_1.stopApp)();
            return E.right(this.cast(infraConfig));
        }
        catch (e) {
            return E.left(errors_1.INFRA_CONFIG_UPDATE_FAILED);
        }
    }
    async updateMany(infraConfigs) {
        for (let i = 0; i < infraConfigs.length; i++) {
            if (this.EXCLUDE_FROM_UPDATE_CONFIGS.includes(infraConfigs[i].name))
                return E.left(errors_1.INFRA_CONFIG_OPERATION_NOT_ALLOWED);
        }
        const isValidate = this.validateEnvValues(infraConfigs);
        if (E.isLeft(isValidate))
            return E.left(isValidate.left);
        try {
            await this.prisma.$transaction(async (tx) => {
                for (let i = 0; i < infraConfigs.length; i++) {
                    await tx.infraConfig.update({
                        where: { name: infraConfigs[i].name },
                        data: { value: infraConfigs[i].value },
                    });
                }
            });
            (0, helper_1.stopApp)();
            return E.right(infraConfigs);
        }
        catch (e) {
            return E.left(errors_1.INFRA_CONFIG_UPDATE_FAILED);
        }
    }
    isServiceConfigured(service, configMap) {
        switch (service) {
            case helper_2.AuthProvider.GOOGLE:
                return (configMap.GOOGLE_CLIENT_ID &&
                    configMap.GOOGLE_CLIENT_SECRET &&
                    configMap.GOOGLE_CALLBACK_URL &&
                    configMap.GOOGLE_SCOPE);
            case helper_2.AuthProvider.GITHUB:
                return (configMap.GITHUB_CLIENT_ID &&
                    configMap.GITHUB_CLIENT_SECRET &&
                    configMap.GITHUB_CALLBACK_URL &&
                    configMap.GITHUB_SCOPE);
            case helper_2.AuthProvider.MICROSOFT:
                return (configMap.MICROSOFT_CLIENT_ID &&
                    configMap.MICROSOFT_CLIENT_SECRET &&
                    configMap.MICROSOFT_CALLBACK_URL &&
                    configMap.MICROSOFT_SCOPE &&
                    configMap.MICROSOFT_TENANT);
            case helper_2.AuthProvider.EMAIL:
                if (configMap.MAILER_SMTP_ENABLE !== 'true')
                    return false;
                if (configMap.MAILER_USE_CUSTOM_CONFIGS === 'true') {
                    return (configMap.MAILER_SMTP_HOST &&
                        configMap.MAILER_SMTP_PORT &&
                        configMap.MAILER_SMTP_SECURE &&
                        configMap.MAILER_SMTP_USER &&
                        configMap.MAILER_SMTP_PASSWORD &&
                        configMap.MAILER_TLS_REJECT_UNAUTHORIZED &&
                        configMap.MAILER_ADDRESS_FROM);
                }
                else {
                    return configMap.MAILER_SMTP_URL && configMap.MAILER_ADDRESS_FROM;
                }
            default:
                return false;
        }
    }
    async toggleAnalyticsCollection(status) {
        const isUpdated = await this.update(InfraConfig_1.InfraConfigEnum.ALLOW_ANALYTICS_COLLECTION, status === helper_1.ServiceStatus.ENABLE ? 'true' : 'false');
        if (E.isLeft(isUpdated))
            return E.left(isUpdated.left);
        return E.right(isUpdated.right.value === 'true');
    }
    async enableAndDisableSMTP(status) {
        const isUpdated = await this.toggleServiceStatus(InfraConfig_1.InfraConfigEnum.MAILER_SMTP_ENABLE, status, true);
        if (E.isLeft(isUpdated))
            return E.left(isUpdated.left);
        if (status === helper_1.ServiceStatus.DISABLE) {
            this.enableAndDisableSSO([{ provider: helper_2.AuthProvider.EMAIL, status }]);
        }
        return E.right(true);
    }
    async toggleServiceStatus(configName, status, restartEnabled = false) {
        const isUpdated = await this.update(configName, status === helper_1.ServiceStatus.ENABLE ? 'true' : 'false', restartEnabled);
        if (E.isLeft(isUpdated))
            return E.left(isUpdated.left);
        return E.right(true);
    }
    async enableAndDisableSSO(providerInfo) {
        const allowedAuthProviders = this.configService
            .get('INFRA.VITE_ALLOWED_AUTH_PROVIDERS')
            .split(',');
        let updatedAuthProviders = allowedAuthProviders;
        const infraConfigMap = await this.getInfraConfigsMap();
        providerInfo.forEach(({ provider, status }) => {
            if (status === helper_1.ServiceStatus.ENABLE) {
                const isConfigured = this.isServiceConfigured(provider, infraConfigMap);
                if (!isConfigured) {
                    (0, utils_1.throwErr)(errors_1.INFRA_CONFIG_SERVICE_NOT_CONFIGURED);
                }
                updatedAuthProviders.push(provider);
            }
            else if (status === helper_1.ServiceStatus.DISABLE) {
                updatedAuthProviders = updatedAuthProviders.filter((p) => p !== provider);
            }
        });
        updatedAuthProviders = [...new Set(updatedAuthProviders)];
        if (updatedAuthProviders.length === 0) {
            return E.left(errors_1.AUTH_PROVIDER_NOT_SPECIFIED);
        }
        const isUpdated = await this.update(InfraConfig_1.InfraConfigEnum.VITE_ALLOWED_AUTH_PROVIDERS, updatedAuthProviders.join(','), true);
        if (E.isLeft(isUpdated))
            return E.left(isUpdated.left);
        return E.right(true);
    }
    async get(name) {
        try {
            const infraConfig = await this.prisma.infraConfig.findUniqueOrThrow({
                where: { name },
            });
            return E.right(this.cast(infraConfig));
        }
        catch (e) {
            return E.left(errors_1.INFRA_CONFIG_NOT_FOUND);
        }
    }
    async getMany(names, checkDisallowedKeys = true) {
        if (checkDisallowedKeys) {
            for (let i = 0; i < names.length; i++) {
                if (this.EXCLUDE_FROM_FETCH_CONFIGS.includes(names[i]))
                    return E.left(errors_1.INFRA_CONFIG_OPERATION_NOT_ALLOWED);
            }
        }
        try {
            const infraConfigs = await this.prisma.infraConfig.findMany({
                where: { name: { in: names } },
            });
            return E.right(infraConfigs.map((p) => this.cast(p)));
        }
        catch (e) {
            return E.left(errors_1.INFRA_CONFIG_NOT_FOUND);
        }
    }
    getAllowedAuthProviders() {
        return this.configService
            .get('INFRA.VITE_ALLOWED_AUTH_PROVIDERS')
            .split(',');
    }
    isSMTPEnabled() {
        return (this.configService.get('INFRA.MAILER_SMTP_ENABLE') === 'true');
    }
    async reset() {
        const RESET_EXCLUSION_LIST = [
            InfraConfig_1.InfraConfigEnum.IS_FIRST_TIME_INFRA_SETUP,
            InfraConfig_1.InfraConfigEnum.ANALYTICS_USER_ID,
            InfraConfig_1.InfraConfigEnum.ALLOW_ANALYTICS_COLLECTION,
        ];
        try {
            const infraConfigDefaultObjs = await (0, helper_1.getDefaultInfraConfigs)();
            const updatedInfraConfigDefaultObjs = infraConfigDefaultObjs.filter((p) => RESET_EXCLUSION_LIST.includes(p.name) === false);
            await this.prisma.infraConfig.deleteMany({
                where: {
                    name: {
                        in: updatedInfraConfigDefaultObjs.map((p) => p.name),
                    },
                },
            });
            await this.prisma.infraConfig.createMany({
                data: updatedInfraConfigDefaultObjs,
            });
            (0, helper_1.stopApp)();
            return E.right(true);
        }
        catch (e) {
            return E.left(errors_1.INFRA_CONFIG_RESET_FAILED);
        }
    }
    validateEnvValues(infraConfigs) {
        for (let i = 0; i < infraConfigs.length; i++) {
            switch (infraConfigs[i].name) {
                case InfraConfig_1.InfraConfigEnum.MAILER_SMTP_ENABLE:
                    if (infraConfigs[i].value !== 'true' &&
                        infraConfigs[i].value !== 'false')
                        return E.left(errors_1.INFRA_CONFIG_INVALID_INPUT);
                    break;
                case InfraConfig_1.InfraConfigEnum.MAILER_USE_CUSTOM_CONFIGS:
                    if (infraConfigs[i].value !== 'true' &&
                        infraConfigs[i].value !== 'false')
                        return E.left(errors_1.INFRA_CONFIG_INVALID_INPUT);
                    break;
                case InfraConfig_1.InfraConfigEnum.MAILER_SMTP_URL:
                    const isValidUrl = (0, utils_1.validateSMTPUrl)(infraConfigs[i].value);
                    if (!isValidUrl)
                        return E.left(errors_1.INFRA_CONFIG_INVALID_INPUT);
                    break;
                case InfraConfig_1.InfraConfigEnum.MAILER_ADDRESS_FROM:
                    const isValidEmail = (0, utils_1.validateSMTPEmail)(infraConfigs[i].value);
                    if (!isValidEmail)
                        return E.left(errors_1.INFRA_CONFIG_INVALID_INPUT);
                    break;
                case InfraConfig_1.InfraConfigEnum.MAILER_SMTP_HOST:
                    if (!infraConfigs[i].value)
                        return E.left(errors_1.INFRA_CONFIG_INVALID_INPUT);
                    break;
                case InfraConfig_1.InfraConfigEnum.MAILER_SMTP_PORT:
                    if (!infraConfigs[i].value)
                        return E.left(errors_1.INFRA_CONFIG_INVALID_INPUT);
                    break;
                case InfraConfig_1.InfraConfigEnum.MAILER_SMTP_SECURE:
                    if (infraConfigs[i].value !== 'true' &&
                        infraConfigs[i].value !== 'false')
                        return E.left(errors_1.INFRA_CONFIG_INVALID_INPUT);
                    break;
                case InfraConfig_1.InfraConfigEnum.MAILER_SMTP_USER:
                    if (!infraConfigs[i].value)
                        return E.left(errors_1.INFRA_CONFIG_INVALID_INPUT);
                    break;
                case InfraConfig_1.InfraConfigEnum.MAILER_SMTP_PASSWORD:
                    if (!infraConfigs[i].value)
                        return E.left(errors_1.INFRA_CONFIG_INVALID_INPUT);
                    break;
                case InfraConfig_1.InfraConfigEnum.MAILER_TLS_REJECT_UNAUTHORIZED:
                    if (infraConfigs[i].value !== 'true' &&
                        infraConfigs[i].value !== 'false')
                        return E.left(errors_1.INFRA_CONFIG_INVALID_INPUT);
                    break;
                case InfraConfig_1.InfraConfigEnum.GOOGLE_CLIENT_ID:
                    if (!infraConfigs[i].value)
                        return E.left(errors_1.INFRA_CONFIG_INVALID_INPUT);
                    break;
                case InfraConfig_1.InfraConfigEnum.GOOGLE_CLIENT_SECRET:
                    if (!infraConfigs[i].value)
                        return E.left(errors_1.INFRA_CONFIG_INVALID_INPUT);
                    break;
                case InfraConfig_1.InfraConfigEnum.GOOGLE_CALLBACK_URL:
                    if (!(0, utils_1.validateUrl)(infraConfigs[i].value))
                        return E.left(errors_1.INFRA_CONFIG_INVALID_INPUT);
                    break;
                case InfraConfig_1.InfraConfigEnum.GOOGLE_SCOPE:
                    if (!infraConfigs[i].value)
                        return E.left(errors_1.INFRA_CONFIG_INVALID_INPUT);
                    break;
                case InfraConfig_1.InfraConfigEnum.GITHUB_CLIENT_ID:
                    if (!infraConfigs[i].value)
                        return E.left(errors_1.INFRA_CONFIG_INVALID_INPUT);
                    break;
                case InfraConfig_1.InfraConfigEnum.GITHUB_CLIENT_SECRET:
                    if (!infraConfigs[i].value)
                        return E.left(errors_1.INFRA_CONFIG_INVALID_INPUT);
                    break;
                case InfraConfig_1.InfraConfigEnum.GITHUB_CALLBACK_URL:
                    if (!(0, utils_1.validateUrl)(infraConfigs[i].value))
                        return E.left(errors_1.INFRA_CONFIG_INVALID_INPUT);
                    break;
                case InfraConfig_1.InfraConfigEnum.GITHUB_SCOPE:
                    if (!infraConfigs[i].value)
                        return E.left(errors_1.INFRA_CONFIG_INVALID_INPUT);
                    break;
                case InfraConfig_1.InfraConfigEnum.MICROSOFT_CLIENT_ID:
                    if (!infraConfigs[i].value)
                        return E.left(errors_1.INFRA_CONFIG_INVALID_INPUT);
                    break;
                case InfraConfig_1.InfraConfigEnum.MICROSOFT_CLIENT_SECRET:
                    if (!infraConfigs[i].value)
                        return E.left(errors_1.INFRA_CONFIG_INVALID_INPUT);
                    break;
                case InfraConfig_1.InfraConfigEnum.MICROSOFT_CALLBACK_URL:
                    if (!(0, utils_1.validateUrl)(infraConfigs[i].value))
                        return E.left(errors_1.INFRA_CONFIG_INVALID_INPUT);
                    break;
                case InfraConfig_1.InfraConfigEnum.MICROSOFT_SCOPE:
                    if (!infraConfigs[i].value)
                        return E.left(errors_1.INFRA_CONFIG_INVALID_INPUT);
                    break;
                case InfraConfig_1.InfraConfigEnum.MICROSOFT_TENANT:
                    if (!infraConfigs[i].value)
                        return E.left(errors_1.INFRA_CONFIG_INVALID_INPUT);
                    break;
                default:
                    break;
            }
        }
        return E.right(true);
    }
};
InfraConfigService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        config_1.ConfigService])
], InfraConfigService);
exports.InfraConfigService = InfraConfigService;
//# sourceMappingURL=infra-config.service.js.map
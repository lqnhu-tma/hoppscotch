import { OnModuleInit } from '@nestjs/common';
import { InfraConfig } from './infra-config.model';
import { PrismaService } from 'src/prisma/prisma.service';
import { InfraConfig as DBInfraConfig } from '@prisma/client';
import * as E from 'fp-ts/Either';
import { InfraConfigEnum } from 'src/types/InfraConfig';
import { ConfigService } from '@nestjs/config';
import { ServiceStatus } from './helper';
import { EnableAndDisableSSOArgs, InfraConfigArgs } from './input-args';
import { AuthProvider } from 'src/auth/helper';
export declare class InfraConfigService implements OnModuleInit {
    private readonly prisma;
    private readonly configService;
    constructor(prisma: PrismaService, configService: ConfigService);
    EXCLUDE_FROM_UPDATE_CONFIGS: InfraConfigEnum[];
    EXCLUDE_FROM_FETCH_CONFIGS: InfraConfigEnum[];
    onModuleInit(): Promise<void>;
    initializeInfraConfigTable(): Promise<void>;
    cast(dbInfraConfig: DBInfraConfig): InfraConfig;
    getInfraConfigsMap(): Promise<Record<string, string>>;
    update(name: InfraConfigEnum, value: string, restartEnabled?: boolean): Promise<E.Left<"infra_config/invalid_input"> | E.Right<InfraConfig> | E.Left<"infra_config/update_failed">>;
    updateMany(infraConfigs: InfraConfigArgs[]): Promise<E.Left<string> | E.Right<InfraConfigArgs[]>>;
    isServiceConfigured(service: AuthProvider, configMap: Record<string, string>): string | false;
    toggleAnalyticsCollection(status: ServiceStatus): Promise<E.Right<boolean> | E.Left<"infra_config/update_failed" | "infra_config/invalid_input">>;
    enableAndDisableSMTP(status: ServiceStatus): Promise<E.Right<boolean> | E.Left<"infra_config/update_failed" | "infra_config/invalid_input">>;
    toggleServiceStatus(configName: InfraConfigEnum, status: ServiceStatus, restartEnabled?: boolean): Promise<E.Right<boolean> | E.Left<"infra_config/update_failed" | "infra_config/invalid_input">>;
    enableAndDisableSSO(providerInfo: EnableAndDisableSSOArgs[]): Promise<E.Left<string> | E.Right<boolean>>;
    get(name: InfraConfigEnum): Promise<E.Right<InfraConfig> | E.Left<"infra_config/not_found">>;
    getMany(names: InfraConfigEnum[], checkDisallowedKeys?: boolean): Promise<E.Right<any> | E.Left<string>>;
    getAllowedAuthProviders(): string[];
    isSMTPEnabled(): boolean;
    reset(): Promise<E.Right<boolean> | E.Left<"infra_config/reset_failed">>;
    validateEnvValues(infraConfigs: {
        name: InfraConfigEnum;
        value: string;
    }[]): E.Right<boolean> | E.Left<"infra_config/invalid_input">;
}

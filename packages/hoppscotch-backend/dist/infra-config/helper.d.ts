import { InfraConfigEnum } from 'src/types/InfraConfig';
export declare enum ServiceStatus {
    ENABLE = "ENABLE",
    DISABLE = "DISABLE"
}
export declare function loadInfraConfiguration(): Promise<{
    INFRA: Record<string, any>;
}>;
export declare function getDefaultInfraConfigs(): Promise<{
    name: InfraConfigEnum;
    value: string;
}[]>;
export declare function getMissingInfraConfigEntries(): Promise<{
    name: InfraConfigEnum;
    value: string;
}[]>;
export declare function isInfraConfigTablePopulated(): Promise<boolean>;
export declare function stopApp(): void;
export declare function getConfiguredSSOProviders(): string;
export declare function generateAnalyticsUserId(): string;

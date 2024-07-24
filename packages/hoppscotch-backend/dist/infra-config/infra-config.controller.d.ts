import { InfraConfigService } from './infra-config.service';
export declare class SiteController {
    private infraConfigService;
    constructor(infraConfigService: InfraConfigService);
    fetchSetupInfo(): Promise<import("./infra-config.model").InfraConfig>;
    setSetupAsComplete(): Promise<import("./infra-config.model").InfraConfig>;
}

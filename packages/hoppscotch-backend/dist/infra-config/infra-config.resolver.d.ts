import { InfraConfigService } from './infra-config.service';
export declare class InfraConfigResolver {
    private infraConfigService;
    constructor(infraConfigService: InfraConfigService);
    isSMTPEnabled(): boolean;
}

import { InfraConfigEnum } from 'src/types/InfraConfig';
import { ServiceStatus } from './helper';
import { AuthProvider } from 'src/auth/helper';
export declare class InfraConfigArgs {
    name: InfraConfigEnum;
    value: string;
}
export declare class EnableAndDisableSSOArgs {
    provider: AuthProvider;
    status: ServiceStatus;
}

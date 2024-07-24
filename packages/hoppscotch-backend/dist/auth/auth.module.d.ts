import { GoogleStrategy } from './strategies/google.strategy';
import { GithubStrategy } from './strategies/github.strategy';
import { MicrosoftStrategy } from './strategies/microsoft.strategy';
export declare class AuthModule {
    static register(): Promise<{
        module: typeof AuthModule;
        providers?: undefined;
    } | {
        module: typeof AuthModule;
        providers: (typeof GoogleStrategy | typeof GithubStrategy | typeof MicrosoftStrategy)[];
    }>;
}

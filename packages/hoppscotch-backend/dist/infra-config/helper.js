"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAnalyticsUserId = exports.getConfiguredSSOProviders = exports.stopApp = exports.isInfraConfigTablePopulated = exports.getMissingInfraConfigEntries = exports.getDefaultInfraConfigs = exports.loadInfraConfiguration = exports.ServiceStatus = void 0;
const helper_1 = require("../auth/helper");
const errors_1 = require("../errors");
const prisma_service_1 = require("../prisma/prisma.service");
const InfraConfig_1 = require("../types/InfraConfig");
const utils_1 = require("../utils");
const crypto_1 = require("crypto");
var ServiceStatus;
(function (ServiceStatus) {
    ServiceStatus["ENABLE"] = "ENABLE";
    ServiceStatus["DISABLE"] = "DISABLE";
})(ServiceStatus = exports.ServiceStatus || (exports.ServiceStatus = {}));
const AuthProviderConfigurations = {
    [helper_1.AuthProvider.GOOGLE]: [
        InfraConfig_1.InfraConfigEnum.GOOGLE_CLIENT_ID,
        InfraConfig_1.InfraConfigEnum.GOOGLE_CLIENT_SECRET,
        InfraConfig_1.InfraConfigEnum.GOOGLE_CALLBACK_URL,
        InfraConfig_1.InfraConfigEnum.GOOGLE_SCOPE,
    ],
    [helper_1.AuthProvider.GITHUB]: [
        InfraConfig_1.InfraConfigEnum.GITHUB_CLIENT_ID,
        InfraConfig_1.InfraConfigEnum.GITHUB_CLIENT_SECRET,
        InfraConfig_1.InfraConfigEnum.GITHUB_CALLBACK_URL,
        InfraConfig_1.InfraConfigEnum.GITHUB_SCOPE,
    ],
    [helper_1.AuthProvider.MICROSOFT]: [
        InfraConfig_1.InfraConfigEnum.MICROSOFT_CLIENT_ID,
        InfraConfig_1.InfraConfigEnum.MICROSOFT_CLIENT_SECRET,
        InfraConfig_1.InfraConfigEnum.MICROSOFT_CALLBACK_URL,
        InfraConfig_1.InfraConfigEnum.MICROSOFT_SCOPE,
        InfraConfig_1.InfraConfigEnum.MICROSOFT_TENANT,
    ],
    [helper_1.AuthProvider.EMAIL]: !!process.env.MAILER_USE_CUSTOM_CONFIGS
        ? [
            InfraConfig_1.InfraConfigEnum.MAILER_SMTP_HOST,
            InfraConfig_1.InfraConfigEnum.MAILER_SMTP_PORT,
            InfraConfig_1.InfraConfigEnum.MAILER_SMTP_SECURE,
            InfraConfig_1.InfraConfigEnum.MAILER_SMTP_USER,
            InfraConfig_1.InfraConfigEnum.MAILER_SMTP_PASSWORD,
            InfraConfig_1.InfraConfigEnum.MAILER_TLS_REJECT_UNAUTHORIZED,
            InfraConfig_1.InfraConfigEnum.MAILER_ADDRESS_FROM,
        ]
        : [InfraConfig_1.InfraConfigEnum.MAILER_SMTP_URL, InfraConfig_1.InfraConfigEnum.MAILER_ADDRESS_FROM],
};
async function loadInfraConfiguration() {
    try {
        const prisma = new prisma_service_1.PrismaService();
        const infraConfigs = await prisma.infraConfig.findMany();
        let environmentObject = {};
        infraConfigs.forEach((infraConfig) => {
            environmentObject[infraConfig.name] = infraConfig.value;
        });
        return { INFRA: environmentObject };
    }
    catch (error) {
        return { INFRA: {} };
    }
}
exports.loadInfraConfiguration = loadInfraConfiguration;
async function getDefaultInfraConfigs() {
    var _a, _b;
    const prisma = new prisma_service_1.PrismaService();
    const infraConfigDefaultObjs = [
        {
            name: InfraConfig_1.InfraConfigEnum.MAILER_SMTP_ENABLE,
            value: (_a = process.env.MAILER_SMTP_ENABLE) !== null && _a !== void 0 ? _a : 'true',
        },
        {
            name: InfraConfig_1.InfraConfigEnum.MAILER_USE_CUSTOM_CONFIGS,
            value: (_b = process.env.MAILER_USE_CUSTOM_CONFIGS) !== null && _b !== void 0 ? _b : 'false',
        },
        {
            name: InfraConfig_1.InfraConfigEnum.MAILER_SMTP_URL,
            value: process.env.MAILER_SMTP_URL,
        },
        {
            name: InfraConfig_1.InfraConfigEnum.MAILER_ADDRESS_FROM,
            value: process.env.MAILER_ADDRESS_FROM,
        },
        {
            name: InfraConfig_1.InfraConfigEnum.MAILER_SMTP_HOST,
            value: process.env.MAILER_SMTP_HOST,
        },
        {
            name: InfraConfig_1.InfraConfigEnum.MAILER_SMTP_PORT,
            value: process.env.MAILER_SMTP_PORT,
        },
        {
            name: InfraConfig_1.InfraConfigEnum.MAILER_SMTP_SECURE,
            value: process.env.MAILER_SMTP_SECURE,
        },
        {
            name: InfraConfig_1.InfraConfigEnum.MAILER_SMTP_USER,
            value: process.env.MAILER_SMTP_USER,
        },
        {
            name: InfraConfig_1.InfraConfigEnum.MAILER_SMTP_PASSWORD,
            value: process.env.MAILER_SMTP_PASSWORD,
        },
        {
            name: InfraConfig_1.InfraConfigEnum.MAILER_TLS_REJECT_UNAUTHORIZED,
            value: process.env.MAILER_TLS_REJECT_UNAUTHORIZED,
        },
        {
            name: InfraConfig_1.InfraConfigEnum.GOOGLE_CLIENT_ID,
            value: process.env.GOOGLE_CLIENT_ID,
        },
        {
            name: InfraConfig_1.InfraConfigEnum.GOOGLE_CLIENT_SECRET,
            value: process.env.GOOGLE_CLIENT_SECRET,
        },
        {
            name: InfraConfig_1.InfraConfigEnum.GOOGLE_CALLBACK_URL,
            value: process.env.GOOGLE_CALLBACK_URL,
        },
        {
            name: InfraConfig_1.InfraConfigEnum.GOOGLE_SCOPE,
            value: process.env.GOOGLE_SCOPE,
        },
        {
            name: InfraConfig_1.InfraConfigEnum.GITHUB_CLIENT_ID,
            value: process.env.GITHUB_CLIENT_ID,
        },
        {
            name: InfraConfig_1.InfraConfigEnum.GITHUB_CLIENT_SECRET,
            value: process.env.GITHUB_CLIENT_SECRET,
        },
        {
            name: InfraConfig_1.InfraConfigEnum.GITHUB_CALLBACK_URL,
            value: process.env.GITHUB_CALLBACK_URL,
        },
        {
            name: InfraConfig_1.InfraConfigEnum.GITHUB_SCOPE,
            value: process.env.GITHUB_SCOPE,
        },
        {
            name: InfraConfig_1.InfraConfigEnum.MICROSOFT_CLIENT_ID,
            value: process.env.MICROSOFT_CLIENT_ID,
        },
        {
            name: InfraConfig_1.InfraConfigEnum.MICROSOFT_CLIENT_SECRET,
            value: process.env.MICROSOFT_CLIENT_SECRET,
        },
        {
            name: InfraConfig_1.InfraConfigEnum.MICROSOFT_CALLBACK_URL,
            value: process.env.MICROSOFT_CALLBACK_URL,
        },
        {
            name: InfraConfig_1.InfraConfigEnum.MICROSOFT_SCOPE,
            value: process.env.MICROSOFT_SCOPE,
        },
        {
            name: InfraConfig_1.InfraConfigEnum.MICROSOFT_TENANT,
            value: process.env.MICROSOFT_TENANT,
        },
        {
            name: InfraConfig_1.InfraConfigEnum.VITE_ALLOWED_AUTH_PROVIDERS,
            value: getConfiguredSSOProviders(),
        },
        {
            name: InfraConfig_1.InfraConfigEnum.ALLOW_ANALYTICS_COLLECTION,
            value: false.toString(),
        },
        {
            name: InfraConfig_1.InfraConfigEnum.ANALYTICS_USER_ID,
            value: generateAnalyticsUserId(),
        },
        {
            name: InfraConfig_1.InfraConfigEnum.IS_FIRST_TIME_INFRA_SETUP,
            value: (await prisma.infraConfig.count()) === 0 ? 'true' : 'false',
        },
    ];
    return infraConfigDefaultObjs;
}
exports.getDefaultInfraConfigs = getDefaultInfraConfigs;
async function getMissingInfraConfigEntries() {
    const prisma = new prisma_service_1.PrismaService();
    const [dbInfraConfigs, infraConfigDefaultObjs] = await Promise.all([
        prisma.infraConfig.findMany(),
        getDefaultInfraConfigs(),
    ]);
    const missingEntries = infraConfigDefaultObjs.filter((config) => !dbInfraConfigs.some((dbConfig) => dbConfig.name === config.name));
    return missingEntries;
}
exports.getMissingInfraConfigEntries = getMissingInfraConfigEntries;
async function isInfraConfigTablePopulated() {
    const prisma = new prisma_service_1.PrismaService();
    try {
        const propsRemainingToInsert = await getMissingInfraConfigEntries();
        if (propsRemainingToInsert.length > 0) {
            console.log('Infra Config table is not populated with all entries. Populating now...');
            return false;
        }
        return true;
    }
    catch (error) {
        return false;
    }
}
exports.isInfraConfigTablePopulated = isInfraConfigTablePopulated;
function stopApp() {
    console.log('Stopping app in 5 seconds...');
    setTimeout(() => {
        console.log('Stopping app now...');
        process.kill(process.pid, 'SIGTERM');
    }, 5000);
}
exports.stopApp = stopApp;
function getConfiguredSSOProviders() {
    const allowedAuthProviders = process.env.VITE_ALLOWED_AUTH_PROVIDERS.split(',');
    let configuredAuthProviders = [];
    const addProviderIfConfigured = (provider) => {
        const configParameters = AuthProviderConfigurations[provider];
        const isConfigured = configParameters.every((configParameter) => {
            return process.env[configParameter];
        });
        if (isConfigured)
            configuredAuthProviders.push(provider);
    };
    allowedAuthProviders.forEach((provider) => addProviderIfConfigured(provider));
    if (configuredAuthProviders.length === 0) {
        (0, utils_1.throwErr)(errors_1.AUTH_PROVIDER_NOT_CONFIGURED);
    }
    else if (allowedAuthProviders.length !== configuredAuthProviders.length) {
        const unConfiguredAuthProviders = allowedAuthProviders.filter((provider) => {
            return !configuredAuthProviders.includes(provider);
        });
        console.log(`${unConfiguredAuthProviders.join(',')} SSO auth provider(s) are not configured properly. Do configure them from Admin Dashboard.`);
    }
    return configuredAuthProviders.join(',');
}
exports.getConfiguredSSOProviders = getConfiguredSSOProviders;
function generateAnalyticsUserId() {
    const hashedUserID = (0, crypto_1.randomBytes)(20).toString('hex');
    return hashedUserID;
}
exports.generateAnalyticsUserId = generateAnalyticsUserId;
//# sourceMappingURL=helper.js.map
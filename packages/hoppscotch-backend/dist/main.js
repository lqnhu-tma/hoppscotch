"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const express_1 = require("express");
const app_module_1 = require("./app.module");
const cookieParser = require("cookie-parser");
const common_1 = require("@nestjs/common");
const session = require("express-session");
const gql_schema_1 = require("./gql-schema");
const utils_1 = require("./utils");
const config_1 = require("@nestjs/config");
async function bootstrap() {
    var _a;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    console.log(`Running in production:  ${configService.get('PRODUCTION')}`);
    console.log(`Port: ${configService.get('PORT')}`);
    (0, utils_1.checkEnvironmentAuthProvider)((_a = configService.get('INFRA.VITE_ALLOWED_AUTH_PROVIDERS')) !== null && _a !== void 0 ? _a : configService.get('VITE_ALLOWED_AUTH_PROVIDERS'));
    app.use(session({
        secret: configService.get('SESSION_SECRET'),
    }));
    app.use((0, express_1.json)({
        limit: '100mb',
    }));
    if (configService.get('PRODUCTION') === 'false') {
        console.log('Enabling CORS with development settings');
        app.enableCors({
            origin: configService.get('WHITELISTED_ORIGINS').split(','),
            credentials: true,
        });
    }
    else {
        console.log('Enabling CORS with production settings');
        app.enableCors({
            origin: configService.get('WHITELISTED_ORIGINS').split(','),
            credentials: true,
        });
    }
    app.enableVersioning({
        type: common_1.VersioningType.URI,
    });
    app.use(cookieParser());
    await app.listen(configService.get('PORT') || 3170);
    process.on('SIGTERM', async () => {
        console.info('SIGTERM signal received');
        await app.close();
    });
}
if (!process.env.GENERATE_GQL_SCHEMA) {
    bootstrap();
}
else {
    (0, gql_schema_1.emitGQLSchemaFile)();
}
//# sourceMappingURL=main.js.map
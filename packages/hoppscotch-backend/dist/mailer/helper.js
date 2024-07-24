"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransportOption = exports.getMailerAddressFrom = void 0;
const errors_1 = require("../errors");
const utils_1 = require("../utils");
function isSMTPCustomConfigsEnabled(value) {
    return value === 'true';
}
function getMailerAddressFrom(env, config) {
    var _a, _b;
    return ((_b = (_a = env.INFRA.MAILER_ADDRESS_FROM) !== null && _a !== void 0 ? _a : config.get('MAILER_ADDRESS_FROM')) !== null && _b !== void 0 ? _b : (0, utils_1.throwErr)(errors_1.MAILER_SMTP_URL_UNDEFINED));
}
exports.getMailerAddressFrom = getMailerAddressFrom;
function getTransportOption(env, config) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    const useCustomConfigs = isSMTPCustomConfigsEnabled((_a = env.INFRA.MAILER_USE_CUSTOM_CONFIGS) !== null && _a !== void 0 ? _a : config.get('MAILER_USE_CUSTOM_CONFIGS'));
    if (!useCustomConfigs) {
        console.log('Using simple mailer configuration');
        return ((_c = (_b = env.INFRA.MAILER_SMTP_URL) !== null && _b !== void 0 ? _b : config.get('MAILER_SMTP_URL')) !== null && _c !== void 0 ? _c : (0, utils_1.throwErr)(errors_1.MAILER_SMTP_URL_UNDEFINED));
    }
    else {
        console.log('Using advanced mailer configuration');
        return {
            host: (_d = env.INFRA.MAILER_SMTP_HOST) !== null && _d !== void 0 ? _d : config.get('MAILER_SMTP_HOST'),
            port: (_e = +env.INFRA.MAILER_SMTP_PORT) !== null && _e !== void 0 ? _e : +config.get('MAILER_SMTP_PORT'),
            secure: ((_f = env.INFRA.MAILER_SMTP_SECURE) !== null && _f !== void 0 ? _f : config.get('MAILER_SMTP_SECURE')) ===
                'true',
            auth: {
                user: (_h = (_g = env.INFRA.MAILER_SMTP_USER) !== null && _g !== void 0 ? _g : config.get('MAILER_SMTP_USER')) !== null && _h !== void 0 ? _h : (0, utils_1.throwErr)(errors_1.MAILER_SMTP_USER_UNDEFINED),
                pass: (_k = (_j = env.INFRA.MAILER_SMTP_PASSWORD) !== null && _j !== void 0 ? _j : config.get('MAILER_SMTP_PASSWORD')) !== null && _k !== void 0 ? _k : (0, utils_1.throwErr)(errors_1.MAILER_SMTP_PASSWORD_UNDEFINED),
            },
            tls: {
                rejectUnauthorized: ((_l = env.INFRA.MAILER_TLS_REJECT_UNAUTHORIZED) !== null && _l !== void 0 ? _l : config.get('MAILER_TLS_REJECT_UNAUTHORIZED')) === 'true',
            },
        };
    }
}
exports.getTransportOption = getTransportOption;
//# sourceMappingURL=helper.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authProviderCheck = exports.subscriptionContextCookieParser = exports.authCookieHandler = exports.AuthProvider = exports.Origin = void 0;
const common_1 = require("@nestjs/common");
const luxon_1 = require("luxon");
const cookie = require("cookie");
const errors_1 = require("../errors");
const utils_1 = require("../utils");
const config_1 = require("@nestjs/config");
var AuthTokenType;
(function (AuthTokenType) {
    AuthTokenType["ACCESS_TOKEN"] = "access_token";
    AuthTokenType["REFRESH_TOKEN"] = "refresh_token";
})(AuthTokenType || (AuthTokenType = {}));
var Origin;
(function (Origin) {
    Origin["ADMIN"] = "admin";
    Origin["APP"] = "app";
})(Origin = exports.Origin || (exports.Origin = {}));
var AuthProvider;
(function (AuthProvider) {
    AuthProvider["GOOGLE"] = "GOOGLE";
    AuthProvider["GITHUB"] = "GITHUB";
    AuthProvider["MICROSOFT"] = "MICROSOFT";
    AuthProvider["EMAIL"] = "EMAIL";
})(AuthProvider = exports.AuthProvider || (exports.AuthProvider = {}));
const authCookieHandler = (res, authTokens, redirect, redirectUrl) => {
    const configService = new config_1.ConfigService();
    const currentTime = luxon_1.DateTime.now();
    const accessTokenValidity = currentTime
        .plus({
        milliseconds: parseInt(configService.get('ACCESS_TOKEN_VALIDITY')),
    })
        .toMillis();
    const refreshTokenValidity = currentTime
        .plus({
        milliseconds: parseInt(configService.get('REFRESH_TOKEN_VALIDITY')),
    })
        .toMillis();
    res.cookie(AuthTokenType.ACCESS_TOKEN, authTokens.access_token, {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        maxAge: accessTokenValidity,
    });
    res.cookie(AuthTokenType.REFRESH_TOKEN, authTokens.refresh_token, {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        maxAge: refreshTokenValidity,
    });
    if (!redirect) {
        return res.status(common_1.HttpStatus.OK).send();
    }
    const whitelistedOrigins = configService
        .get('WHITELISTED_ORIGINS')
        .split(',');
    if (!whitelistedOrigins.includes(redirectUrl))
        redirectUrl = configService.get('REDIRECT_URL');
    return res.status(common_1.HttpStatus.OK).redirect(redirectUrl);
};
exports.authCookieHandler = authCookieHandler;
const subscriptionContextCookieParser = (rawCookies) => {
    const cookies = cookie.parse(rawCookies);
    if (!cookies[AuthTokenType.ACCESS_TOKEN] &&
        !cookies[AuthTokenType.REFRESH_TOKEN]) {
        throw new common_1.HttpException(errors_1.COOKIES_NOT_FOUND, 400, {
            cause: new Error(errors_1.COOKIES_NOT_FOUND),
        });
    }
    return {
        access_token: cookies[AuthTokenType.ACCESS_TOKEN],
        refresh_token: cookies[AuthTokenType.REFRESH_TOKEN],
    };
};
exports.subscriptionContextCookieParser = subscriptionContextCookieParser;
function authProviderCheck(provider, VITE_ALLOWED_AUTH_PROVIDERS) {
    if (!provider) {
        (0, utils_1.throwErr)(errors_1.AUTH_PROVIDER_NOT_SPECIFIED);
    }
    const envVariables = VITE_ALLOWED_AUTH_PROVIDERS
        ? VITE_ALLOWED_AUTH_PROVIDERS.split(',').map((provider) => provider.trim().toUpperCase())
        : [];
    if (!envVariables.includes(provider.toUpperCase()))
        return false;
    return true;
}
exports.authProviderCheck = authProviderCheck;
//# sourceMappingURL=helper.js.map
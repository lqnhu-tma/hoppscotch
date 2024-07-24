"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.escapeSqlLikeString = exports.checkEnvironmentAuthProvider = exports.isValidLength = exports.stringToJson = exports.validateUrl = exports.validateSMTPUrl = exports.validateSMTPEmail = exports.validateEmail = exports.taskEitherValidateArraySeq = exports.getGqlArg = exports.getUserFromGQLContext = exports.getAnnotatedRequiredRoles = exports.namedTrace = exports.trace = exports.throwHTTPErr = exports.throwErr = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const function_1 = require("fp-ts/lib/function");
const O = require("fp-ts/Option");
const TE = require("fp-ts/TaskEither");
const T = require("fp-ts/Task");
const E = require("fp-ts/Either");
const A = require("fp-ts/Array");
const errors_1 = require("./errors");
const helper_1 = require("./auth/helper");
function throwErr(errMessage) {
    throw new Error(errMessage);
}
exports.throwErr = throwErr;
function throwHTTPErr(errorData) {
    const { message, statusCode } = errorData;
    throw new common_1.HttpException(message, statusCode);
}
exports.throwHTTPErr = throwHTTPErr;
const trace = (val) => {
    console.log(val);
    return val;
};
exports.trace = trace;
const namedTrace = (name, transform) => (val) => {
    console.log(`${name}:`, transform ? transform(val) : val);
    return val;
};
exports.namedTrace = namedTrace;
const getAnnotatedRequiredRoles = (reflector, context) => (0, function_1.pipe)(reflector.get('requiresTeamRole', context.getHandler()), O.fromNullable);
exports.getAnnotatedRequiredRoles = getAnnotatedRequiredRoles;
const getUserFromGQLContext = (ctx) => (0, function_1.pipe)(ctx, graphql_1.GqlExecutionContext.create, (ctx) => ctx.getContext().req, ({ user }) => user, O.fromNullable);
exports.getUserFromGQLContext = getUserFromGQLContext;
const getGqlArg = (argName, ctx) => (0, function_1.pipe)(ctx, graphql_1.GqlExecutionContext.create, (ctx) => ctx.getArgs(), (args) => args[argName]);
exports.getGqlArg = getGqlArg;
const taskEitherValidateArraySeq = (arr) => (0, function_1.pipe)(arr, A.map(TE.mapLeft(A.of)), A.sequence(TE.getApplicativeTaskValidation(T.ApplicativeSeq, A.getMonoid())));
exports.taskEitherValidateArraySeq = taskEitherValidateArraySeq;
const validateEmail = (email) => {
    return new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email);
};
exports.validateEmail = validateEmail;
const emailRegex1 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const emailRegex2 = /^[\w\s]* <([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})>$/;
const emailRegex3 = /^"[\w\s]+" <([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})>$/;
const validateSMTPEmail = (email) => {
    return (emailRegex1.test(email) ||
        emailRegex2.test(email) ||
        emailRegex3.test(email));
};
exports.validateSMTPEmail = validateSMTPEmail;
const validateSMTPUrl = (url) => {
    if (!url || url.length === 0)
        return false;
    const regex = /^(smtp|smtps):\/\/(?:([^:]+):([^@]+)@)?((?!\.)[^:]+)(?::(\d+))?$/;
    if (regex.test(url))
        return true;
    return false;
};
exports.validateSMTPUrl = validateSMTPUrl;
const validateUrl = (url) => {
    const urlRegex = /^(http|https):\/\/[^ "]+$/;
    return urlRegex.test(url);
};
exports.validateUrl = validateUrl;
function stringToJson(str) {
    try {
        return E.right(JSON.parse(str));
    }
    catch (err) {
        return E.left(errors_1.JSON_INVALID);
    }
}
exports.stringToJson = stringToJson;
function isValidLength(title, length) {
    if (title.length < length) {
        return false;
    }
    return true;
}
exports.isValidLength = isValidLength;
function checkEnvironmentAuthProvider(VITE_ALLOWED_AUTH_PROVIDERS) {
    if (!VITE_ALLOWED_AUTH_PROVIDERS) {
        throw new Error(errors_1.ENV_NOT_FOUND_KEY_AUTH_PROVIDERS);
    }
    if (VITE_ALLOWED_AUTH_PROVIDERS === '') {
        throw new Error(errors_1.ENV_EMPTY_AUTH_PROVIDERS);
    }
    const givenAuthProviders = VITE_ALLOWED_AUTH_PROVIDERS.split(',').map((provider) => provider.toLocaleUpperCase());
    const supportedAuthProviders = Object.values(helper_1.AuthProvider).map((provider) => provider.toLocaleUpperCase());
    for (const givenAuthProvider of givenAuthProviders) {
        if (!supportedAuthProviders.includes(givenAuthProvider)) {
            throw new Error(errors_1.ENV_NOT_SUPPORT_AUTH_PROVIDERS);
        }
    }
}
exports.checkEnvironmentAuthProvider = checkEnvironmentAuthProvider;
function escapeSqlLikeString(str) {
    if (typeof str != 'string')
        return str;
    return str.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function (char) {
        switch (char) {
            case '\0':
                return '\\0';
            case '\x08':
                return '\\b';
            case '\x09':
                return '\\t';
            case '\x1a':
                return '\\z';
            case '\n':
                return '\\n';
            case '\r':
                return '\\r';
            case '"':
            case "'":
            case '\\':
            case '%':
                return '\\' + char;
        }
    });
}
exports.escapeSqlLikeString = escapeSqlLikeString;
//# sourceMappingURL=utils.js.map
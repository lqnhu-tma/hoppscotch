"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessTokenService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const utils_1 = require("../utils");
const E = require("fp-ts/Either");
const errors_1 = require("../errors");
let AccessTokenService = class AccessTokenService {
    constructor(prisma) {
        this.prisma = prisma;
        this.TITLE_LENGTH = 3;
        this.VALID_TOKEN_DURATIONS = [7, 30, 60, 90];
        this.TOKEN_PREFIX = 'pat-';
    }
    calculateExpirationDate(expiresOn) {
        if (expiresOn === null)
            return null;
        return new Date(Date.now() + expiresOn * 24 * 60 * 60 * 1000);
    }
    validateExpirationDate(expiresOn) {
        if (expiresOn === null || this.VALID_TOKEN_DURATIONS.includes(expiresOn))
            return true;
        return false;
    }
    cast(token) {
        return {
            id: token.id,
            label: token.label,
            createdOn: token.createdOn,
            expiresOn: token.expiresOn,
            lastUsedOn: token.updatedOn,
        };
    }
    extractUUID(token) {
        if (!token.startsWith(this.TOKEN_PREFIX))
            return null;
        return token.slice(this.TOKEN_PREFIX.length);
    }
    async createPAT(createAccessTokenDto, user) {
        const isTitleValid = (0, utils_1.isValidLength)(createAccessTokenDto.label, this.TITLE_LENGTH);
        if (!isTitleValid)
            return E.left({
                message: errors_1.ACCESS_TOKEN_LABEL_SHORT,
                statusCode: common_1.HttpStatus.BAD_REQUEST,
            });
        if (!this.validateExpirationDate(createAccessTokenDto.expiryInDays))
            return E.left({
                message: errors_1.ACCESS_TOKEN_EXPIRY_INVALID,
                statusCode: common_1.HttpStatus.BAD_REQUEST,
            });
        const createdPAT = await this.prisma.personalAccessToken.create({
            data: {
                userUid: user.uid,
                label: createAccessTokenDto.label,
                expiresOn: this.calculateExpirationDate(createAccessTokenDto.expiryInDays),
            },
        });
        const res = {
            token: `${this.TOKEN_PREFIX}${createdPAT.token}`,
            info: this.cast(createdPAT),
        };
        return E.right(res);
    }
    async deletePAT(accessTokenID) {
        try {
            await this.prisma.personalAccessToken.delete({
                where: { id: accessTokenID },
            });
            return E.right(true);
        }
        catch (_a) {
            return E.left({
                message: errors_1.ACCESS_TOKEN_NOT_FOUND,
                statusCode: common_1.HttpStatus.NOT_FOUND,
            });
        }
    }
    async listAllUserPAT(userUid, offset, limit) {
        const userPATs = await this.prisma.personalAccessToken.findMany({
            where: {
                userUid: userUid,
            },
            skip: offset,
            take: limit,
            orderBy: {
                createdOn: 'desc',
            },
        });
        const userAccessTokenList = userPATs.map((pat) => this.cast(pat));
        return userAccessTokenList;
    }
    async getUserPAT(accessToken) {
        const extractedToken = this.extractUUID(accessToken);
        if (!extractedToken)
            return E.left(errors_1.ACCESS_TOKEN_NOT_FOUND);
        try {
            const userPAT = await this.prisma.personalAccessToken.findUniqueOrThrow({
                where: { token: extractedToken },
                include: { user: true },
            });
            return E.right(userPAT);
        }
        catch (_a) {
            return E.left(errors_1.ACCESS_TOKEN_NOT_FOUND);
        }
    }
    async updateLastUsedForPAT(token) {
        const extractedToken = this.extractUUID(token);
        if (!extractedToken)
            return E.left(errors_1.ACCESS_TOKEN_NOT_FOUND);
        try {
            const updatedAccessToken = await this.prisma.personalAccessToken.update({
                where: { token: extractedToken },
                data: {
                    updatedOn: new Date(),
                },
            });
            return E.right(this.cast(updatedAccessToken));
        }
        catch (_a) {
            return E.left(errors_1.ACCESS_TOKEN_NOT_FOUND);
        }
    }
};
AccessTokenService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AccessTokenService);
exports.AccessTokenService = AccessTokenService;
//# sourceMappingURL=access-token.service.js.map
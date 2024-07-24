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
exports.ShortcodeService = void 0;
const common_1 = require("@nestjs/common");
const TO = require("fp-ts/TaskOption");
const E = require("fp-ts/Either");
const prisma_service_1 = require("../prisma/prisma.service");
const errors_1 = require("../errors");
const pubsub_service_1 = require("../pubsub/pubsub.service");
const user_service_1 = require("../user/user.service");
const utils_1 = require("../utils");
const SHORT_CODE_LENGTH = 12;
const SHORT_CODE_CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
let ShortcodeService = class ShortcodeService {
    constructor(prisma, pubsub, userService) {
        this.prisma = prisma;
        this.pubsub = pubsub;
        this.userService = userService;
    }
    onModuleInit() {
        this.userService.registerUserDataHandler(this);
    }
    canAllowUserDeletion(user) {
        return TO.none;
    }
    onUserDelete(user) {
        return async () => {
            await this.deleteUserShortCodes(user.uid);
        };
    }
    cast(shortcodeInfo) {
        return {
            id: shortcodeInfo.id,
            request: JSON.stringify(shortcodeInfo.request),
            properties: shortcodeInfo.embedProperties != null
                ? JSON.stringify(shortcodeInfo.embedProperties)
                : null,
            createdOn: shortcodeInfo.createdOn,
        };
    }
    generateShortCodeID() {
        let result = '';
        for (let i = 0; i < SHORT_CODE_LENGTH; i++) {
            result +=
                SHORT_CODE_CHARS[Math.floor(Math.random() * SHORT_CODE_CHARS.length)];
        }
        return result;
    }
    async generateUniqueShortCodeID() {
        while (true) {
            const code = this.generateShortCodeID();
            const data = await this.getShortCode(code);
            if (E.isLeft(data))
                return E.right(code);
        }
    }
    async getShortCode(shortcode) {
        try {
            const shortcodeInfo = await this.prisma.shortcode.findFirstOrThrow({
                where: { id: shortcode },
            });
            return E.right(this.cast(shortcodeInfo));
        }
        catch (error) {
            return E.left(errors_1.SHORTCODE_NOT_FOUND);
        }
    }
    async createShortcode(request, properties = null, userInfo) {
        var _a;
        const requestData = (0, utils_1.stringToJson)(request);
        if (E.isLeft(requestData) || !requestData.right)
            return E.left(errors_1.SHORTCODE_INVALID_REQUEST_JSON);
        const parsedProperties = (0, utils_1.stringToJson)(properties);
        if (E.isLeft(parsedProperties))
            return E.left(errors_1.SHORTCODE_INVALID_PROPERTIES_JSON);
        const generatedShortCode = await this.generateUniqueShortCodeID();
        if (E.isLeft(generatedShortCode))
            return E.left(generatedShortCode.left);
        const createdShortCode = await this.prisma.shortcode.create({
            data: {
                id: generatedShortCode.right,
                request: requestData.right,
                embedProperties: (_a = parsedProperties.right) !== null && _a !== void 0 ? _a : undefined,
                creatorUid: userInfo.uid,
            },
        });
        if (createdShortCode.creatorUid) {
            this.pubsub.publish(`shortcode/${createdShortCode.creatorUid}/created`, this.cast(createdShortCode));
        }
        return E.right(this.cast(createdShortCode));
    }
    async fetchUserShortCodes(uid, args) {
        const shortCodes = await this.prisma.shortcode.findMany({
            where: {
                creatorUid: uid,
            },
            orderBy: {
                createdOn: 'desc',
            },
            skip: args.cursor ? 1 : 0,
            take: args.take,
            cursor: args.cursor ? { id: args.cursor } : undefined,
        });
        const fetchedShortCodes = shortCodes.map((code) => this.cast(code));
        return fetchedShortCodes;
    }
    async revokeShortCode(shortcode, uid) {
        try {
            const deletedShortCodes = await this.prisma.shortcode.delete({
                where: {
                    creator_uid_shortcode_unique: {
                        creatorUid: uid,
                        id: shortcode,
                    },
                },
            });
            this.pubsub.publish(`shortcode/${deletedShortCodes.creatorUid}/revoked`, this.cast(deletedShortCodes));
            return E.right(true);
        }
        catch (error) {
            return E.left(errors_1.SHORTCODE_NOT_FOUND);
        }
    }
    async deleteUserShortCodes(uid) {
        const deletedShortCodes = await this.prisma.shortcode.deleteMany({
            where: {
                creatorUid: uid,
            },
        });
        return deletedShortCodes.count;
    }
    async deleteShortcode(shortcodeID) {
        try {
            await this.prisma.shortcode.delete({
                where: {
                    id: shortcodeID,
                },
            });
            return E.right(true);
        }
        catch (error) {
            return E.left(errors_1.SHORTCODE_NOT_FOUND);
        }
    }
    async updateEmbedProperties(shortcodeID, uid, updatedProps) {
        if (!updatedProps)
            return E.left(errors_1.SHORTCODE_PROPERTIES_NOT_FOUND);
        const parsedProperties = (0, utils_1.stringToJson)(updatedProps);
        if (E.isLeft(parsedProperties) || !parsedProperties.right)
            return E.left(errors_1.SHORTCODE_INVALID_PROPERTIES_JSON);
        try {
            const updatedShortcode = await this.prisma.shortcode.update({
                where: {
                    creator_uid_shortcode_unique: {
                        creatorUid: uid,
                        id: shortcodeID,
                    },
                },
                data: {
                    embedProperties: parsedProperties.right,
                },
            });
            this.pubsub.publish(`shortcode/${updatedShortcode.creatorUid}/updated`, this.cast(updatedShortcode));
            return E.right(this.cast(updatedShortcode));
        }
        catch (error) {
            return E.left(errors_1.SHORTCODE_NOT_FOUND);
        }
    }
    async fetchAllShortcodes(args, userEmail = null) {
        const shortCodes = await this.prisma.shortcode.findMany({
            where: userEmail
                ? {
                    User: {
                        email: {
                            equals: userEmail,
                            mode: 'insensitive',
                        },
                    },
                }
                : undefined,
            orderBy: {
                createdOn: 'desc',
            },
            skip: args.cursor ? 1 : 0,
            take: args.take,
            cursor: args.cursor ? { id: args.cursor } : undefined,
            include: {
                User: true,
            },
        });
        const fetchedShortCodes = shortCodes.map((code) => {
            return {
                id: code.id,
                request: JSON.stringify(code.request),
                properties: code.embedProperties != null
                    ? JSON.stringify(code.embedProperties)
                    : null,
                createdOn: code.createdOn,
                creator: code.User
                    ? {
                        uid: code.User.uid,
                        email: code.User.email,
                    }
                    : null,
            };
        });
        return fetchedShortCodes;
    }
};
ShortcodeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        pubsub_service_1.PubSubService,
        user_service_1.UserService])
], ShortcodeService);
exports.ShortcodeService = ShortcodeService;
//# sourceMappingURL=shortcode.service.js.map
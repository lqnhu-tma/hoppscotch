import { Shortcode } from './shortcode.model';
import { ShortcodeService } from './shortcode.service';
import { User } from 'src/user/user.model';
import { PubSubService } from 'src/pubsub/pubsub.service';
import { AuthUser } from '../types/AuthUser';
import { PaginationArgs } from 'src/types/input-types.args';
export declare class ShortcodeResolver {
    private readonly shortcodeService;
    private readonly pubsub;
    constructor(shortcodeService: ShortcodeService, pubsub: PubSubService);
    shortcode(code: string): Promise<Shortcode>;
    myShortcodes(user: AuthUser, args: PaginationArgs): Promise<Shortcode[]>;
    createShortcode(user: AuthUser, request: string, properties: string): Promise<Shortcode>;
    updateEmbedProperties(user: AuthUser, code: string, properties: string): Promise<Shortcode>;
    revokeShortcode(user: User, code: string): Promise<boolean>;
    myShortcodesCreated(user: AuthUser): AsyncIterator<unknown, any, undefined>;
    myShortcodesUpdated(user: AuthUser): AsyncIterator<unknown, any, undefined>;
    myShortcodesRevoked(user: AuthUser): AsyncIterator<Shortcode>;
}

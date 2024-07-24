import { User } from 'src/user/user.model';
declare const Admin_base: import("@nestjs/common").Type<Omit<User, "isAdmin" | "currentRESTSession" | "currentGQLSession">>;
export declare class Admin extends Admin_base {
}
export {};

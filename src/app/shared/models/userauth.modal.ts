import { User } from "./user.model";

export interface UserAuth {
    user:User,
    Permissions:string[],
}
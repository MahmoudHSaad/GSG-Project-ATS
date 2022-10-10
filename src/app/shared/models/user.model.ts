import { Role } from "./role.modal";

export interface User{
    id:number
    firstname:string;
    lasttname:string;
    email:string;
    role:Role;
}
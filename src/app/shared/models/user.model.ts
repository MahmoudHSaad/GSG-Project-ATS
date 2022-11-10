import { Role } from "./role.modal";

export interface User{
    id:number
    firstname:string;
    lastname:string;
    email:string;
    role:Role;
}
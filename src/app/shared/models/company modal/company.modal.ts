import { Address } from "../address.modal";
import { Contact } from "../contact.modal";
import { Job } from "../job.modal";
import { User } from "../user.model";
import { CompanyInfo } from "./companyInfo.modal";

export interface Company{
   info:CompanyInfo,
   ownerUser: string,
   users:User[],
   contact:Contact,
   address:Address,
   jobs:Job[]
}
     
    
    
     
import { Address } from "./address.modal";
import { Contact } from "./contact.modal";
import { Education } from "./education.modal";
import { Experience } from "./experience.modal";
import { Languages } from "./languages.modal";
import { Skills } from "./skills.modal";
import { User } from "./user.model";

export interface Jobseeker {
    user:User;
    contact:Contact;
    address:Address;
    educations:Education[];
    experiences:Experience[]
    skills:Skills[]
    Languages:Languages[]
}

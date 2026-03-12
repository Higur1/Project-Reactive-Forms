import { IUserFormContactInformations } from "./user-form-contact-informatons.interface";
import { IUserFormDependent } from "./user-form-dependent.interface";
import { IUserFormGeneralInformations } from "./user-form-general-informations.interface";

export interface IUserForm {
    generalInformations: IUserFormGeneralInformations;
    contactInformations: IUserFormContactInformations;
    dependentList: IUserFormDependent[];
}






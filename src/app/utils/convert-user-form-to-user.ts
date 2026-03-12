import { IUser } from "../interfaces/user/user.interface";
import { IUserFormGeneralInformations } from "../interfaces/userForm/user-form-general-informations.interface";
import { IUserForm } from "../interfaces/userForm/user-form.interface";
import { convertObjToDate } from "./convert-obj-to-date";

export const convertUserFormToUser = (userForm: IUserForm): IUser => {
    let newUser: Partial<IUser> = {} as IUser;

    newUser = { ...convertGeneralInformations(userForm.generalInformations) };

    return newUser as IUser;
}

const convertGeneralInformations = (generalInformations: IUserFormGeneralInformations): Partial<IUser> => {
    return {
        name: generalInformations.name,
        email: generalInformations.email,
        country: generalInformations.country,
        state: generalInformations.state,
        maritalStatus: generalInformations.maritalStatus,
        monthlyIncome: generalInformations.monthlyIncome,
        birthDate: convertObjToDate(generalInformations.birthDate),
    };
}
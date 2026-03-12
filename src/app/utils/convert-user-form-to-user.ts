import { IUser } from "../interfaces/user/user.interface";
import { IUserFormAddress } from "../interfaces/userForm/user-form-address.interface";
import { IUserFormDependent } from "../interfaces/userForm/user-form-dependent.interface";
import { IUserFormGeneralInformations } from "../interfaces/userForm/user-form-general-informations.interface";
import { IUserFormPhone } from "../interfaces/userForm/user-form-phone.interface";
import { IUserForm } from "../interfaces/userForm/user-form.interface";
import { AddressList } from "../types/address-list";
import { DependentsList } from "../types/dependents-list";
import { PhoneList } from "../types/phone-list";
import { convertObjToDate } from "./convert-obj-to-date";

export const convertUserFormToUser = (userForm: IUserForm): IUser => {
    let newUser: Partial<IUser> = {} as IUser;

    newUser = { ...convertGeneralInformations(userForm.generalInformations) };
    newUser.phoneList = [...convertPhoneList(userForm.contactInformations.phoneList)];
    newUser.addressList = [...convertAddressList(userForm.contactInformations.addressList)];
    newUser.dependentsList = [...convertDepedentList(userForm.dependentList)];

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

const convertPhoneList = (phoneList: IUserFormPhone[]): PhoneList => {
    return phoneList.map((phone) => ({
        type: phone.type,
        internationalCode: phone.number.substring(0, 2),
        areaCode: phone.number.substring(2, 4),
        number: phone.number.substring(4)
    }));
}

const convertAddressList = (addressList: IUserFormAddress[]): AddressList => {
    return addressList.map((address) => ({
        type: address.type,
        street: address.street,
        complement: address.complement,
        country: address.country,
        state: address.state,
        city: address.city,
    }));
}

const convertDepedentList = (dependentList: IUserFormDependent[]): DependentsList => {
    return dependentList.map((dependent) => ({
        name: dependent.name,
        age: Number(dependent.age),
        document: Number(dependent.document)
    }));
}
import { addressTypeDescriptionMap } from "../components/contact-informations/components/address-group/address-group";
import { AddressTypeEnum } from "../enums/address-type.enum";
import { IAddressToDisplay } from "../interfaces/address-to-display.interface";
import { IAddress } from "../interfaces/user/address.interface";
import { AddressList } from "../types/address-list";

export const prepareAddressList = (originaluserAddressList: AddressList, isDisplayAddress: boolean, callback: (address: IAddressToDisplay) => void) => {
    Object.keys(addressTypeDescriptionMap).map(Number).forEach((addressType: number) => {
        const addressFound = originaluserAddressList.find((userAddress: IAddress) => userAddress.type === addressType);

        let address = {} as IAddressToDisplay;

        if (isDisplayAddress) {
            address = returnAddressToDisplay(addressFound, addressType);
        } else {
            address = returnAddressToEdit(addressFound, addressType);
        }

        callback({
            ...address
        })
    });
}

const returnAddressToDisplay = (address: IAddress | undefined, addressType: number): IAddressToDisplay => {
    if (!address) {
        return {
            typeDescription: addressTypeDescriptionMap[addressType as AddressTypeEnum],
            type: addressType,
            street: '-',
            complement: '-',
            country: '-',
            state: '-',
            city: '-'
        };
    }
    return {
        typeDescription: addressTypeDescriptionMap[addressType as AddressTypeEnum],
        ...address,
    };
}
const returnAddressToEdit = (address: IAddress | undefined, addressType: number): IAddressToDisplay => {
    if (!address) {
        return {
            typeDescription: addressTypeDescriptionMap[addressType as AddressTypeEnum],
            type: addressType,
            street: '',
            complement: '',
            country: '',
            state: '',
            city: ''
        };
    }
    return {
        typeDescription: addressTypeDescriptionMap[addressType as AddressTypeEnum],
        ...address,
    };
}
import { MaritalStatusEnum } from "../enums/marital-status.enum";

export const maritalStatusDescriptionMap: { [key in MaritalStatusEnum]: string } = {
    [MaritalStatusEnum.SINGLE]: 'Single',
    [MaritalStatusEnum.MARRIED]: 'Married',
    [MaritalStatusEnum.DIVORCED]: 'Diverced'
};

export const maritalStatusArray = Object.keys(maritalStatusDescriptionMap).map(Number).map((key) => {
    return { code: key, description: maritalStatusDescriptionMap[key as MaritalStatusEnum] }
});
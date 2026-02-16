import { PhoneTypeEnum } from "../enums/phone-type.enum";

export const phoneTypeDescriptionMap: { [key in PhoneTypeEnum]: string } = {
    [PhoneTypeEnum.RESIDENTIAL]: 'Residential',
    [PhoneTypeEnum.MOBILE]: 'Mobile',
    [PhoneTypeEnum.EMERGENCY]: 'Emergency'
};
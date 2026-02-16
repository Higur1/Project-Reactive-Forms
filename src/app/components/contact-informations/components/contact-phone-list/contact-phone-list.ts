import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { required } from '@angular/forms/signals';
import { PhoneList } from '../../../../types/phone-list';
import { PhoneTypeEnum } from '../../../../enums/phone-type.enum';
import { IPhone } from '../../../../interfaces/user/phone.interface';

@Component({
  selector: 'app-contact-phone-list',
  standalone: false,
  templateUrl: './contact-phone-list.html',
  styleUrl: './contact-phone-list.scss',
})
export class ContactPhoneList implements OnChanges {
  phoneListToDisplay: any[] = [];
  @Input({ required: true }) userPhoneList: PhoneList | undefined = [];

  ngOnChanges(changes: SimpleChanges) {
    const PHONE_LIST_LOADED = Array.isArray(changes['userPhoneList'].currentValue);

    if (PHONE_LIST_LOADED) {
      this.preparePhoneListToDisplay();
    }
  }
  preparePhoneListToDisplay() {
    this.phoneListToDisplay = [];

    const phoneTypeDescriptionMap: { [key in PhoneTypeEnum]: string } = {
      [PhoneTypeEnum.RESIDENTIAL]: 'Residential',
      [PhoneTypeEnum.MOBILE]: 'Mobile',
      [PhoneTypeEnum.EMERGENCY]: 'Emergency'
    };

    Object.keys(phoneTypeDescriptionMap).map(Number).forEach((phoneType: number) => {
      const phoneFound = this.userPhoneList?.find((userPhone: IPhone) => userPhone.type === phoneType);

      this.phoneListToDisplay.push({
        type: phoneTypeDescriptionMap[phoneType as PhoneTypeEnum],
        number: phoneFound ? this.formatPhoneNumber(phoneFound) : '-',
      });
    });
  }
  formatPhoneNumber(phone: IPhone) {
    return `${phone.internationalCode} ${phone.areaCode} ${phone.number}`
  }
}

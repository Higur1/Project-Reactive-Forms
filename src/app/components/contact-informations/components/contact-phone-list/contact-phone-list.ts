import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PhoneList } from '../../../../types/phone-list';
import { PhoneTypeEnum } from '../../../../enums/phone-type.enum';
import { IPhone } from '../../../../interfaces/user/phone.interface';
import { IphoneToDisplay } from '../../../../interfaces/phone-to-display.interface';
import { phoneTypeDescriptionMap } from '../../../../utils/phone-type-description-map';

@Component({
  selector: 'app-contact-phone-list',
  standalone: false,
  templateUrl: './contact-phone-list.html',
  styleUrl: './contact-phone-list.scss',
})
export class ContactPhoneList implements OnChanges {
  phoneListToDisplay: IphoneToDisplay[] = [];
  @Input({ required: true }) userPhoneList: PhoneList | undefined = [];

  ngOnChanges(changes: SimpleChanges) {
    const PHONE_LIST_LOADED = Array.isArray(changes['userPhoneList'].currentValue);

    if (PHONE_LIST_LOADED) {
      this.preparePhoneListToDisplay();
    }
  }
  preparePhoneListToDisplay() {
    this.phoneListToDisplay = [];

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

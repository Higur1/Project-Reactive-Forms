import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PhoneList } from '../../../../types/phone-list';
import { IphoneToDisplay } from '../../../../interfaces/phone-to-display.interface';
import { preparePhoneList } from '../../../../utils/prepare-phone-list';

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
    const originalUserPhoneList = this.userPhoneList && this.userPhoneList.length > 0 ? this.userPhoneList : [];

    preparePhoneList(originalUserPhoneList, true, (phone) => {
      this.phoneListToDisplay.push(phone);
    });
  }
}

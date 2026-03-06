import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AddressList } from '../../../../types/address-list';
import { AddressTypeEnum } from '../../../../enums/address-type.enum';
import { prepareAddressList } from '../../../../utils/prepare-address-list';

export const addressTypeDescriptionMap: { [key in AddressTypeEnum]: string } = {
  [AddressTypeEnum.RESIDENTIAL]: 'Residential',
  [AddressTypeEnum.WORK]: 'Work',
  [AddressTypeEnum.ALTERNATIVE]: 'Alternative'
};

@Component({
  selector: 'app-address-group',
  standalone: false,
  templateUrl: './address-group.html',
  styleUrl: './address-group.scss',
})
export class AddressGroup implements OnChanges {

  addressListToDisplay: any[] = [];
  @Input({ required: true }) userAddressList: AddressList | undefined = [];

  ngOnChanges(changes: SimpleChanges): void {

    const ADDRESS_LIST_LOADED = Array.isArray(changes['userAddressList'].currentValue);

    if (ADDRESS_LIST_LOADED) {
      this.prepareAddressListToDisplay();
    }
  }

  prepareAddressListToDisplay() {
    this.addressListToDisplay = [];

    const originaluserAddressList = this.userAddressList && this.userAddressList.length > 0 ? this.userAddressList : [];

    prepareAddressList(originaluserAddressList, true, (address) => {
      this.addressListToDisplay.push(address);
    });
  }
}

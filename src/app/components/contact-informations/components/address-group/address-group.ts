import { Component, Input } from '@angular/core';
import { AddressList } from '../../../../types/address-list';

@Component({
  selector: 'app-address-group',
  standalone: false,
  templateUrl: './address-group.html',
  styleUrl: './address-group.scss',
})
export class AddressGroup {
  @Input({ required: true}) userAddressList: AddressList | undefined = [];
}

import { Component, Input } from '@angular/core';
import { required } from '@angular/forms/signals';
import { PhoneList } from '../../../../types/phone-list';

@Component({
  selector: 'app-contact-phone-list',
  standalone: false,
  templateUrl: './contact-phone-list.html',
  styleUrl: './contact-phone-list.scss',
})
export class ContactPhoneList {
  @Input({ required: true}) userPhoneList: PhoneList | undefined = [];
}

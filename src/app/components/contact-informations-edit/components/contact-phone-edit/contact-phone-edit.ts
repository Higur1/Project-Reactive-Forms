import { Component, Input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-phone-edit',
  standalone: false,
  templateUrl: './contact-phone-edit.html',
  styleUrl: './contact-phone-edit.scss',
})
export class ContactPhoneEdit {
  @Input({ required: true }) userForm!: FormGroup;

  get phoneList(): FormArray {
    return this.userForm.get('contactInformations.phoneList') as FormArray;
  }
}

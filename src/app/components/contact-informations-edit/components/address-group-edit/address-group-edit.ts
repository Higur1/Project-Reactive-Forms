import { Component, Input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address-group-edit',
  standalone: false,
  templateUrl: './address-group-edit.html',
  styleUrl: './address-group-edit.scss',
})
export class AddressGroupEdit {
  @Input({ required: true }) userForm!: FormGroup;

  get addressList(): FormArray {
    return this.userForm.get('contactInformations.addressList') as FormArray;
  }
}

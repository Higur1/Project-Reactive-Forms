import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-general-informations-edit',
  standalone: false,
  templateUrl: './general-informations-edit.html',
  styleUrl: './general-informations-edit.scss',
})
export class GeneralInformationsEdit {
  @Input({ required: true}) userForm!: FormGroup;

  get emailControl(): FormControl{
    return this.userForm.get('generalInformations.email') as FormControl;
  }
}

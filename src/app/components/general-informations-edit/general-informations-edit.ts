import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CountriesList } from '../../types/countries-list';

@Component({
  selector: 'app-general-informations-edit',
  standalone: false,
  templateUrl: './general-informations-edit.html',
  styleUrl: './general-informations-edit.scss',
})
export class GeneralInformationsEdit {
  @Input({ required: true }) userForm!: FormGroup;
  @Input({ required: true }) countriesList: CountriesList = [];

  get emailControl(): FormControl{
    return this.userForm.get('generalInformations.email') as FormControl;
  }
}

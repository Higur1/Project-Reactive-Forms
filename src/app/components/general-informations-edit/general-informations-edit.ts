import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CountriesList } from '../../types/countries-list';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-general-informations-edit',
  standalone: false,
  templateUrl: './general-informations-edit.html',
  styleUrl: './general-informations-edit.scss',
})
export class GeneralInformationsEdit implements OnInit, OnChanges {

  countriesListFilter: CountriesList = [];

  @Input({ required: true }) userForm!: FormGroup;
  @Input({ required: true }) countriesList: CountriesList = [];

  ngOnInit(): void {
    this.watchCountryFormChangesAndFilter();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.countriesListFilter = this.countriesList;
  }

  get emailControl(): FormControl {
    return this.userForm.get('generalInformations.email') as FormControl;
  }

  get countryControl(): FormControl {
    return this.userForm.get('generalInformations.country') as FormControl;
  }

  onCountrySelected($event: MatAutocompleteSelectedEvent) {
    
  }

  private watchCountryFormChangesAndFilter() {
    this.countryControl.valueChanges.subscribe(this.filterCountriesList.bind(this));

    /* this.countryControl.valueChanges.subscribe((value: string) => {
      this.filterCountriesList(value);
    }) */
  }

  private filterCountriesList(searchTerm: string) {
    this.countriesListFilter = this.countriesList.filter((country) => country.name.toLocaleLowerCase().includes(searchTerm.toLowerCase().trim()));
  }
}

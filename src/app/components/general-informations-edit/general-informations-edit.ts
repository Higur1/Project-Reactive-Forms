import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CountriesList } from '../../types/countries-list';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { StatesList } from '../../types/states-list';
import { maritalStatusArray } from '../../utils/marital-status-description-map';

@Component({
  selector: 'app-general-informations-edit',
  standalone: false,
  templateUrl: './general-informations-edit.html',
  styleUrl: './general-informations-edit.scss',
})
export class GeneralInformationsEdit implements OnInit, OnChanges {

  countriesListFiltered: CountriesList = [];
  statesListFiltered: StatesList = [];

  @Input({ required: true }) userForm!: FormGroup;
  @Input({ required: true }) countriesList: CountriesList = [];
  @Input({ required: true }) statesList: StatesList = [];

  @Output('onCountrySelected') onCountrySelectedEmitt = new EventEmitter<string>();

  ngOnInit(): void {
    this.watchCountryFormChangesAndFilter();
    this.watchStatesFormChangesAndFilter();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.countriesListFiltered = this.countriesList;
    this.statesListFiltered = this.statesList;
  }

  get emailControl(): FormControl {
    return this.userForm.get('generalInformations.email') as FormControl;
  }

  get countryControl(): FormControl {
    return this.userForm.get('generalInformations.country') as FormControl;
  }

  get statesControl(): FormControl {
    return this.userForm.get('generalInformations.state') as FormControl;
  }

  get maritalStatusArray() {
    return maritalStatusArray;
  }

  onCountrySelected(event: MatAutocompleteSelectedEvent) {
    this.onCountrySelectedEmitt.emit(event.option.value);
  }

  private watchCountryFormChangesAndFilter() {
    this.countryControl.valueChanges.subscribe(this.filterCountriesList.bind(this));

    /* this.countryControl.valueChanges.subscribe((value: string) => {
      this.filterCountriesList(value);
    }) */
  }

  private watchStatesFormChangesAndFilter() {
    this.statesControl.valueChanges.subscribe(this.filterStateList.bind(this));
  }

  private filterCountriesList(searchTerm: string) {
    this.countriesListFiltered = this.countriesList.filter((country) => country.name.toLocaleLowerCase().includes(searchTerm.toLowerCase().trim()));
  }

  private filterStateList(searchTerm: string) {
    this.statesListFiltered = this.statesList.filter((state) => state.name.toLocaleLowerCase().includes(searchTerm.toLowerCase().trim()));
  }
}

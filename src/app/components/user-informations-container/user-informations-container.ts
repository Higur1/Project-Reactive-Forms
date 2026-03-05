import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';
import { UserFormController } from './user-form-controller';
import { CountriesService } from '../../services/countries.service';
import { Observable, of } from 'rxjs';
import { CountriesList } from '../../types/countries-list';
import { StatesService } from '../../services/states.service';
import { StatesList } from '../../types/states-list';

@Component({
  selector: 'app-user-informations-container',
  standalone: false,
  templateUrl: './user-informations-container.html',
  styleUrl: './user-informations-container.scss',
})
export class UserInformationsContainer extends UserFormController implements OnInit, OnChanges {

  currentTabIndex: number = 0;
  countriesList$: Observable<CountriesList> = of([]);
  statesList$: Observable<StatesList> = of([]);

  private readonly _countriesService = inject(CountriesService);
  private readonly _statesService = inject(StatesService);

  @Input({ required: true }) userSelected: IUser = {} as IUser;
  @Input({ required: true }) isInEditMode: boolean = false;

  ngOnInit(): void {
    this.countriesList$ = this._countriesService.getCountries();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.currentTabIndex = 0;

    const HAS_USER_SELECTED = changes['userSelected'] && Object.keys(changes['userSelected'].currentValue).length > 0;

    if (HAS_USER_SELECTED) {
      this.fulFillUserForm(this.userSelected);

      this.statesList$ = this._statesService.getStates(this.userSelected.country);
    }
  }

  onCountrySelected(countryName: string) {
    this.statesList$ = this._statesService.getStates(countryName);
  }
}

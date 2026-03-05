import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';
import { UserFormController } from './user-form-controller';
import { CountriesService } from '../../services/countries.service';
import { Observable, take } from 'rxjs';
import { CountriesList } from '../../types/countries-list';

@Component({
  selector: 'app-user-informations-container',
  standalone: false,
  templateUrl: './user-informations-container.html',
  styleUrl: './user-informations-container.scss',
})
export class UserInformationsContainer extends UserFormController implements OnInit, OnChanges {
  
  currentTabIndex: number = 0;
  countriesList$!: Observable<CountriesList>;

  private readonly _countriesService = inject(CountriesService);

  @Input({ required: true }) userSelected: IUser = {} as IUser;
  @Input({ required: true }) isInEditMode: boolean = false;

  ngOnInit(): void {
    this.getCountriesList();
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.currentTabIndex = 0;

    const HAS_USER_SELECTED = changes['userSelected'] && Object.keys(changes['userSelected'].currentValue).length > 0;

    if (HAS_USER_SELECTED) {
      this.fulFillUserForm(this.userSelected);
    }
  }

  getCountriesList() {
    this.countriesList$ = this._countriesService.getCountries();
  }
}

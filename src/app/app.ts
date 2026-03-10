import { Component, OnInit } from '@angular/core';
import { CountriesService } from './services/countries.service';
import { StatesService } from './services/states.service';
import { CitiesService } from './services/cities.service';
import { UsersService } from './services/users.service';
import { UsersListResponse } from './types/users-list-response';
import { IUser } from './interfaces/user/user.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements OnInit {

  usersList$!: Observable<UsersListResponse>;
  usersList: UsersListResponse = [];

  userSelectedIndex: number | undefined;
  userSelected: IUser | undefined;

  isInEditMode: boolean = false;
  eneableSaveButton: boolean = false;

  constructor(
    private readonly _countriesService: CountriesService,
    private readonly _statesService: StatesService,
    private readonly _citiesService: CitiesService,
    private readonly _usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.usersList$ = this._usersService.getUsers();
  }

  onUserSelected(userIndex: number, usersList: UsersListResponse) {
    const userFound = usersList[userIndex];

    if (userFound) {
      this.userSelectedIndex = userIndex;
      this.userSelected = structuredClone(userFound);
    }
  }

  onCancelButton() {
    this.isInEditMode = false;
  }

  onEditButton() {
    this.isInEditMode = true;
  }

  onFormStatusChange(formStatus: boolean) {
    setTimeout(() => this.eneableSaveButton = formStatus, 0);
  }
}

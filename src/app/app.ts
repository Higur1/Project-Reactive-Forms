import { Component, OnInit, signal } from '@angular/core';
import { CountriesService } from './services/countries.service';
import { StatesService } from './services/states.service';
import { CitiesService } from './services/cities.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements OnInit {
  constructor(
    private readonly _countriesService: CountriesService,
    private readonly _statesService: StatesService,
    private readonly _citiesService: CitiesService,
    private readonly _usersService: UsersService

  ) { }
  protected readonly title = signal('projeto-reactive-forms');

  ngOnInit() {
    this._countriesService.getCountries().subscribe((countriesResponse: any) => {
      console.log('countriesResponse', countriesResponse);
    });

    this._statesService.getStates('Brazil').subscribe((statesResponse) => {
      console.log('statesResponse', statesResponse);
    });

    this._citiesService.getCities('Brazil', 'São Paulo').subscribe((citiesResponse) => {
      console.log('citiesResponse', citiesResponse);
    });

    this._usersService.getUsers().subscribe((usersResponse) => {
      console.log('usersReponse', usersResponse);
    });
  }
}

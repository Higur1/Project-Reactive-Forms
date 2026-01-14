import { Component, OnInit, signal } from '@angular/core';
import { CountriesService } from './services/countries.service';
import { StatesService } from './services/states.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements OnInit{
  constructor(
    private readonly _countriesService: CountriesService,
    private readonly _statesService: StatesService

  ){}
  protected readonly title = signal('projeto-reactive-forms');

  ngOnInit() {
    this._countriesService.getCountries().subscribe((countriesResponse: any) => {
      console.log(countriesResponse)
    });

    this._statesService.getStates('Brazil').subscribe((statesResponse) => {
        
    })
  }
}

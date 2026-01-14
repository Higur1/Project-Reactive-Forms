import { Component, OnInit, signal } from '@angular/core';
import { CountriesService } from './services/countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements OnInit{
  constructor(
    private readonly _countriesService: CountriesService
  ){}
  protected readonly title = signal('projeto-reactive-forms');

  ngOnInit() {
    this._countriesService.getCountries().subscribe((countriesResponse: any) => {
      console.log(countriesResponse)
    });
  }
}

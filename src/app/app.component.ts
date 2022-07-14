import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from '../app/models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService) {}

  city: string = 'Porto Alegre'
  weatherInfo?: WeatherData

  ngOnInit(): void {
    this.getWeatherinfo(this.city)
    this.city = ''
  }

  onSubmit() {
    this.getWeatherinfo(this.city)
    this.city = ''
  }

  private getWeatherinfo(city: string) {
    this.weatherService.getWeatherInfo(city).subscribe({
      next: (response) => {
        this.weatherInfo = response
      },
      error: (err) => {
        alert('Cidade nao encontrada, tente outra.')
      }
    });
  }
}

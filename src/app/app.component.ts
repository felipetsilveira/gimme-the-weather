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

  weatherInfo?: WeatherData

  ngOnInit(): void {
    this.weatherService.getWeatherInfo('Wellington').subscribe({
      next: (response) => {
        this.weatherInfo = response
      }
    });
  }
}

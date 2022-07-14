import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherInfo(city: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.getWeatherBaseUrl, {
      headers: new HttpHeaders()
        .set(
          environment.xRapidAPIHostHeaderName,
          environment.xRapidAPIHostHeaderValue
        )
        .set(
          environment.XRapidAPIKeyHeaderName,
          environment.XRapidAPIKeyHeaderValue
        ),
        params: new HttpParams().set('q', city).set('units', 'metric').set('mode', 'json')
    });
  }
}

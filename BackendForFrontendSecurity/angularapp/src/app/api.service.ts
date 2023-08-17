import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { WeatherForecast } from './weather-forecast-container/weather-forecast-container.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);

  getWeatherForecast() {
    return this.http.get<WeatherForecast[]>('/weatherforecast');
  }
}

import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-weather-forecast-container',
  templateUrl: './weather-forecast-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherForecastContainerComponent {
  private service = inject(ApiService);
  readonly forecasts$ = this.service.getWeatherForecast();
}

export interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
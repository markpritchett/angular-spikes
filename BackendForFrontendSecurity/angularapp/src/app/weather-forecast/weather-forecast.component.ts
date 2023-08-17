import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { WeatherForecast } from '../weather-forecast-container/weather-forecast-container.component';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherForecastComponent {
  @Input({ required: true }) forecasts: WeatherForecast[] = [];
}

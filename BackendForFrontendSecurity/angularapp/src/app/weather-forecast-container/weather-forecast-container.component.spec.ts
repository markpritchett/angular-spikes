import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForecastContainerComponent } from './weather-forecast-container.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('WeatherForecastContainerComponent', () => {
  let component: WeatherForecastContainerComponent;
  let fixture: ComponentFixture<WeatherForecastContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [WeatherForecastContainerComponent],
    });
    fixture = TestBed.createComponent(WeatherForecastContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

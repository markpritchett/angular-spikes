import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { LoginDetailsComponent } from './auth/login-details/login-details.component';
import { AuthWrapperComponent } from './auth/auth-wrapper/auth-wrapper.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { WeatherForecastContainerComponent } from './weather-forecast-container/weather-forecast-container.component';

function initializeApp(auth: AuthService) {
  return () => auth.getUser();
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginDetailsComponent,
    AuthWrapperComponent,
    WeatherForecastComponent,
    WeatherForecastContainerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AuthService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

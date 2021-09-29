import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Weather } from './weather';
import { WeatherInfo } from './components/weatherinfo';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  private _defaultZip: string = '66441';
  @Input()
  locationZip: string | undefined;
  currWeather!: Weather;
  weatherInfo!: WeatherInfo;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this._initDefaults();
  }

  private _initDefaults(): void {
    if (!this.currWeather) {
      this.weatherService
        .getWeatherByZip(this.locationZip || this._defaultZip)
        .subscribe(
          (res) => {
            this.currWeather = res;
            this.currWeather.weather = res.weather.map((wi) =>
              Object.assign(new WeatherInfo(),
                // new WeatherInfo(wi.id, wi.main, wi.description, wi.icon),
                wi
              )
            );
            this.weatherInfo = this.currWeather.weather[0];
          },
          (err) => console.error(err)
        );
    }
  }
}

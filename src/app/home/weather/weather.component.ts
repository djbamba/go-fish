import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Weather } from './weather';
import { WeatherInfo } from './components/weatherinfo';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  @Input()
  locationZip: string;
  currWeather!: Weather;
  weatherInfo!: WeatherInfo;
  unit = 'F';

  constructor(
    private weatherService: WeatherService,
    private spinnerService: NgxSpinnerService
  ) {
    this.unit = 'F';
    this.locationZip = '66441';
  }

  ngOnInit(): void {
    this._initDefaults();
    this.spinnerService.show();
  }

  public toggleUnit(): void {
    this.unit === 'C' ? (this.unit = 'F') : (this.unit = 'C');
  }

  private _initDefaults(): void {
    if (!this.currWeather) {
      this.weatherService.getWeatherByZip(this.locationZip).subscribe(
        (res) => {
          console.debug(res);
          this.currWeather = res;
          this.currWeather.weather = res.weather.map((wi) =>
            Object.assign(new WeatherInfo(), wi)
          );
          this.weatherInfo = this.currWeather.weather[0];
          this.spinnerService.hide();
        },
        (err) => console.error(err)
      );
    }
  }
}

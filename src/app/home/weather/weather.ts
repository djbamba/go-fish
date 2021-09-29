import { WeatherInfo } from './components/weatherinfo';

export interface Weather {
  cityName: string;
  coord: {
    longitude: number;
    latitdue: number;
  };
  weather: WeatherInfo[];
  main: {
    temp: number;
    feelsLike: number;
    tempMin: number;
    tempMax: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    degrees: number;
    gust: number;
  };
  clouds: {
    cloudiness: number;
  };
}

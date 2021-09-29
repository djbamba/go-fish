export class WeatherInfo {
  id!: number;
  main!: string;
  description!: string;
  icon!: string;
  public iconRef(): string {
    return `http://openweathermap.org/img/wn/${this.icon}@2x.png`;
  }
}

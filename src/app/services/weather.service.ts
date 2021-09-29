import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '../home/weather/weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private _baseUrl = '/server/api/gofish/v1/weather';
  constructor(private http: HttpClient) {}

  public getAll(): Observable<Weather[]> {
    return this.http.get<Weather[]>(this._baseUrl);
  }

  public getWeatherByZip(zip: string): Observable<Weather> {
    return this.http.get<Weather>(`${this._baseUrl}`, {
      params: {
        zip: zip,
      },
    });
  }
}

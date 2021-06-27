import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lure } from '../lures/lure';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class LureService {
  private baseUrl = '/server/api/gofish/v1/lures';
  constructor(private http: HttpClient) {}

  public getAll(): Observable<Lure[]> {
    return this.http.get<Lure[]>(`${this.baseUrl}/all`, httpOptions);
  }

  public addLure(lure: Lure): Observable<Lure> {
    return this.http.post<Lure>(`${this.baseUrl}/add`, lure);
  }

  public updateLure(lure: Lure): Observable<Lure> {
    return this.http.put<Lure>(`${this.baseUrl}/update`, lure);
  }

  public deleteLure(lureID: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${lureID}`);
  }
}

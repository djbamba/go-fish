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

  constructor(private http: HttpClient) {}
 
 public getAll(): Observable<Lure[]> {
    return this.http.get<Lure[]>('/server/api/gofish/v1/lures/all', httpOptions);
  }
}

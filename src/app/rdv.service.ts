
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from './reservation';

@Injectable({
  providedIn: 'root'
})
export class RdvService {
  private baseUrll = 'http://localhost:8080/api/v1/reservation';
  constructor(private httpClient: HttpClient) { }

  getAllReservations (): Observable<any>{
    return this.httpClient.get(`${this.baseUrll}`);
  }

  saveReservation (reservation :Reservation) : Observable<Object>{
    return this.httpClient.post(`${this.baseUrll}`,reservation);
}
}
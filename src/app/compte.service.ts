import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private httpClient :HttpClient) { }
  private baseUrl = 'http://localhost:8080/api/v1/compte';

  getComptesList(): Observable<any>{
    return this.httpClient.get(`${this.baseUrl}`);

  }
}

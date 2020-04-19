import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  private baseUrl = 'http://localhost:8080/api/v1/personne';
  constructor(private httpClient: HttpClient) { }

  getPersonList(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}`);
  }
}

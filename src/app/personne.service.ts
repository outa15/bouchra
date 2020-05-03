import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  private baseUrl = 'http://localhost:8080/api/v1/personne';
  constructor(private httpClient: HttpClient) { }

  getPersonnesList(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}`);
  }

  deletePersonne(id: number): Observable<any> {
    return this.httpClient.delete( `${this.baseUrl}/${id}`,{ responseType: 'text'});
  }

  getPersonneById (id : number ) : Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  savePersonne ( personne : Object) : Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, personne);
  }
  

}

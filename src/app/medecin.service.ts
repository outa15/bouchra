import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {

  constructor(private httpClient :HttpClient) { }
  private baseUrl = 'http://localhost:8080/api/v1/medecin';

  getMedecinById(id_medecin :String):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/${id_medecin}`);
  }
  findMedecinList():Observable<any> {
      return this.httpClient.get(`${this.baseUrl}`);
  }
  
   }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DossierMedicalService {

  private baseUrl = 'http://localhost:8080/api/v1/consultations';
  constructor(private httpClient: HttpClient) { }


  getConsultationsList ():Observable<any>{
    return this.httpClient.get(`${this.baseUrl}`);
  }

  getConsultationsListById(id_consultation :String):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/${id_consultation}`);
  }

  
  deleteConsultation (id :any): Observable <any>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }


  
}

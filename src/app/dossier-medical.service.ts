import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Consultation } from './consultation';

@Injectable({
  providedIn: 'root'
})
export class DossierMedicalService {


  constructor(private httpClient: HttpClient) { }

private baseUrl = 'http://localhost:8080/api/v1/consultations';
  getConsultationsList(): Observable<any>{
    return this.httpClient.get(`${this.baseUrl}`);

  }

  getConsultationsListById(id_consultation: String): Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/${id_consultation}`);
  }


  deleteConsultation(id: any): Observable <any>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  saveConsultation( consultation: Consultation): Observable <any>{
    return  this.httpClient.post(`${this.baseUrl}`, consultation);
  }



  UpdateConsultation(consultation: Consultation): Observable <any>{
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json'
    //   })
    // };

    return  this.httpClient.put(this.baseUrl , consultation);
  }
}

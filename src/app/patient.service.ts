import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private baseUrll = 'http://localhost:8080/api/v1/patient';
  constructor( private httpClient: HttpClient ) { }

  savePatient (patient:Patient) : Observable<Object>{
      return this.httpClient.post(`${this.baseUrll}`,patient);
  }

  getPatientById(id_patient:any) :Observable<any>{
    return this.httpClient.get(`${this.baseUrll}/${id_patient}`);
  }
  DeletePatient (id_patient) :Observable<any>{
    return this.httpClient.delete (`${this.baseUrll}/${id_patient}`);
  }
  getAllPatients (): Observable<any>{
    return this.httpClient.get(`${this.baseUrll}`);
  }
 
 
}

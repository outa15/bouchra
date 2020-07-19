import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  model: any = {};
  role : any;
  email_session : any ;
  nom_session : any ;
  id_personne: any;
  private loggedIn = new BehaviorSubject<boolean>(false); // {1}
  ///a tester 
  private patientLoggedIn = new BehaviorSubject<boolean>(false); 


  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }
  // a tester
  get isPatientLoggedIn(){
    return this.patientLoggedIn.asObservable();
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
    
  ) {}

  login(loginForm: FormGroup) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    const result = this.http.post<Observable<boolean>>('http://localhost:8080/login', loginForm.value, httpOptions)
      .subscribe(compte => {
        if (compte) {
          
          sessionStorage.setItem(
            'token',
            btoa(this.model.username + ':' + this.model.password)
          );
          // sessionStorage.setItem(
          //   'compte_id',
          //   compte.id
          //   );
         
          this.role  =compte['role'];
          this.email_session= compte['email']; 
          this.nom_session= compte['personne']['nom']; 
          this.id_personne=compte['personne']['id']; 
          console.log(this.role);
          console.log(this.email_session);
          console.log(this.nom_session);
          if( this.role==="MEDECIN"){
            this.loggedIn.next(true);
          this.router.navigate(['/personne']);
        }
          
         else if (this.role==="PATIENT") {
          //this.router.navigate(['/personne']);
          
          this.patientLoggedIn.next(true); 
          this.router.navigate(['dossierMedical', this.id_personne]);
          
        }
          else {
            alert('Authentication failed.');
          }
        }
        
       } ); 
      }

  logout() {                            // {4}
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}


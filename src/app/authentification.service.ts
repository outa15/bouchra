import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  
  private baseUrl = 'http://localhost:8080/api/v1/comptes';
  constructor(private httpClient: HttpClient) { }

  getComptesList(): Observable <any> {
    return this.httpClient.get(`${this.baseUrl}`);
  }

  authentificate (username,password){
    if( username==="xoxo" && password==="yoyo"){
      sessionStorage.setItem('username',username)
      return true;
    }else {return false;}

  }

  isUserLogedIn(){
    let user=  sessionStorage.getItem('username');
    if (user !=null){ return true }
     return false 
   /* console.log(!(user===null))
    return !(user===null); */
  }

 logOut(){
   sessionStorage.removeItem('username');
 }
  
}

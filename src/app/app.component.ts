//import { Component } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { TooltipConfig } from 'ngx-bootstrap/tooltip';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{ provide: TooltipConfig, useFactory: getAlertConfig }]
})

export class AppComponent implements OnInit{
  title = 'ProjAng-front';
  public collapsed = false;
  
  loggedIn : Observable<boolean>;
  nom :any;
  patientLoggedIn:Observable<boolean>;

  constructor( private authServiceService :AuthServiceService){
    
  }
  ngOnInit(){
  this.loggedIn=this.authServiceService.isLoggedIn; 
  this.patientLoggedIn=this.authServiceService.isPatientLoggedIn;
  this.nom = this.authServiceService.nom_session;

}
onLogout(){
  this.authServiceService.logout();
}

} 
//ljadid


export function getAlertConfig(): TooltipConfig {
  return Object.assign(new TooltipConfig(), {
    placement: 'right',
    container: 'body'
  });
}


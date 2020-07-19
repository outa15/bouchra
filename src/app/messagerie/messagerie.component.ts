import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { CompteService } from '../compte.service';
import { Compte } from '../compte';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.css']
})
export class MessagerieComponent implements OnInit {

  constructor( private authServiceService :AuthServiceService ,private compteService: CompteService ) { }
  nom : any; 
   
   comptes :Observable<Compte []>
  ngOnInit(): void {
    this.nom= this.authServiceService.nom_session;
    this.comptes= this.compteService.getComptesList(); 
       
   
 
  }
  
    



}

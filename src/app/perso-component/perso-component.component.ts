import { Component, OnInit } from '@angular/core';
import { PersonneService } from "../personne.service";
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { Personne } from "../personne";


@Component({
  selector: 'app-perso-component',
  templateUrl: './perso-component.component.html',
  styleUrls: ['./perso-component.component.css']
})
export class PersoComponentComponent implements OnInit {


  personnes : Observable<Personne []>
  constructor(private personneService: PersonneService,
    private router: Router) { }

  
  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.personnes = this.personneService.getPersonList();
  }

}

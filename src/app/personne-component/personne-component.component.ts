import { Component, OnInit } from '@angular/core';
import { PersonneService } from "../personne.service";
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { Personne } from "../personne";


@Component({
  selector: 'app-personne-component',
  templateUrl: './personne-component.component.html',
  styleUrls: ['./personne-component.component.css']
})
export class PersonneComponentComponent implements OnInit {



  personnes : Observable<Personne []>
  constructor(private personneService: PersonneService,
    private router: Router) { }


  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.personnes = this.personneService.getPersonnesList();
  }
  deletePerso(id: number) {
    this.personneService.deletePersonne(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();

        },
        error => console.log(error));
  }

  afficherPersonneDetails(id: number) {
    this.router.navigate(['details', id]);
  }
  consulterDossierMedical (idPatient :String){

    this.router.navigate(['dossierMedical', idPatient]);
  }
  ajouterConsultation (id :String){

    this.router.navigate(['AjouterCons', id]);
  }

}

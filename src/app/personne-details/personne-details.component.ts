import { Component, OnInit } from '@angular/core';
import { PersonneService } from "../personne.service";
import { PatientService } from "../patient.service";
import { Observable } from "rxjs";
import { Personne } from "../personne";
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-personne-details',
  templateUrl: './personne-details.component.html',
  styleUrls: ['./personne-details.component.css']
})
export class PersonneDetailsComponent implements OnInit {
  personne : Personne
  id :number
  constructor(private route: ActivatedRoute,private personneService: PersonneService,

     private router: Router) { }

    ngOnInit() {
      this.personne = new Personne();
  
      this.id = this.route.snapshot.params['id'];
  
      this.personneService.getPersonneById(this.id)
        .subscribe(data => {
          console.log(data)
          this.personne = data;
        }, error => console.log(error));
    }
  

}

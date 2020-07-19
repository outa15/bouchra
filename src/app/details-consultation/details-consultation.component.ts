import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { Consultation } from '../consultation';
import { DossierMedicalService } from '../dossier-medical.service';

@Component({
  selector: 'app-details-consultation',
  templateUrl: './details-consultation.component.html',
  styleUrls: ['./details-consultation.component.css']
})
export class DetailsConsultationComponent implements OnInit {

  constructor( private route :ActivatedRoute , private ConsultationService : DossierMedicalService) { }
  id : any
  consultation :Consultation
  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    this.ConsultationService.getConsultationsListById(this.id).subscribe(
      data => this.consultation=data,
      error =>console.log(error)
    )

  }

}

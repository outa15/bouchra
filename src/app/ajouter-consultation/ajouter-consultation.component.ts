import { Component, OnInit } from '@angular/core';
import { Consultation } from '../consultation';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DossierMedicalComponent } from '../dossier-medical/dossier-medical.component';
import { DossierMedicalService } from '../dossier-medical.service';
import { Patient } from '../patient';
import { MedecinService } from '../medecin.service';
import { Medecin } from '../medecin';
@Component({
  selector: 'app-ajouter-consultation',
  templateUrl: './ajouter-consultation.component.html',
  styleUrls: ['./ajouter-consultation.component.css']
})
export class AjouterConsultationComponent implements OnInit {
  
  consultation : Consultation = new Consultation ();
  patient : Patient = new Patient ();
  medecin :Medecin = new Medecin ();
  formGroup: FormGroup;
  id : any
  medecins : Array<Medecin>

  constructor( private route :ActivatedRoute,private dossierMedicalService :DossierMedicalService,private router : Router,private medecinService :MedecinService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log("l'id est :"+this.id);
   // this.consultation.patient.id=this.id;
    this.dossierMedicalService.getConsultationsListById(this.id).subscribe(
      data=> {this.consultation.patient=data, console.log("xxxx:"+data)},
      error=> console.log(error)
    );
    console.log("patient enregistré"+this.consultation.patient.id)
    //liste des medecins 
    this.medecinService.findMedecinList().subscribe(
      data=>{ this.medecins=data, console.log("xxxx:"+data)},error=> console.log(error)
    );
    
  
  }
  /*
  findMedecinById(id_medecin :any):Medecin{
    this.medecinService.getMedecinById(id_medecin).subscribe(
      data =>console.log(data),
      error=>console.log(error)
    );
  } */
 
  onSubmit(){
    
    this.consultation.medecin= this.medecin;

    this.save();
  }

  save() {
    //this.consultation.medecin = this.medecinService.getMedecinById(this.consultation.medecin.id);
    console.log("la date de debut est :"+this.consultation.dateDebut);
    this.dossierMedicalService.saveConsultation(this.consultation)
      .subscribe(data => console.log("data:"+data), error => console.log(error));
  
    this.gotoList();
  

  }



  gotoList() {
    this.router.navigate(['/personne']);
  } 
  
}

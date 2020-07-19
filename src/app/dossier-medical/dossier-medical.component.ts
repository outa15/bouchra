import { Component, OnInit } from '@angular/core';
import { DossierMedicalService } from '../dossier-medical.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Consultation } from '../consultation';
import { Personne } from '../personne';
import { PersonneService } from '../personne.service';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-dossier-medical',
  templateUrl: './dossier-medical.component.html',
  styleUrls: ['./dossier-medical.component.css']
})
export class DossierMedicalComponent implements OnInit {
  
  
  consultations : Array<any>
  id :any
  patient :Patient
 

  constructor(private  route :ActivatedRoute,private patientService :PatientService,private dossierMedicalService :DossierMedicalService,
    private router: Router)
     { }
  
  
  ngOnInit(): void {
   
   //pr recuperer l'id envoyé par la methode consulterDossierMedical
   let id = this.route.snapshot.paramMap.get('id');
   console.log(id);
   /*const idd = {name: parseInt(id)};
   console.log("l'id est :"+id); */
        this.patientService.getPatientById(id)
        .subscribe(data => {
          console.log(data)
          this.patient=  data;
          let consTmp : Array<any> = [];
          for(let c of this.patient.consultations){
            
            if(c.id === undefined ){
              this.dossierMedicalService.getConsultationsListById(c+"").subscribe(data  => {
                
                data && consTmp.push(data);
              });
            }
               c.id && this.dossierMedicalService.getConsultationsListById(c.id+"").subscribe(data  => {
                 data && consTmp.push(data);
               });
          }
          this.consultations = consTmp;
        }, error => console.log(error));
   
  }


  /*
  getConsultationById(consultationId :any):Observable<any>{
    return this.dossierMedicalService.getConsultationsListById(consultationId);
  } */


    deleteConsultation (id_consultation :any)  {
      this.dossierMedicalService.deleteConsultation(id_consultation).subscribe(
        data => {
          console.log(data);
          this.consultations=this.patient.consultations;
        },
        error => console.log(error));;
          this.patientService.getPatientById(this.id);
        this.router.navigate(['dossierMedical', this.id]);
    }
    


      
    

  
  }
 





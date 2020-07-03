import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { DossierMedicalService } from '../dossier-medical.service';
import { Consultation } from '../consultation';
import { FormGroup, PatternValidator } from '@angular/forms';
import { Patient } from '../patient';
@Component({
  selector: 'app-consultations',
  templateUrl: './consultations.component.html',
  styleUrls: ['./consultations.component.css']
})
export class ConsultationsComponent implements OnInit {
 
// consultations : Observable<Consultation []>
 consultations : Array<Consultation>
 nomPatient:string 
 consultationss : Array<Consultation>
 formGroup: FormGroup
 DisplayName: boolean =false
 elseBlock : boolean=false
  constructor(private router: Router ,private dossierMedicalService:DossierMedicalService) { }

  ngOnInit() {
    this.reloadData();
  }
  consultation: Consultation
 
  reloadData() {
    //this.consultations= this.dossierMedicalService.getConsultationsList()
    this.dossierMedicalService.getConsultationsList().subscribe( data=>{
      console.log("data"+data)
      this.consultations=data
      let consTmp : Array<any> = [];
       for (let c of this.consultations){
         console.log(c.id)
        if(c.id === undefined ){
        this.dossierMedicalService.getConsultationsListById(c+"").subscribe(data=>{
          consTmp.push(data)    
        console.log("methode1")   }); 
          
        }

       this.dossierMedicalService.getConsultationsListById(c.id+"").subscribe(data=>{
           consTmp.push(data) 
           console.log("methode2") } ); 
          


      
       }
       this.consultations=consTmp;
       

      } );
    }

    onSubmit(){
   
      this.dossierMedicalService.getConsultationsList().subscribe( data=>{
        console.log("data"+data)
        //this.consultationss=data
        let consTmpp : Array<any> = [];
         for (let c of data){
           
          if(c.id === undefined ){
            this.dossierMedicalService.getConsultationsListById(c+"").subscribe(data=>{
              if(data.patient.nom=== this.nomPatient){
              consTmpp.push(data)  
            this.DisplayName=true 
            }   
             }); 
            
            }
            
           this.dossierMedicalService.getConsultationsListById(c.id+"").subscribe(data=>{
            if(c.patient.nom=== this.nomPatient){
               consTmpp.push(data)
              this.DisplayName=true }
              } ); 
         this.consultationss=consTmpp;
        
         }  
        
        } );
       
        this.DisplayName=false  
      
 }
     
  deleteConsultaation(idConsultation :any) {
    this.dossierMedicalService.deleteConsultation(idConsultation).subscribe (
      data=> console.log(data), 
      error=>console.log(error) );
  
     // this.reloadData()
     this.elseBlock=true
  
  
}

    updateConsultation(idConsultation :any) {
      this.router.navigate(['Update', idConsultation]);
    }

    }   
    
  
     

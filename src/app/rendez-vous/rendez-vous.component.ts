
import { Component, OnInit } from '@angular/core';
import { RdvService } from '../rdv.service';
import { ActivatedRoute } from '@angular/router';
import { Reservation } from '../reservation';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MedecinService } from '../medecin.service';
import { Medecin } from '../medecin';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css']
})
export class RendezVousComponent implements OnInit {
  
Reservations : Array<Reservation> 
estDispo :boolean;
formGroup: FormGroup;
response :Date;
medecins :Array <Medecin>
id_medecin :any
id_patient :any
medecin :Medecin
reservationNew =new Reservation ()
patient :Patient


 constructor(private rdvService :RdvService,private  route :ActivatedRoute,private formBuilder :FormBuilder, private medecinService : MedecinService ,private patientService : PatientService) { }

  ngOnInit(): void {
   
  this.rdvService.getAllReservations().subscribe(
    data=>{this.Reservations=data,
      console.log("entré")
      console.log("data :"+data)}
  );
  
     
    this.medecinService.findMedecinList().subscribe(
      data=> this.medecins=data,
      error=> console.log(error)
    ); 
  }
  verifierDispo ( date:Date) { 
    for (let c of this.Reservations){
      if((c.date===this.reservationNew.date)&&(c.medecinn.id==this.id_medecin)){
        this.estDispo=false
          console.log("pas dispo");
      }
    else {  this.estDispo=true
      console.log(" dispo"); }
    }
  }

  onSubmit(){
    
    this.response=this.reservationNew.date;
    console.log (this.response)
    console.log(this.id_medecin)
    this.verifierDispo(this.response);

    this.medecinService.getMedecinById(this.id_medecin).subscribe(
      data=>{ this.medecin=data,this.reservationNew.medecinn=data },error=>console.log(error)
    );
   
    
   
  }
  /*
  saveReservation(reservation :Reservation){
      this.rdvService.saveReservation(reservation).subscribe(
        data=> console.log(data),error=>console.log(error)
      )
  } */
  

  
}

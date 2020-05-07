import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';


@Component({
  selector: 'app-ajouter-pers',
  templateUrl: './ajouter-personne.component.html',
  styleUrls: ['./ajouter-personne.component.css']
})
export class AjouterPersonneComponent implements OnInit {
  patient : Patient = new Patient ();
  submitted =false;
  formGroup: FormGroup;
  

  
    

constructor(private patientService :PatientService,
private router: Router,private formBuilder: FormBuilder) {} 
ngOnInit(): void {}
  
  onSubmit() {
      this.submitted = true;
    // this.patient = new Patient();
      this.save();
    }
 /* ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      'email' : new FormControl(''),
      'nom' : new FormControl(''),
      'role' : new FormControl(''),
      'civilite' : new FormControl('')
        });
  } */

  save (){
    
    //add patient
    this.patientService.savePatient(this.patient).subscribe(
      data => console.log(data),
      error => console.log(error))
      this. gotoList(); 
    }
   
  
  /*
  newPatient(): void {
    this.submitted = false;
    this.patient = new Patient();
  }
 */
  gotoList() {
    this.router.navigate(['/personne']);
  }
  

}

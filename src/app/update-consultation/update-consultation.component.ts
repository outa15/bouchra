import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DossierMedicalService } from '../dossier-medical.service';
import { Route } from '@angular/compiler/src/core';
import { Consultation } from '../consultation';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-update-consultation',
  templateUrl: './update-consultation.component.html',
  styleUrls: ['./update-consultation.component.css']
})
export class UpdateConsultationComponent implements OnInit {



  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private dossierMedicalService: DossierMedicalService , private  route: ActivatedRoute, private formBuilder: FormBuilder) { }
 // pour formulaire
  consult: Consultation = new Consultation ();
  submitted = false;
  formGroup: FormGroup;
  //////////

 consultation: Consultation = new Consultation();
 nbr: any;
  ngOnInit(): void {
   // let id = this.route.snapshot.paramMap.get('idConsultation');
    this.nbr = this.route.snapshot.params.id;
    console.log('my id is :' + this.nbr);

    this.dossierMedicalService.getConsultationsListById(this.nbr).subscribe(
      data => {
        this.consultation = data;
        console.log(data);
        },
      error => console.log(error)
    );
  }
  // pour formulaire

  onSubmit() {
    this.submitted = true;
    console.log('consult' + this.consult);
    this.Update();
  }

  Update() {
      this.dossierMedicalService.UpdateConsultation(this.consultation).subscribe(
        data => console.log('my data:' + data),
        error => console.log(error)
      );
      console.log('Entréeeeee');

  }

  //////////


}

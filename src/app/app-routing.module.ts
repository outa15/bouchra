import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonneComponentComponent } from './personne-component/personne-component.component';
import { PersonneDetailsComponent } from './personne-details/personne-details.component';
import { AjouterPersonneComponent } from './ajouter-personne/ajouter-personne.component';
import { DossierMedicalComponent } from './dossier-medical/dossier-medical.component';
import { ConsultationsComponent } from './consultations/consultations.component';
import { UpdateConsultationComponent } from './update-consultation/update-consultation.component';
import { LoginComponent } from './login/login.component';
import { DetailsConsultationComponent } from './details-consultation/details-consultation.component';
import { AjouterConsultationComponent } from './ajouter-consultation/ajouter-consultation.component';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';

const routes: Routes = [

  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: 'personne', component: PersonneComponentComponent },
  { path: 'details/:id', component: PersonneDetailsComponent },
  { path: 'Ajouter', component: AjouterPersonneComponent },
  { path: 'dossierMedical/:id', component:DossierMedicalComponent },
  {path: 'dossierMedical', component:DossierMedicalComponent },
  {path: 'consultations', component:ConsultationsComponent },
  {path: 'Update/:id', component:UpdateConsultationComponent },
  {path: 'Login', component:LoginComponent },
  // {path: '', component:LoginComponent },

  {path: 'detailCons/:id', component:DetailsConsultationComponent },
  {path: 'AjouterCons/:id', component:AjouterConsultationComponent },
  {path: 'messagerie', component:MessagerieComponent },
  {path: 'rdv', component:RendezVousComponent }
  
  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

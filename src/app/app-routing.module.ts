import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonneComponentComponent } from './personne-component/personne-component.component';
import { PersonneDetailsComponent } from './personne-details/personne-details.component';
import { AjouterPersonneComponent } from './ajouter-personne/ajouter-personne.component';
import { DossierMedicalComponent } from './dossier-medical/dossier-medical.component';

const routes: Routes = [
 
 //{ path: '', redirectTo: 'personne', pathMatch: 'full' },
  { path: 'personne', component: PersonneComponentComponent },
  { path: 'details/:id', component: PersonneDetailsComponent },
  { path: 'Ajouter', component: AjouterPersonneComponent },
  { path: 'dossierMedical/:id', component:DossierMedicalComponent },
  {path: 'dossierMedical', component:DossierMedicalComponent }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

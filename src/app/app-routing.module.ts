import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersoComponentComponent } from './perso-component/perso-component.component';


const routes: Routes = [
 
 { path: '', redirectTo: 'personne', pathMatch: 'full' },
  { path: 'personne', component: PersoComponentComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

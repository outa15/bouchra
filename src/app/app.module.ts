import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonneComponentComponent } from './personne-component/personne-component.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonneDetailsComponent } from './personne-details/personne-details.component';
import { AjouterPersonneComponent } from './ajouter-personne/ajouter-personne.component';
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    PersonneComponentComponent,
    PersonneDetailsComponent,
    AjouterPersonneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

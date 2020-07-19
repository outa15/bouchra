import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormBuilder, FormControl} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthentificationService } from '../authentification.service';
import { Compte } from '../compte';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  // ajouté
  // loading=true;
  //
    constructor(
       
        private authServiceService : AuthServiceService
    ) { }

    ngOnInit() {
        sessionStorage.setItem('token', '');
        
    }

    onLogin() {
      this.authServiceService.login(this.loginForm);
    }

}





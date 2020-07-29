import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  
  SERVER_URL = 'http://controller-micro-icos-application.openshift-43-ea9753cca330b7f05a99ad5b2c8b5da1-0000.us-east.containers.appdomain.cloud/createuser';

  public form = {
    username: null,
    firstname: null,
    surname: null,
    mail: null,
    password: null
  }


  constructor(private router: Router, private formBuilder: FormBuilder, private httpClient: HttpClient,
              public authService: AuthService) { }

  ngOnInit() {

  }

  public onSubmit() {
    
    this.authService.createUser(this.form.username, this.form.firstname, this.form.surname, this.form.password, this.form.mail);
    this.router.navigate(['/login']);
  }

}

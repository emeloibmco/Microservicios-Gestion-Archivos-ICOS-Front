import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginService} from '../../../services/login.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  SERVER_URL = 'http://controller-micro-icos-application.openshift-43-ea9753cca330b7f05a99ad5b2c8b5da1-0000.us-east.containers.appdomain.cloud/createuser';

  public form = {
    mail: null,
    password: null
  }

  constructor(private router: Router, private formBuilder: FormBuilder, 
               private httpClient: HttpClient, private authService: AuthService) { }

  ngOnInit() {
  }

  public onSubmit(event: Event) {

    this.authService.login(this.form.mail, this.form.password);
    this.router.navigate(['/projects']);
  }
}

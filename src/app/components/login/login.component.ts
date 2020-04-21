import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  SERVER_URL = 'http://localhost:3000/createuser';

  public form = {
    mail: null
  }

  constructor(private router: Router, private formBuilder: FormBuilder, private httpClient: HttpClient, private loginService: LoginService) { }

  ngOnInit() {
  }

  public onSubmit(event: Event) {

    this.loginService.login(this.form.mail).subscribe(
      res => {
        console.log(res);
       },
       error => {
         console.error(error);
       });
    /*this.httpClient.post<any>(this.SERVER_URL, this.form).subscribe(
      (res) => console.log(res),
      (err) => console.log(err),
    );
    console.log(this.form);*/

    this.router.navigate(['/projects']);
  }

}

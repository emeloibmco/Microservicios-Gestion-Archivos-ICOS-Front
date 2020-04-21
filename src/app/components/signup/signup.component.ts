import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  SERVER_URL = 'http://localhost:3000/createuser';

  public form = {
    name: null,
    email: null,
    password: null
  }


  constructor(private router: Router, private formBuilder: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit() {

  }

  public onSubmit() {
    this.httpClient.post<any>(this.SERVER_URL, this.form).subscribe(
      (res) => console.log(res),
      (err) => console.log(err),
    );
    this.router.navigate(['/login']);
  }

  


}
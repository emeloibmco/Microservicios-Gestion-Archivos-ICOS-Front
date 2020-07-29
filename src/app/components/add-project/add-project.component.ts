import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  uploadForm: FormGroup;
  SERVER_URL = 'http://controller-micro-icos-application.openshift-43-ea9753cca330b7f05a99ad5b2c8b5da1-0000.us-east.containers.appdomain.cloud/project';

  public form = {
    name_project: null,
    description: null
  }

  public tipoUsuarios=null;

  public response = [];

  public error = [];

  constructor(private router: Router, private formBuilder: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit() {

  }

  public onSubmit() {
    this.httpClient.post<any>(this.SERVER_URL, this.form).subscribe(
      (res) => console.log(res),
      (err) => console.log(err),
    );
    this.router.navigate(['/projects']);
  }

  public handleError(error){
    this.error = error;
    if (error.success){
      this.router.navigateByUrl('/projects');
    }
  }


}

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
  SERVER_URL = 'http://localhost:3000/project';

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

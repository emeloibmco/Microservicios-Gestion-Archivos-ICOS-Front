import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';



@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.css'],
})
export class AddAssetComponent implements OnInit {

  project = null;
  uploadForm: FormGroup;
  SERVER_URL = 'http://localhost:3000/file/';
  SERVER_URL_DESCRIP = 'http://localhost:3000/file-desc';
  file: string;
  myFiles: Array<File> = [];

  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private httpClient: HttpClient) { }

  
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.project = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.uploadForm = this.fb.group({
      description: [''],
      imgFile: [''],
      id_project: id
    });
  }

  onSelectedFile(event){
    if(event.target.files.length > 0){
      for(let i=0; i<(event.target.files.length); i++){
        this.myFiles[i] = event.target.files[i];
      }
    }
  }
  
  onSubmit(event) {

    try {
    const formData = new FormData();
    formData.append('description', this.uploadForm.get('description').value);
    for(let i=0; i<this.myFiles.length; i++){
      this.uploadForm.get('imgFile').setValue(this.myFiles[i]);
      formData.append('file', this.uploadForm.get('imgFile').value);
      console.log(this.uploadForm.get('imgFile').value);
    }
    this.httpClient.post<any>(this.SERVER_URL + this.project , formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err),
    );
    console.log(this.project);
    console.log(formData);
    this.router.navigate(['/assets', this.project]);
    } catch
    {
      console.log('Mistake uploading file');
      this.router.navigate(['/assets',this.project]);
    }
  }
}

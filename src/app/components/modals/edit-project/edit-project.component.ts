import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  @Input() id: number;
  myForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
   ) {
     this.createForm();
   }

  ngOnInit() {
  }

  private createForm() {
    this.myForm = this.formBuilder.group({
      nameProject: '',
      description: ''
    });
  }
  public submitForm() {
    this.activeModal.close(this.myForm.value);

  }
}

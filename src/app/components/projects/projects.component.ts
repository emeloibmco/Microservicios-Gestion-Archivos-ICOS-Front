import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QueryService } from '../../services/query.service';
import { Projectsmodel } from '../../models/projectsmodel';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditProjectComponent } from '../modals/edit-project/edit-project.component';
import { DeleteProjectComponent } from '../modals/delete-project/delete-project.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [QueryService]

})
export class ProjectsComponent implements OnInit {

  private SERVER_URL = 'http://localhost:3000/project/';

  constructor(public queryservice: QueryService, public router: Router, private httpClient: HttpClient, private modalService: NgbModal) { }

  ngOnInit() {
    this.getProjects();
  }

  public getProjects(){
      this.queryservice.getProjects()
      .subscribe(res => {
        console.log('Respuesta recibida');
        this.queryservice.project = res as Projectsmodel[];
        console.log(res);
      });
  }

  public clickEvent(id ){
    this.router.navigate(['assets', id]);
  }


  public openFormModalEdit(event, idproject) {
    const modalRef = this.modalService.open(EditProjectComponent);
    modalRef.componentInstance.id = idproject;

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  public openFormModalDelete(event, idproject) {
    const modalRef = this.modalService.open(DeleteProjectComponent);
    modalRef.componentInstance.id = idproject;

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }


  }


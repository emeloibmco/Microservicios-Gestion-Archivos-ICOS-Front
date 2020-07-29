import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { DeleteAllAssetComponent } from '../modals/delete-all-asset/delete-all-asset.component';
import { QueryService } from '../../services/query.service';
import { Trashmodel } from '../../models/trashmodel';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css'],
  providers: [QueryService]
})
export class TrashComponent implements OnInit {

  SERVER_URL = 'http://controller-micro-icos-application.openshift-43-ea9753cca330b7f05a99ad5b2c8b5da1-0000.us-east.containers.appdomain.cloud/docrestore/';

  public formName;

  public id_project;

  constructor(public queryservice: QueryService,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private httpClient : HttpClient, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getAssets(id);
    this.id_project = id;
  }

  getAssets(id) {
    this.queryservice.getAssetsTrash(id)
    .subscribe(res => {
      console.log('Respuesta recibida');
      this.queryservice.assettrash = res as Trashmodel[];
      console.log(res);
    });
  }

  deleteAsset(id, name) {
    const modalRef = this.modalService.open(DeleteAllAssetComponent);
    modalRef.componentInstance.id = this.id_project;
    modalRef.componentInstance.id_asset = id;
    modalRef.componentInstance.name_asset = name;

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  restoreData(name, id){
    console.log(this.id_project);

    this.httpClient.post<any>(this.SERVER_URL + this.id_project , this.formName = {name_asset: name, id_asset: id}).subscribe(
      (res) => console.log(res),
      (err) => console.log(err),
    );
    console.log(this.id_project);
    console.log(this.formName);

  }

}

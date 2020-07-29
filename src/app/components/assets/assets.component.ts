import { Component, OnInit, Inject } from '@angular/core';
import { QueryService } from '../../services/query.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { assetsmodel } from '../../models/assetsmodel';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { DeleteAssetComponent } from '../modals/delete-asset/delete-asset.component';
import { DownloadFileComponent } from '../modals/download-file/download-file.component';
import { DOCUMENT } from '@angular/common';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';



@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css'],
  providers: [QueryService]
})
export class AssetsComponent implements OnInit {

  public proyec = null;
  private URL_DOWN = 'http://controller-micro-icos-application.openshift-43-ea9753cca330b7f05a99ad5b2c8b5da1-0000.us-east.containers.appdomain.cloud/docDownload/';

  public formME;
  public urlDown;

  filteredSearch1 = '';

  constructor(@Inject(DOCUMENT) private document: Document, public queryservice: QueryService,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private httpClient: HttpClient, private location: Location) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.proyec = id;
    this.getAssets(id);
  }

  getAssets(id) {
    this.queryservice.getAssets(id)
    .subscribe(res => {
      console.log('Respuesta recibida');
      this.queryservice.asset = res as assetsmodel[];
      console.log(res);
    });
  }



  pageRefresh() {
    location.reload();
  }

  openFormModal(id_asset, name_asset) {
    const modalRef = this.modalService.open(DeleteAssetComponent);
    modalRef.componentInstance.id = id_asset; // should be the id
    modalRef.componentInstance.id_project = this.proyec;
    modalRef.componentInstance.name_assets = name_asset;

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  downloadAsset(name) {

    this.httpClient.post<any>(this.URL_DOWN + this.proyec , this.formME = {name_asset: name}).subscribe(
      (res) => {
        console.log(res);
        const hello: string = res;
        const modalRef = this.modalService.open(DownloadFileComponent);
        modalRef.componentInstance.url_down1 = hello;

        modalRef.result.then((result) => {
          console.log(result);
        }).catch((error) => {
          console.log(error);
        });
      },
      (err) => console.log(err),
    );
    console.log(this.formME);

  }
}




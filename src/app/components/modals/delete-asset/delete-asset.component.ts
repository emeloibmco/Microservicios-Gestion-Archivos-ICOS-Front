import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-delete-asset',
  templateUrl: './delete-asset.component.html',
  styleUrls: ['./delete-asset.component.css']
})
export class DeleteAssetComponent implements OnInit {

  @Input() id: number;
  @Input() id_project: number;
  @Input() name_assets: string;

  SERVER_URL = 'http://controller-micro-icos-application.openshift-43-ea9753cca330b7f05a99ad5b2c8b5da1-0000.us-east.containers.appdomain.cloud/docdelete/';

  public formName;

  constructor( private httpClient: HttpClient, public activeModal: NgbActiveModal) { }

  ngOnInit() {

  }



  deleteAsset(){
    this.httpClient.post<any>(this.SERVER_URL + this.id_project , this.formName = {name_asset: this.name_assets, id_asset: this.id}).subscribe(
      (res) => console.log(res),
      (err) => console.log(err),
    );
    console.log(this.name_assets);
    console.log(this.formName);
    this.activeModal.close('Modal Closed');
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }


}

import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-download-file',
  templateUrl: './download-file.component.html',
  styleUrls: ['./download-file.component.css']
})
export class DownloadFileComponent implements OnInit {

  @Input() url_down1: string;

  constructor( private httpClient: HttpClient,public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  downloadAsset(){
    var urllink = '';
    console.log(this.url_down1);
    urllink =  this.url_down1;
    window.open(`${urllink}`, "_blank"); 
    this.activeModal.close('Modal Closed');

  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

}

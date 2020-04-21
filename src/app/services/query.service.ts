import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { assetsmodel } from '../models/assetsmodel';
import { Projectsmodel } from '../models/projectsmodel';
import { Trashmodel } from '../models/trashmodel';



@Injectable({
  providedIn: 'root'
})
export class QueryService {

  selectassets: assetsmodel;
  asset: assetsmodel[];
  selectprojects: Projectsmodel;
  project: Projectsmodel[];
  selectassetstrash : Trashmodel;
  assettrash: Trashmodel[];

  readonly URL_API_GETASSET = 'http://localhost:4000/Assets/';
  readonly URL_API_GETPROJECTS = 'http://localhost:4000/projects';
  readonly URL_API_GETASSET_TR = 'http://localhost:4000/assettrash/';

  constructor(private http: HttpClient) {
    this.selectassets = new assetsmodel();
    this.selectprojects = new Projectsmodel();
  }

  getAssets(id) {
    return this.http.get(this.URL_API_GETASSET + id);
  }

  getAssetsTrash(id) {
    return this.http.get(this.URL_API_GETASSET_TR + id);
  }

  getProjects(){
    return this.http.get(this.URL_API_GETPROJECTS);
  }
}

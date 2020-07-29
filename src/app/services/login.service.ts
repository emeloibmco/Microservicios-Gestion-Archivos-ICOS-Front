import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  URL = 'http://controller-micro-icos-application.openshift-43-ea9753cca330b7f05a99ad5b2c8b5da1-0000.us-east.containers.appdomain.cloud/createuser/';


  constructor(private http: HttpClient) { }

  public login(username: string)
  {
    return this.http.post( 'http://controller-micro-icos-application.openshift-43-ea9753cca330b7f05a99ad5b2c8b5da1-0000.us-east.containers.appdomain.cloud/createuser/', {
      mail: username,
    });
  }
}

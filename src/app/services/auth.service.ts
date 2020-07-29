import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AuthData} from '../models/auth-data.model';
import {LoginData} from '../models/login-data.model';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _url = 'ldap://169.47.168.98:30255';
  private _domain = 'example.org';
  private token: string;

  constructor(private http: HttpClient) { }

  getToken(){
    return localStorage.getItem('token');
  }

  createUser( username: string, firstname: string, surname: string, password: string, email: string ){
    const authData: AuthData = {
      serverUrl: this._url,
      username: username,
      firstname: firstname,
      surname: surname,
      password: password,
      email: email,

    }

    this.http.post('http://controller-micro-icos-application.openshift-43-ea9753cca330b7f05a99ad5b2c8b5da1-0000.us-east.containers.appdomain.cloud/ldap/add', authData).subscribe( response => {
      console.log(response);
    });
  }

  login(mail: string, password: string){
    const loginData : LoginData = {
      serverUrl: this._url,
      username: mail,
      domain: this._domain,
      password: password
    }

    this.http.post<{token: string}>('http://controller-micro-icos-application.openshift-43-ea9753cca330b7f05a99ad5b2c8b5da1-0000.us-east.containers.appdomain.cloud/ldap/login', loginData).subscribe( response => {
      const token = response.token;
      this.token = token;
      localStorage.setItem('token', this.token);
    });

 

  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  URL = 'http://localhost:3000/createuser/';


  constructor(private http: HttpClient) { }

  public login(username: string)
  {
    return this.http.post( 'http://localhost:3000/createuser/', {
      mail: username,
    });
  }
}

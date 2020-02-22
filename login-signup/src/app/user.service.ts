import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user';
import {HttpClient, HttpResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import { LoginFormData } from './models/loginformdata';
import {map} from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  RESTURL = 'http://localhost:9090';
  REST_CLIENT_ID = "mountenmen-client";
  REST_CLIENT_SECRET ="secret";

  constructor(private httpClient: HttpClient, private router: Router) { }

  createUser(newUserDetails: User): Observable<HttpResponse<User>> {

    const requestHeaders = new HttpHeaders()
      .set('content-Type', 'application/json');

    return this.httpClient.post<User>(
      `${this.RESTURL}/user/signup`, newUserDetails, {headers: requestHeaders, observe: 'response'}
    );
  }

  getOauthToken(loginFormData: LoginFormData): Observable<any>{
    const requestHeaders = new HttpHeaders()
      .set('Content-type','application/x-www-form-urlencoded')
      .set('Authorization','Basic '+ btoa(this.REST_CLIENT_ID+':'+this.REST_CLIENT_SECRET));

    const requestBody = new HttpParams()
      .set('username', loginFormData.username)
      .set('password', loginFormData.password)
      .set('grant_type', 'password');

    return this.httpClient.post(
      `${this.RESTURL}/oauth/token`, requestBody, {headers: requestHeaders, observe: 'body'}
    );
  }

  doLogout() {
    window.sessionStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  checkLogin(){
    if(window.sessionStorage.getItem('token') && JSON.parse(window.sessionStorage.getItem('token')).access_token){
      return true;
    }

    this.router.navigate(['/']);
    return false;
  }

  getUsersList() {

    const requestHeaders = new HttpHeaders()
      .set('Content-type','application/x-www-form-urlencoded')
      .set('Authorization','Basic '+ JSON.parse(window.sessionStorage.getItem('token')).access_token);

    return this.httpClient.get(
      `${this.RESTURL}/admin/userlist`,{headers: requestHeaders}
    )
  }
}

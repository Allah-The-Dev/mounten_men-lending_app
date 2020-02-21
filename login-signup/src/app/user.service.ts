import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user';
import {HttpClient, HttpResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import { LoginFormData } from './models/LoginFormData';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  RESTURL = 'http://localhost:9090';
  REST_CLIENT_ID = "mountenmen-client";
  REST_CLIENT_SECRET ="secret";

  constructor(private httpClient: HttpClient) { }

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
    ).pipe(
      map(res => res.json())
    );
  }
}

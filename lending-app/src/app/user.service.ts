import { Injectable } from '@angular/core';
import { LendingRestService } from './lending-rest.service';
import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDetails } from './models/user-details';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "http://localhost:8080";
  constructor(private httpClient : HttpClient) { }

  createUser(userDetails: any):Observable<HttpResponse<any>> {
    const signUpUrl = `{this.apiUrl}/user`
    
    return this.httpClient.post<any>(signUpUrl,userDetails,{
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      observe: 'response'
    });
    throw new Error("Method not implemented.");
  }
}

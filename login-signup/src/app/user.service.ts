import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user';
import {HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  restUrl = 'http://localhost:9090';

  constructor(private httpClient: HttpClient) { }

  createUser(newUserDetails): Observable<HttpResponse<User>> {

    const requestHeaders = new HttpHeaders()
      .set('content-Type', 'application/json');

    return this.httpClient.post<User>(
      `${this.restUrl}/user/signup`, newUserDetails, {headers: requestHeaders, observe: 'response'}
    );
  }
}

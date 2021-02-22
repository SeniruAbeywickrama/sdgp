import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  public registerUser(email: string, password: string): Observable<any>{
    return this.http.post('http://127.0.0.1:3000/api/v1/adminUserRoute/registerUser', {
      email, password
    });
  }

  public loginUser(email: string, password: string): Observable<any>{
    return this.http.get('http://127.0.0.1:3000/api/v1/adminUserRoute/loginUser', {
      headers: { email, password }
    });
  }
}


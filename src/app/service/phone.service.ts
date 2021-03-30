import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor(private http: HttpClient) {
  }

  public checkMobile(email: string): Observable<any>{
    return this.http.get('http://127.0.0.1:3000/api/v1/phonePredictRoute/checkPhone', {
      headers: { email }
    });
  }

  public getAllPhone(): Observable<any>{
    return this.http.get('http://127.0.0.1:3000/api/v1/phonePredictRoute/getAllPhone', {
    });
  }
}


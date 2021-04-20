import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobiRecoService {

  constructor(private http: HttpClient) { }


  public checkMobileRecommendation(): Observable<any>{
    return this.http.get('http://127.0.0.1:3000/api/v1/phoneRecommendationRoute/checkMobileRecommendation', {
    });
  }

}

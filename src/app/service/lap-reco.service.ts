import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LapRecoService {

  constructor(private http: HttpClient) { }


  public checkLaptopRecommendation(): Observable<any>{
    return this.http.get('http://127.0.0.1:3000/api/v1/laptopRecommendationRoute/checkLaptopRecommendation', {
    });
  }
  public checkLaptopRecommendation02(): Observable<any>{
    return this.http.get('http://127.0.0.1:3000/api/v1/laptopRecommendationRoute/checkLaptopRecommendation02', {
    });
  }
  public checkLaptopRecommendation03(): Observable<any>{
    return this.http.get('http://127.0.0.1:3000/api/v1/laptopRecommendationRoute/checkLaptopRecommendation03', {
    });
  }
  public checkLaptopRecommendation04(): Observable<any>{
    return this.http.get('http://127.0.0.1:3000/api/v1/laptopRecommendationRoute/checkLaptopRecommendation04', {
    });
  }
}

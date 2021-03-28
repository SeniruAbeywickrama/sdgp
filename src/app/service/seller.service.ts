import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import sellerDTO from '../dto/sellerDTO';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }


  public saveSeller(seller: sellerDTO): Observable<any>{
    return this.http.post(this.baseUrl + 'saveSeller', {
      title: seller.title,
      description: seller.description,
      mobileNo: seller.contactNo,
      image: seller.image,
      other: seller.other
    });
  }
  public getAllSellers(): Observable<any>{
    return this.http.get(this.baseUrl + 'getAllSeller', {
    });
  }
  public deleteCustomer(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + 'deleteSeller',
      {headers: {id}});
  }
}

import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManageAccountService {

  constructor(private cookieService: CookieService) {
  }

  public isLoggedIn(): boolean {
    const tempToken = this.cookieService.get('tokenData');

    if (tempToken !== undefined) {
      return true;
    } else {
      return false;
    }
    //
    // await this.http.get('http://127.0.0.1:3000/api/v1/adminUserRoute/verifyToken',
    //   {headers: {token: tempToken}}).subscribe(resp=>{
    //     return true;
    // }, error => {
    //     return false;
    // });
  }
}

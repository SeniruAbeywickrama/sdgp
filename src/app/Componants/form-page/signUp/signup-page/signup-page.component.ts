import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from '../../../../service/login-service.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  constructor(private loginService: LoginServiceService) {
  }
  firstName: '';
  lastName: '';
  email: '';
  storeName: '';
  tel: number;
  password: '';


  ngOnInit(): void {
  }
  registerUser() {
      this.loginService.registerUser(this.email, this.password).subscribe(resp => {
        console.log(resp);
      }, error => {
        console.log(error);
      });
  }
}

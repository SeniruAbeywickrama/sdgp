import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from '../../../../service/login-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  constructor(private loginService: LoginServiceService, private router: Router) {
  }
  firstName: '';
  lastName: '';
  email: '';
  storeName: '';
  tel: number;
  password: '';


  ngOnInit(): void {
  }
  // method to register user details.
  registerUser() {
      this.loginService.registerUser(this.email, this.password).subscribe(resp => {
        console.log(resp);
        alert('Account Created.');         // show a alert
        this.router.navigate(['/Form']).then();     // if account create successful then load the sign-in page
      }, error => {
        console.log(error);
      });
  }
}

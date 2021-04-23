import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginServiceService} from '../../service/login-service.service';
import {CookieService} from 'ngx-cookie';


@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {
  email: '';
  password: '';
  constructor(private router: Router , private loginService: LoginServiceService, private cookieService: CookieService) {
  }


  ngOnInit(): void {
  }

  // navigate to sign up page
  accessSignPage() {
    this.router.navigate(['/SignUp']).then(resp => {
      console.log('Done');
    }).catch(error => {
      console.log(error);
    });
  }

  // get user login data
  loginUser() {
    this.loginService.loginUser(this.email, this.password).subscribe(resp => {
      if (resp.message === 'success') {
        const todayDate = new Date();       // 24 hours for cookie
        const tomorrow = new Date(todayDate);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const cookieOption = {
          expires: tomorrow
        };
        this.cookieService.put('tokenData', resp.token, cookieOption);
        alert('Success');
        this.router.navigate(['/']).then();       // import to main page
      } else {
        alert('Please Try Again!');
      }
      console.log(resp);
    }, error => {
      console.log(error);
    });
  }
}

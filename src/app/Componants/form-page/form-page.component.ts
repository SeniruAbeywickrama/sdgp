import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginServiceService} from '../../service/login-service.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {
  email: '';
  password: '';
  constructor(private router: Router) {
  }


  ngOnInit(): void {
  }

  accessSignPage() {
    this.router.navigate(['/SignUp']).then(resp => {
      console.log('Done');
    }).catch(error => {
      console.log(error);
    });
  }
  //
  // loginUser() {
  //   this.loginService.loginUser(this.email, this.password).subscribe(resp => {
  //     if (resp.message === 'success') {
  //
  //       const todayDate = new Date();
  //       const tomorrow = new Date(todayDate);
  //       tomorrow.setDate(tomorrow.getDate() + 1);
  //       // const cookieOption = {
  //       //   expires: tomorrow
  //       // };
  //       // this.cookieService.put('tokenData', resp.token, cookieOption);
  //       this.router.navigate(['/']).then();
  //
  //     } else {
  //       alert('Please Try Again!');
  //     }
  //
  //   }, error => {
  //     console.log(error);
  //   });
  //
  // }
}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  accessSignPage() {
    this.router.navigate(['/SignUp']).then(resp => {
      console.log('Done');
    }).catch(error => {
      console.log(error);
    });
  }

}

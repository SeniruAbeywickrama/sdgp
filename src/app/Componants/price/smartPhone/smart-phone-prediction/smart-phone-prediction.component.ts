import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginServiceService} from '../../../../service/login-service.service';
import {PhoneService} from '../../../../service/phone.service';

@Component({
  selector: 'app-smart-phone-prediction',
  templateUrl: './smart-phone-prediction.component.html',
  styleUrls: ['./smart-phone-prediction.component.css']
})
export class SmartPhonePredictionComponent implements OnInit {
  deviceName: '';
  phoneList: any[] = [];

  constructor(private router: Router , private mobilePredictService: PhoneService) { }

  ngOnInit(): void {
    this.loadAllPhones();
  }

  findPrediction() {
    this.mobilePredictService.checkMobile(this.deviceName).subscribe(resp => {
      if (resp.message === 'success') {
        alert('Success');
      } else {
        alert('Please try again.');
      }
      console.log(resp);
    }, error => {
      console.log(error);
    });
  }
  loadAllPhones(){
    this.mobilePredictService.getAllPhone().subscribe(response => {
      this.phoneList = response.dataset;
    }, error => {
      console.log(error);
    });
  }
}

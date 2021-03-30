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
  phonePrice: number;

  constructor(private router: Router , private mobilePredictService: PhoneService) { }

  ngOnInit(): void {
  }

  findPrediction() {
    this.mobilePredictService.checkMobile(this.deviceName).subscribe(resp => {
        this.phonePrice = resp.message;
        alert('Success');
        console.log(resp);
    }, error => {
      console.log(error);
    });
  }

  // loadAllPhones(){
  //   this.mobilePredictService.getAllPhone().subscribe(response => {
  //     this.phoneList = response.dataset;
  //   }, error => {
  //     console.log(error);
  //   });
  // }
}

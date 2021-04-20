import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginServiceService} from '../../../../service/login-service.service';
import {PhoneService} from '../../../../service/phone.service';
import {MobiRecoService} from '../../../../service/mobi-reco.service';

@Component({
  selector: 'app-smart-phone-prediction',
  templateUrl: './smart-phone-prediction.component.html',
  styleUrls: ['./smart-phone-prediction.component.css']
})
export class SmartPhonePredictionComponent implements OnInit {
  deviceName: '';
  predictedPrice: string;
  phoneList: any[] = [];
  currentPrice: string;
  dateArray: any[] = [];
  recommendedName = '';
  recommendedImage = '';

  constructor(private router: Router , private mobileService: MobiRecoService, private mobilePredictService: PhoneService) { }

  ngOnInit(): void {
    this.loadAllMobiRecommands();
  }

  findPrediction() {
    this.mobilePredictService.checkMobile(this.deviceName).subscribe(resp => {
        this.predictedPrice = 'LKR ' + resp.message;
        this.currentPrice = 'LKR ' + resp.current_price;
        alert('Success');
        this.loadAllMobiRecommands();
        console.log(resp);
    }, error => {
      console.log(error);
    });
  }


  // loadAllPhones(){
  //   this.mobilePredictService.getAllPhone().subscribe(response => {
  //     this.phoneList = response.dataset;
  //     this.predictedPrice = response.predictedPrice;
  //     this.dateArray = response.currentPrice;
  //     this.aaa = response.deviceName;
  //
  //
  //   }, error => {
  //     console.log(error);
  //   });
  // }

  loadAllMobiRecommands(){
    this.mobileService.checkMobileRecommendation().subscribe(response => {
      this.recommendedName = response.messageName01;
      this.recommendedImage = response.massageImage;
    }, error => {
      console.log(error);
    });
  }
}

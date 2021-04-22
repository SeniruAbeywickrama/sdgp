import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LaptopService} from '../../../../service/laptop.service';
import {LapRecoService} from '../../../../service/lap-reco.service';

@Component({
  selector: 'app-laptop-prediction',
  templateUrl: './laptop-prediction.component.html',
  styleUrls: ['./laptop-prediction.component.css']
})
export class LaptopPredictionComponent implements OnInit {

  predictedPrice: string;
  laptopList: any[] = [];
  currentPrice: string;
  deviceName: any;
  keyword = 'name';
  recommendedName = '';
  recommendedImage = '';
  recommendedName02 = '';
  recommendedImage02 = '';
  recommendedName03 = '';
  recommendedImage03 = '';
  recommendedName04 = '';
  recommendedImage04 = '';
  recommendedPrice01 = '';
  recommendedPrice02 = '';
  recommendedPrice03 = '';
  recommendedPrice04 = '';

  public phoneBrands = [{id: 1, name: 'Apple Mac Book Pro 13 inch', } , {id: 2, name: 'Apple Mac Book Pro i3 inch MXK32LLA', } , {id: 3, name: 'Apple Mac Mini', } , {id: 4, name: 'Apple Macbook Air  13 inch 512GB', }, {id: 5, name: 'Apple Macbook Air 13  inch 256GB', } ,, {id: 6, name: 'oppyilyiolo', } , {id: 7, name: 'oppo', } ,, {id: 8, name: 'oppo', } ,, {id: 9, name: 'oppo', } ,, {id: 10, name: 'oppo', } , ];
  selectEvent(item) {
    this.deviceName = item.name;
    console.log(this.deviceName);

  }
  onChangeSearch(search: string) {


  }
  onFocused(e) {}
  constructor(private router: Router , private laptopPredictService: LaptopService, private laptopService: LapRecoService) { }

  ngOnInit(): void {
    this.loadAllLapRecommands();
  }


  findLaptopPrediction() {
    this.laptopPredictService.checkLaptop(this.deviceName.name).subscribe(resp => {
      this.predictedPrice = 'LKR ' + resp.message;
      this.currentPrice = 'LKR ' + resp.current_price;
      alert('Success');
      this.loadAllLapRecommands();
      console.log(resp);
    }, error => {
      console.log(error);
    });
  }

  loadAllLapRecommands(){
    this.laptopService.checkLaptopRecommendation().subscribe(response => {
      this.recommendedName = response.messageName05;
      this.recommendedImage = response.massageImage05;
      this.recommendedPrice01 = response.messagePrice05;
    }, error => {
      console.log(error);
    });
    this.laptopService.checkLaptopRecommendation02().subscribe(response => {
      this.recommendedName02 = response.messageName06;
      this.recommendedImage02 = response.massageImage06;
      this.recommendedPrice02 = response.messagePrice06;
    }, error => {
      console.log(error);
    });
    this.laptopService.checkLaptopRecommendation03().subscribe(response => {
      this.recommendedName03 = response.messageName07;
      this.recommendedImage03 = response.massageImage07;
      this.recommendedPrice03 = response.messagePrice07;
    }, error => {
      console.log(error);
    });
    this.laptopService.checkLaptopRecommendation04().subscribe(response => {
      this.recommendedName04 = response.messageName08;
      this.recommendedImage04 = response.massageImage08;
      this.recommendedPrice04 = response.messagePrice08;
    }, error => {
      console.log(error);
    });
  }

  // loadAllMobiRecommands(){
  //   this.mobileService.checkMobileRecommendation().subscribe(response => {
  //     this.recommendedName = response.messageName01;
  //     this.recommendedImage = response.massageImage;
  //     this.recommendedPrice01 = response.messagePrice01;
  //   }, error => {
  //     console.log(error);
  //   });
  //   this.mobileService.checkMobileRecommendation02().subscribe(response => {
  //     this.recommendedName02 = response.messageName02;
  //     this.recommendedImage02 = response.massageImage02;
  //     this.recommendedPrice02 = response.messagePrice02;
  //   }, error => {
  //     console.log(error);
  //   });
  //   this.mobileService.checkMobileRecommendation03().subscribe(response => {
  //     this.recommendedName03 = response.messageName03;
  //     this.recommendedImage03 = response.massageImage03;
  //     this.recommendedPrice03 = response.messagePrice03;
  //   }, error => {
  //     console.log(error);
  //   });
  //   this.mobileService.checkMobileRecommendation04().subscribe(response => {
  //     this.recommendedName04 = response.messageName04;
  //     this.recommendedImage04 = response.massageImage04;
  //     this.recommendedPrice04 = response.messagePrice04;
  //   }, error => {
  //     console.log(error);
  //   });
  // }
}

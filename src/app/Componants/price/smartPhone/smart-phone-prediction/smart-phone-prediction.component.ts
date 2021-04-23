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

  // creating variables and arrays
  deviceName: any;
  predictedPrice: string;
  phoneList: any[] = [];
  currentPrice: string;
  dateArray: any[] = [];
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


  keyword = 'name';
  // assigning array values for autocomplte search bar
  public phoneBrands = [{id: 1, name: 'Huawei nova 7i', } , {id: 2, name: 'Huawei P40 Pro', } , {id: 3, name: 'Huawei Y5p', } , {id: 4, name: 'Huawei Y6p', }, {id: 5, name: 'Huawei Y7', } ,, {id: 6, name: 'Huawei Y7 Pro', } , {id: 7, name: 'Huawei Y7a', } ,, {id: 8, name: 'Huawei Y7p', } ,, {id: 9, name: 'Huawei Y9', } ,, {id: 10, name: 'Huawei Y9 Prime', } ,
    {id: 11, name: 'Huawei Y9s', } , {id: 12, name: 'Apple iPhone 8', } , {id: 13, name: 'Apple iPhone 11', } , {id: 14, name: 'Apple iPhone 11 Pro Max', } , {id: 15, name: 'Apple iPhone 12', } , {id: 16, name: 'Apple iPhone 12 mini', } , {id: 17, name: 'Apple iPhone 12 Pro', } , {id: 18, name: 'Apple iPhone 12 Pro Max', } , {id: 19, name: 'Apple iPhone SE', } , {id: 20, name: 'One plus 8', } ,
    {id: 21, name: 'One plus 8T', } , {id: 22, name: 'One plus nord', } , {id: 23, name: 'Samsung Galaxy A01', } , {id: 24, name: 'Samsung Galaxy A10s', } , {id: 25, name: 'Samsung Galaxy A21s 64GB', } , {id: 26, name: 'Samsung Galaxy A21s 128GB', } , {id: 27, name: 'Samsung Galaxy A51', } , {id: 28, name: 'Samsung Galaxy A71', } , {id: 29, name: 'Samsung Galaxy M01s', } ,  {id: 30, name: 'Samsung Galaxy M02s', } ,
    {id: 31, name: 'Samsung Galaxy M21', } , {id: 32, name: 'Samsung Galaxy M31', } , {id: 33, name: 'Samsung Galaxy M51', } , {id: 34, name: 'Samsung Galaxy Note10', } , {id: 35, name: 'Samsung Galaxy Note20', } , {id: 36, name: 'Samsung Galaxy S20', } , {id: 37, name: 'Samsung Galaxy S20 FE', } , {id: 38, name: 'Samsung Galaxy S21', } , {id: 39, name: 'Nokia 2.4', } , {id: 40, name: 'Nokia 3.4 32GB', } ,
    {id: 41, name: 'Nokia 3.4 64GB', } , {id: 42, name: 'Nokia 5.3', } , {id: 43, name: 'Nokia 5.4 64GB', } , {id: 44, name: 'Nokia 5.4 128GB', } , {id: 45, name: 'Nokia C1 Plus', } , {id: 46, name: 'Nokia C3', } , {id: 47, name: 'Oppo A12', } , {id: 48, name: 'Oppo A15', } , {id: 49, name: 'Oppo A31', } , {id: 50, name: 'Oppo A52', } ,
    {id: 51, name: 'Oppo A53', } , {id: 52, name: 'Oppo F17', } , {id: 53, name: 'Oppo Reno3', } , {id: 54, name: 'Realme 7', } , {id: 55, name: 'Realme C11', } , {id: 56, name: 'Realme C12', } , {id: 57, name: 'Realme C15', } , {id: 58, name: 'Realme C20', } , {id: 59, name: 'Sony Xperia C4 Dual LTE', } , {id: 60, name: 'Sony Xperia M4 Aqua', } ,
    {id: 61, name: 'Xiaomi Poco M3', } , {id: 62, name: 'Xiaomi Poco X3 NFC', } , {id: 63, name: 'Xiaomi Redmi 9C', } , {id: 64, name: 'Xiaomi Redmi 9', } , {id: 65, name: 'Xiaomi Redmi Note 9', } , {id: 66, name: 'Xiaomi Redmi Note 9S 64GB', } , {id: 67, name: 'Xiaomi Redmi Note 9S 128GB', } , {id: 68, name: 'Vivo V17 Pro', } , {id: 69, name: 'Vivo V20', } , {id: 70, name: 'Vivo Y11', } ,
    {id: 71, name: 'Vivo Y12s', } , {id: 72, name: 'Vivo Y20i', } , {id: 73, name: 'Vivo Y20s', } , {id: 74, name: 'Vivo Y30', } , {id: 75, name: 'Vivo Y50', } , {id: 76, name: 'Vivo Y51', } , {id: 77, name: 'Vivo Y91C', } , ];
  selectEvent(item) {
    this.deviceName = item.name;
    console.log(this.deviceName);

  }
  onChangeSearch(search: string) {


  }
  onFocused(e) {}

  constructor(private router: Router , private mobileService: MobiRecoService, private mobilePredictService: PhoneService) { }

  ngOnInit(): void {
    this.loadAllMobiRecommands();
  }
// getting current and prediction prices from the backend
  findPrediction() {
    this.mobilePredictService.checkMobile(this.deviceName.name).subscribe(resp => {
        this.predictedPrice = 'LKR ' + resp.message;
        this.currentPrice = 'LKR ' + resp.current_price;
        alert('Success');
        this.loadAllMobiRecommands();
        console.log(resp);
    }, error => {
      console.log(error);
    });
  }
// getting recommended device details from backend
  loadAllMobiRecommands(){
    this.mobileService.checkMobileRecommendation().subscribe(response => {
      this.recommendedName = response.messageName01;
      this.recommendedImage = response.massageImage;
      this.recommendedPrice01 = response.messagePrice01;
    }, error => {
      console.log(error);
    });
    this.mobileService.checkMobileRecommendation02().subscribe(response => {
      this.recommendedName02 = response.messageName02;
      this.recommendedImage02 = response.massageImage02;
      this.recommendedPrice02 = response.messagePrice02;
    }, error => {
      console.log(error);
    });
    this.mobileService.checkMobileRecommendation03().subscribe(response => {
      this.recommendedName03 = response.messageName03;
      this.recommendedImage03 = response.massageImage03;
      this.recommendedPrice03 = response.messagePrice03;
    }, error => {
      console.log(error);
    });
    this.mobileService.checkMobileRecommendation04().subscribe(response => {
      this.recommendedName04 = response.messageName04;
      this.recommendedImage04 = response.massageImage04;
      this.recommendedPrice04 = response.messagePrice04;
    }, error => {
      console.log(error);
    });
  }
}

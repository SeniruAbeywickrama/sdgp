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

  public phoneBrands = [{id: 1, name: 'ASUS CELERON NOTEBOOK - L203MA', } , {id: 2, name: 'ASUS I5 NOTEBOOK - FX505G 9GN', } , {id: 3, name: 'ASUS I5 NOTEBOOK - ASUS FX506LI 10GN', } , {id: 4, name: 'ASUS VIVOBOOK  I5 FLIP TP412FA 10GN', }, {id: 5, name: 'ASUS ZenBook Filp 13 UX363EA', } ,, {id: 6, name: 'Acer Nitro5', } , {id: 7, name: 'Acer Swift SF 314', } , {id: 8, name: 'ASUS VIVOBOOK F512J 10GN', } , {id: 9, name: 'ASUS I7 NOTEBOOK - GU502L', } ,
    {id: 10, name: 'Acer A315 3020E', } , {id: 11, name: 'Acer A514-54G-56U7', } , {id: 12, name: 'DEEL Inspiron - 3583', } , {id: 13, name: 'Acer A515 i3', } , {id: 14, name: 'Acer A515 i7 1165G7', } , {id: 15, name: 'Acer Aspire 3', } , {id: 16, name: 'Acer A515 I3 1115G4', } ,{id: 17, name: 'DELL 5505', } , {id: 18, name: 'DELL Gaming G5S Laptop', } , {id: 19, name: 'DELL Inspiron - 3593', } , {id: 20, name: 'DELL Vostro 3590', } , {id: 21, name: 'DELL xpx 13 \'2020 \' 9300', } ,
    {id: 22, name: 'LENOVO CELERON NOTEBOOK-14IGL05', } , {id: 23, name: 'LENOVO I3 NOTEBOOK-15IIL05', } , {id: 24, name: 'LENOVO I5-YOGA C740-14IML', } , {id: 25, name: 'LENOVO I5 NOTEBOOK  15IIL05 10GN12GB', } , {id: 26, name: 'LENOVO I7  YOGA C740-14IML 16GB', } , {id: 27, name: 'LENOVO I5 NOTEBOOK   IP3 14IIL05 10GN8GB', } , {id: 28, name: 'LENOVO I7 NOTEBOOK  IP 330 8GN', } ,{id: 29, name: 'LENOVO RYZEN 5  FLEX5 12GB', } , {id: 30, name: 'HP - Note Book 15 DA2034TU', } , {id: 31, name: 'HP - db0084ax', } , {id: 32, name: 'HP - pavilion 15- cs3049tx', } , {id: 33, name: 'HP - pavilion gaming dk2016tx', } , {id: 34, name: 'HP - probook x360 435 g7 r7', } ,
    , {id: 35, name: 'HP- 15s du1015tu', } , {id: 36, name: 'Hp 15s - Du1027tx', } , {id: 37, name: 'Apple Mac Book Pro 13 inch', } , {id: 38, name: 'Apple Mac Book Pro i3 inch MXK32LLA', } , {id: 39, name: 'Apple Macbook Air  13 inch 512GB', } , ];
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




}

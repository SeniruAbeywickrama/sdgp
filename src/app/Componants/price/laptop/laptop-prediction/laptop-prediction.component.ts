import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LaptopService} from '../../../../service/laptop.service';

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
  public phoneBrands = [{id: 1, name: 'Apple Mac Book Pro 13 inch', } , {id: 2, name: 'Apple Mac Book Pro i3 inch MXK32LLA', } , {id: 3, name: 'Apple Mac Mini', } , {id: 4, name: 'Apple Macbook Air  13 inch 512GB', }, {id: 5, name: 'Apple Macbook Air 13  inch 256GB', } ,, {id: 6, name: 'oppyilyiolo', } , {id: 7, name: 'oppo', } ,, {id: 8, name: 'oppo', } ,, {id: 9, name: 'oppo', } ,, {id: 10, name: 'oppo', } , ];
  selectEvent(item) {
    this.deviceName = item.name;
    console.log(this.deviceName);

  }
  onChangeSearch(search: string) {


  }
  onFocused(e) {}
  constructor(private router: Router , private laptopPredictService: LaptopService) { }

  ngOnInit(): void {
  }


  findLaptopPrediction() {
    this.laptopPredictService.checkLaptop(this.deviceName.name).subscribe(resp => {
      this.predictedPrice = 'LKR ' + resp.message;
      this.currentPrice = 'LKR ' + resp.current_price;
      alert('Success');
      console.log(resp);
    }, error => {
      console.log(error);
    });
  }
}

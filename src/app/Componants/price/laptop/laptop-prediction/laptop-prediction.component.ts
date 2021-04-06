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
  deviceName: '';

  constructor(private router: Router , private laptopPredictService: LaptopService) { }

  ngOnInit(): void {
  }


  findLaptopPrediction() {
    this.laptopPredictService.checkLaptop(this.deviceName).subscribe(resp => {
      this.predictedPrice = 'LKR ' + resp.message;
      this.currentPrice = 'LKR ' + resp.current_price;
      alert('Success');
      console.log(resp);
    }, error => {
      console.log(error);
    });
  }
}

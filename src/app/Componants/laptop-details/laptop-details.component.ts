import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LaptopService} from '../../service/laptop.service';
import {LapRecoService} from '../../service/lap-reco.service';

@Component({
  selector: 'app-laptop-details',
  templateUrl: './laptop-details.component.html',
  styleUrls: ['./laptop-details.component.css']
})
export class LaptopDetailsComponent implements OnInit {
  detailList: any[] = [];

  constructor(private router: Router , private laptopService: LapRecoService) { }

  ngOnInit(): void {
    this.getLaptopDetail();
  }


  getLaptopDetail() {
    this.laptopService.getLaptopDetail().subscribe(resp => {
      this.detailList = resp.dataSet;
      console.log(resp);
    }, error => {
      console.log(error);
    });
  }


}

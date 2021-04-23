import { Component, OnInit } from '@angular/core';
import {SellerService} from '../../service/seller.service';
import sellerDTO from '../../dto/sellerDTO';
import {Router} from '@angular/router';

@Component({
  selector: 'app-seller-portal',
  templateUrl: './seller-portal.component.html',
  styleUrls: ['./seller-portal.component.css']
})
export class SellerPortalComponent implements OnInit {
  postTitle = '';
  description = '';
  mobileNo = 0;
  sellerList: any[] = [];
  filesToUpload: Array<File> = [];
  urls = new Array<string>();
  deviceImage = this.urls[0];
  constructor(private sellerService: SellerService , private router: Router)  { }

  ngOnInit(): void {
    this.loadAllSellers();
  }

  // load all seller data
  loadAllSellers(){
    this.sellerService.getAllSellers().subscribe(response => {
      this.sellerList = response.dataSet;
    }, error => {
      console.log(error);
    });
  }

  // save seller details to Object file
  saveSeller() {
    const dto = new sellerDTO(
      this.postTitle.trim(),
      this.description.trim(),
      Number(this.mobileNo),
      this.deviceImage,
      []
    );
    this.sellerService.saveSeller(dto).subscribe(resp => {
      alert(resp.message);
    }, error => {
      console.log(error);
    });
  }

  changeFiles(event) {
    this.filesToUpload = event.target.files as Array<File>;
    this.urls = [];
    const files = event.target.files;
    if (files){
      for (const file of files){
        const reader = new FileReader();
        reader.onload = (e: any) => {
          if (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png') {
            if (Number(e.total) > 2e+6) {
              alert('Please make sure that you entered image size is less than 2MB');
              this.filesToUpload = [];
              return;
            } else {
              this.urls.push(e.target.result);
            }
          } else {
            alert('Supported formats: .JPEG .JPG .PNG');
            this.filesToUpload = [];
            return;
          }
        };
        reader.readAsDataURL(file);
      }
      }
    }

  deleteCustomer(_id: string) {
    if (confirm('Are You Sure ?')){
      this.sellerService.deleteCustomer(_id).subscribe(response => {
        this.loadAllSellers();
        alert('Deleted !');
      }, error => {
        console.log(error);
      });
    }
  }
}

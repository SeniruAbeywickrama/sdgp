import { Component, OnInit } from '@angular/core';
import sellerDTO from '../../dto/sellerDTO';
import {SellerService} from '../../service/seller.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  postTitle = '';
  description = '';
  mobileNo = 0;
  sellerList: any[] = [];
  filesToUpload: Array<File> = [];
  urls = new Array<string>();
  deviceImage = this.urls[0];

  constructor(private sellerService: SellerService) { }

  ngOnInit(): void {
  }

  //pass the user data to database
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

  // add images and use validations
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
}

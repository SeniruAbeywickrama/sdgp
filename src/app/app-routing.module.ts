import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './Componants/home-page/home-page.component';
import {FormPageComponent} from './Componants/form-page/form-page.component';
import {PriceComponent} from './Componants/price/price.component';
import {AboutPageComponent} from './Componants/about-page/about-page.component';
import {SignupPageComponent} from './Componants/form-page/signUp/signup-page/signup-page.component';
import {SellerPortalComponent} from './Componants/seller-portal/seller-portal.component';
import {NotFoundPageComponent} from './Componants/not-found-page/not-found-page.component';
import {AuthGuard} from './guard/auth.guard';
import {SmartPhonePredictionComponent} from './Componants/price/smartPhone/smart-phone-prediction/smart-phone-prediction.component';
import {LaptopPredictionComponent} from './Componants/price/laptop/laptop-prediction/laptop-prediction.component';
import {CreatePostComponent} from './Componants/create-post/create-post.component';
import {PhoneDetailsComponent} from './Componants/phone-details/phone-details.component';
import {LaptopDetailsComponent} from './Componants/laptop-details/laptop-details.component';

const routes: Routes = [
  {path: '', component : HomePageComponent},
  {path: 'Predict' , component: PriceComponent},
  {path: 'About' , component: AboutPageComponent},
  {path: 'Form', component :  FormPageComponent},
  {path: 'SignUp', component: SignupPageComponent},
  {path: 'SellerPortal', component: SellerPortalComponent},
  {path: 'MobilePrediction' , component: SmartPhonePredictionComponent},
  {path: 'LaptopPrediction' , component: LaptopPredictionComponent},
  {path: 'CreatePost' , component: CreatePostComponent,  canActivate: [AuthGuard]},
  {path: 'MobileDetails' , component: PhoneDetailsComponent},
  {path: 'LaptopDetails' , component: LaptopDetailsComponent},
  {path: '**' , component: NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

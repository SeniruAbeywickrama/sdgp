import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomePageComponent} from './Componants/home-page/home-page.component';
import {FormPageComponent} from './Componants/form-page/form-page.component';
import { PriceComponent } from './Componants/price/price.component';
import { AboutPageComponent } from './Componants/about-page/about-page.component';
import { SignupPageComponent } from './Componants/form-page/signUp/signup-page/signup-page.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CookieModule} from 'ngx-cookie';
import { SellerPortalComponent } from './Componants/seller-portal/seller-portal.component';
import { NotFoundPageComponent } from './Componants/not-found-page/not-found-page.component';
import {SellerService} from './service/seller.service';
import { LaptopPredictionComponent } from './Componants/price/laptop/laptop-prediction/laptop-prediction.component';
import { SmartPhonePredictionComponent } from './Componants/price/smartPhone/smart-phone-prediction/smart-phone-prediction.component';
import { CreatePostComponent } from './Componants/create-post/create-post.component';
import { PhoneDetailsComponent } from './Componants/phone-details/phone-details.component';
import { LaptopDetailsComponent } from './Componants/laptop-details/laptop-details.component';
import {MobiRecoService} from './service/mobi-reco.service';
import {AutocompleteLibComponent, AutocompleteLibModule} from 'angular-ng-autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FormPageComponent,
    PriceComponent,
    AboutPageComponent,
    SignupPageComponent,
    SellerPortalComponent,
    NotFoundPageComponent,
    LaptopPredictionComponent,
    SmartPhonePredictionComponent,
    CreatePostComponent,
    PhoneDetailsComponent,
    LaptopDetailsComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AutocompleteLibModule,
        RouterModule,
        FormsModule,
        HttpClientModule,
        CookieModule.forRoot()
    ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

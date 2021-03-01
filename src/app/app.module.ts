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

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FormPageComponent,
    PriceComponent,
    AboutPageComponent,
    SignupPageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        FormsModule,
        HttpClientModule,
        CookieModule.forRoot()
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

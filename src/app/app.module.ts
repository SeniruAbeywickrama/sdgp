import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomePageComponent} from './Componants/home-page/home-page.component';
import {FormPageComponent} from './Componants/form-page/form-page.component';
import { PriceComponent } from './Componants/price/price.component';
import { AboutPageComponent } from './Componants/about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FormPageComponent,
    PriceComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

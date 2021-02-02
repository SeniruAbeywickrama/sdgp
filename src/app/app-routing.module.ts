import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './Componants/home-page/home-page.component';
import {FormPageComponent} from './Componants/form-page/form-page.component';
import {PriceComponent} from './Componants/price/price.component';
import {AboutPageComponent} from './Componants/about-page/about-page.component';

const routes: Routes = [
  {path: '', component : HomePageComponent},
  {path: 'Form', component :  FormPageComponent},
  {path: 'Predict' , component: PriceComponent},
  {path: 'About' , component: AboutPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './Componants/home-page/home-page.component';
import {FormPageComponent} from './Componants/form-page/form-page.component';
import {PriceComponent} from './Componants/price/price.component';
import {AboutPageComponent} from './Componants/about-page/about-page.component';
import {SignupPageComponent} from './Componants/form-page/signUp/signup-page/signup-page.component';

const routes: Routes = [
  {path: '', component : HomePageComponent},
  {path: 'Predict' , component: PriceComponent},
  {path: 'About' , component: AboutPageComponent},
  {path: 'Form', component :  FormPageComponent},
  {path: 'SignUp', component: SignupPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

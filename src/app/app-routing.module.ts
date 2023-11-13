import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoCardOneComponent } from './info-card-one/info-card-one.component';
import { InfoCardTwoComponent } from './info-card-two/info-card-two.component';

const routes: Routes = [
  {path : 'cardOne' , component : InfoCardOneComponent}, 
  {path : 'cardTwo' , component : InfoCardTwoComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

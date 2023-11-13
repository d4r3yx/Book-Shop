import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfoCardOneComponent } from './info-card-one/info-card-one.component';
import { InfoCardTwoComponent } from './info-card-two/info-card-two.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoCardOneComponent,
    InfoCardTwoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

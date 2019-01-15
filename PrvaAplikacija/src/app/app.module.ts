import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrvaKomponentaComponent } from './prva-komponenta/prva-komponenta.component';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { Component } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    PrvaKomponentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

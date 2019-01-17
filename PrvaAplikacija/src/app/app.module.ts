import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrvaKomponentaComponent } from './prva-komponenta/prva-komponenta.component';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { Component } from '@angular/core';
import { InputComponentComponent } from './input-component/input-component.component';
import { FormsModule } from '@angular/forms';
import { FirstDirectiveDirective } from './first-directive/first-directive.directive';


@NgModule({
  declarations: [
    AppComponent,
    PrvaKomponentaComponent,
    InputComponentComponent,
    FirstDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

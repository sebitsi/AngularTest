import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, SelectControlValueAccessor } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PosteComponent } from './poste/poste.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServerService } from './server.service';
import { MatInputModule } from '../../node_modules/@angular/material/input';
import { MatButtonModule } from '../../node_modules/@angular/material/button';
import { MatTableModule } from '../../node_modules/@angular/material/table';
import { MatRadioModule } from '../../node_modules/@angular/material/radio';
import { MatSelectModule } from '../../node_modules/@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    PosteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatSelectModule
  
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

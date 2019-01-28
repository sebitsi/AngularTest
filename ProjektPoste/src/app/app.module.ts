import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CdkTableModule } from '@angular/cdk/table';
import { A11yModule } from '@angular/cdk/a11y';
import { MatDialogModule } from '@angular/material/dialog';

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
import { MatIconModule } from '../../node_modules/@angular/material/icon';
import { PosteThumbnailComponent } from './poste/poste-thumbnail/poste-thumbnail.component';


@NgModule({
  declarations: [
    AppComponent,
    PosteComponent,
    PosteThumbnailComponent
  ],
  entryComponents: [
    PosteThumbnailComponent
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
    MatSelectModule,
    CdkTableModule,
    A11yModule,
    MatIconModule,
    MatDialogModule
  
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

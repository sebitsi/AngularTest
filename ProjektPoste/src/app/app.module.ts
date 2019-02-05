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
import { RouterModule, Routes } from '@angular/router';
import { Vaja1Component } from './vaja1/vaja1.component';
import { Vaja2Component } from './vaja2/vaja2.component'; 
import { HomeComponent } from './home/home.component';
import { MatTabsModule } from '@angular/material';
import { EnaComponent } from './vaja1/ena/ena.component';
import { DvaComponent } from './vaja1/dva/dva.component'; 
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MatCardModule } from '@angular/material/card';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search-knjige', component: PosteComponent },
  { path: 'vaja-1', component: Vaja1Component,  
      children: [
        { path: 'ena', component: EnaComponent },
        { path: 'dva', component: DvaComponent }
      ] },
  { path: 'vaja-2', component: Vaja2Component },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full' },
  

];

@NgModule({
  declarations: [
    AppComponent,
    PosteComponent,
    PosteThumbnailComponent,
    Vaja1Component,
    Vaja2Component,
    HomeComponent,
    EnaComponent,
    DvaComponent
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
    MatDialogModule,
    RouterModule,
    MatTabsModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    ////////////////////////////////////////////
    RouterModule.forRoot(appRoutes),
    MatCardModule
    
  
  ],
  exports: [
    RouterModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }


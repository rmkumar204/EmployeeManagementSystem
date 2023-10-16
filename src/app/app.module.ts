import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Global } from './global/global';
import { IonicModule } from '@ionic/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


const routes:Routes=[];
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes,{useHash:true}),
    HttpClientModule,
    IonicModule.forRoot(),
    BrowserAnimationsModule
    

  ],
  providers: [Global],
  bootstrap: [AppComponent]
})
export class AppModule { }

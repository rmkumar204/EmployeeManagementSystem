import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import {FormsModule} from '@angular/forms';
import { MbscModule} from '@mobiscroll/angular';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MbscModule,
    SignupRoutingModule,
    MatIconModule,
    MatCheckboxModule
  ]
})
export class SignupModule { }

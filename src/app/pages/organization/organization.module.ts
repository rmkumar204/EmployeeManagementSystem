import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationComponent } from './organization.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {IonicModule} from '@ionic/angular';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    OrganizationComponent
  ],
  imports: [
    CommonModule,
    OrganizationRoutingModule,
    SharedModule,
    MatToolbarModule,
    IonicModule
  ]
})
export class OrganizationModule { }

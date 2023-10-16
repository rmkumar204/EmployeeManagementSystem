import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';
import { SharedRoutingModule } from './shared-routing.module';
import { HeaderBreadcrumsComponent } from './header-breadcrums/header-breadcrums.component';


@NgModule({
  declarations: [HeaderBreadcrumsComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    IonicModule,
    
  ],
  exports:[
    HeaderBreadcrumsComponent,
  ]
})
export class SharedModule { }

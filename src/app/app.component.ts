import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EmployeeManagementSystem';
  login_success:boolean=false;
  selectedPath!:string;
  org_name:any;
  selectedMenuItem: string = '';
  constructor(
    public router:Router,
    public navCtrl:NavController,
  ){
    this.router.events.subscribe((event:any) =>{
      if(event && event.url){
        this.selectedPath=event.url;
        console.log('this.',this.selectedPath)
  
        if(this.selectedPath!='' && this.selectedPath !='/login' && this.selectedPath !='/signup'){
          this.login_success=true;
          this.org_name=localStorage.getItem('org_name');
        }
        else{
          this.login_success=false;
        }

      }
    })
  }
  selectMenuItem(menuItem: string) {
    console.log('menj',menuItem)
    this.selectedMenuItem = menuItem;
  }
  

}

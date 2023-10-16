import { Component } from '@angular/core';

@Component({
  selector: 'app-header-breadcrums',
  templateUrl: './header-breadcrums.component.html',
  styleUrls: ['./header-breadcrums.component.scss']
})
export class HeaderBreadcrumsComponent {

  org_name:any;
  constructor(){
    this.org_name=localStorage.getItem('org_name');
    console.log('this.org', this.org_name);
  }
}

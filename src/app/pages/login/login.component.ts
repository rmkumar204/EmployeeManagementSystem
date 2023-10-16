import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from 'src/app/global/global';
import { Router } from '@angular/router';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  
})
export class LoginComponent {

  hide = true;
 headeroption:any;
  org_name:any;
  org_password:any;
  constructor(
    public httpClient:HttpClient,
    public global:Global,
    public router:Router,
    public navCtrl:NavController,
  ){
    // this.headeroption={headers:this.global.header}
  }
  onSubmit(loginForm:any){
    if (loginForm.valid) {
    this.headeroption={ headers: this.global.header};
     const data={
      "org_name":this.org_name,
      "org_password":this.org_password
     }
     this.httpClient.post(this.global.url+'login',data,this.headeroption).pipe().subscribe((data:any)=>{
      console.log(data)
      localStorage.setItem('org_name',data.data.org_name);
      localStorage.setItem('org_id',data.data.org_id);
      // this.router.navigate(['/organization']);
      this.navCtrl.navigateRoot('/organization');

     })
    }
  }

  signup(){
    this.navCtrl.navigateRoot('/signup');
    console.log("svcsdaasdfasfdasdf");
  }
}

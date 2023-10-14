import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from 'src/app/global/global';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  hide = true;
  constructor(
    public httpClient:HttpClient,
    public global:Global,
  ){}
  org_name:any;
  org_password:any;
  headeroptions:any;
  terms_and_condition:boolean=false;
  onSubmit(signupForm:any){
    this.headeroptions={ headers: this.global.header};
    if (signupForm.valid) {
    let data={
      "org_name":this.org_name,
      "org_password":this.org_password,
      "org_terms_cond":this.terms_and_condition
    }
    console.log('data',data)
    this.httpClient.post(this.global.url+"organization",data,this.headeroptions).pipe().subscribe(async (data: any) => {
      console.log('data',data)
    });
    }
  }
  onCheckboxChange() {
    console.log('Checkbox value: ', this.terms_and_condition);
  }
  
}

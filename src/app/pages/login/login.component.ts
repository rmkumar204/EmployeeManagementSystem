import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  
})
export class LoginComponent {

  hide = true;
  constructor(){
    
  }
  org_name:any;
  org_password:any;
  onSubmit(loginForm:any){
    if (loginForm.valid) {
      console.log('Login successful');
      console.log('Username: ' + loginForm.value.org_name);
      console.log('Password: ' + loginForm.value.org_password);
    }
  }

 
}

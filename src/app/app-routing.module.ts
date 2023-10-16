import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    loadChildren:()=>import('./pages/login/login.module').then(m=>m.LoginModule)
  },
  {
    path:'signup',
    loadChildren:()=>import('./pages/signup/signup.module').then(m=>m.SignupModule)
  },
  {
    path:'organization',
    loadChildren:()=>import('./pages/organization/organization.module').then(m=>m.OrganizationModule)
  },
  {
    path:'users',
    loadChildren:()=>import('./pages/users/users.module').then(m=>m.UsersModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

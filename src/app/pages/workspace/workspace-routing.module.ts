import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkspaceComponent } from './workspace.component';
import { WorkspacedetailsComponent } from './workspacedetails/workspacedetails.component';

const routes: Routes = [{
  path:'',
  component:WorkspaceComponent
},
  {
    path:':id' , component:WorkspacedetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspaceRoutingModule { }

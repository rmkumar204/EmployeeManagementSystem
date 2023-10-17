import { Component, ViewChild,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WorkspaceAddEditComponent } from './workspace-add-edit/workspace-add-edit.component';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Global } from 'src/app/global/global';
import { HttpClient } from '@angular/common/http';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {
  displayedColumns: string[] = ['id', 'workspace', 'documents','action'];
  dataSource!: MatTableDataSource<any>;

  headeroptions:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private _dialog:MatDialog,
    public global:Global,
    public httpClient:HttpClient,
    public navCtrl:NavController,

    ){}

  ngOnInit(): void {
    this.getWorkspaceDetails()
  }

  getWorkspaceDetails(){
    let id=localStorage.getItem('user_id');
    this.headeroptions=this.global.header;
    this.httpClient.get(this.global.url+`workspace/${id}`,this.headeroptions).pipe().subscribe((data:any)=>{
      console.log(data);
      this.dataSource=new MatTableDataSource(data.data);
      console.log(this.dataSource)
      this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.paginator;
    })
  }

  workspaceform(){
    const dialogRef=this._dialog.open(WorkspaceAddEditComponent);
    dialogRef.afterClosed().subscribe(
      {
        next:(val)=>{
          if(val){
            this.getWorkspaceDetails();
          }
        }
      }
    )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteWorkspace(id:number){
    this.httpClient.delete(this.global.url+`workspace/${id}`,this.headeroptions).pipe().subscribe((response:any)=>{
      if(response.statusCode==200){
        this.getWorkspaceDetails();
      }
    })
  }
  editWorkspace(data:any){
    console.log('datareceived', data)
   const dialogRef= this._dialog.open(WorkspaceAddEditComponent,{
      data
    });
    dialogRef.afterClosed().subscribe(
      {
        next:(val)=>{
          if(val){
            this.getWorkspaceDetails();
          }
        }
      }
    )
  }
  documents(workspaceid:number){
    this.navCtrl.navigateRoot('/documents');
    localStorage.setItem('workspaceid',JSON.stringify(workspaceid));
  }


}

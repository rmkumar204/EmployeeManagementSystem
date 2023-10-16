import { Component, ViewChild,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserAddEditComponent } from './user-add-edit/user-add-edit.component';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Global } from 'src/app/global/global';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{

  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email','gender','dob','action'];
  dataSource!: MatTableDataSource<any>;

  headeroptions:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private _dialog:MatDialog,
    public global:Global,
    public httpClient:HttpClient,
    

    ){}

  ngOnInit(): void {
    this.getUserDetails()
  }
  userform(){
    const dialogRef=this._dialog.open(UserAddEditComponent);
    dialogRef.afterClosed().subscribe(
      {
        next:(val)=>{
          if(val){
            this.getUserDetails();
          }
        }
      }
    )
  }

  async getUserDetails(){
    let id=localStorage.getItem('org_id');
    this.headeroptions=this.global.header;
    console.log(this.global.url+`users/${id}`)
    this.httpClient.get(this.global.url+`users/${id}`,this.headeroptions).pipe().subscribe((data:any)=>{
      console.log(data);
      this.dataSource=new MatTableDataSource(data.data);
      console.log(this.dataSource)
      this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.paginator;
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteUser(id:number){
    this.httpClient.delete(this.global.url+`users/${id}`,this.headeroptions).pipe().subscribe((response:any)=>{
      if(response.statusCode==200){
        this.getUserDetails();
      }
    })
  }
  editUser(data:any){
    console.log('datareceived', data)
   const dialogRef= this._dialog.open(UserAddEditComponent,{
      data
    });
    dialogRef.afterClosed().subscribe(
      {
        next:(val)=>{
          if(val){
            this.getUserDetails();
          }
        }
      }
    )
  }
}

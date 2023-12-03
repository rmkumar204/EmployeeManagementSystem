import { Component, ViewChild,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { DocumentAddEditComponent } from './user-add-edit/user-add-edit.component';
import { DocumentsAddEditComponent } from './documents-add-edit/documents-add-edit.component';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Global } from 'src/app/global/global';
import { HttpClient } from '@angular/common/http';
import {NavController} from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent {


  displayedColumns: string[] = ['id', 'documents','action'];
  dataSource!: MatTableDataSource<any>;
  Nname:string='';
  email:string='';
  password:string='';

  headeroptions:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('dform') signUpForm!:NgForm;
  constructor(private _dialog:MatDialog,
    public global:Global,
    public httpClient:HttpClient,
    public navCtrl:NavController,

    ){}

  ngOnInit(): void {
    this.getDocumentDetails()
  }
  documentform(){
    const dialogRef=this._dialog.open(DocumentsAddEditComponent);
    dialogRef.afterClosed().subscribe(
      {
        next:(val)=>{
          if(val){
            this.getDocumentDetails();
          }
        }
      }
    )
  }

  async getDocumentDetails(){
    let id=localStorage.getItem('workspace_id');
    this.headeroptions=this.global.header;
    console.log(this.global.url+`document/${id}`)
    this.httpClient.get(this.global.url+`document/${id}`,this.headeroptions).pipe().subscribe((data:any)=>{
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

  deleteDocument(id:number){
    this.httpClient.delete(this.global.url+`document/${id}`,this.headeroptions).pipe().subscribe((response:any)=>{
      if(response.statusCode==200){
        this.getDocumentDetails();
      }
    })
  }
  editDocument(data:any){
    console.log('datareceived', data)
   const dialogRef= this._dialog.open(DocumentsAddEditComponent,{
      data
    });
    dialogRef.afterClosed().subscribe(
      {
        next:(val)=>{
          if(val){
            this.getDocumentDetails();
          }
        }
      }
    )
  }

  onSubmit(){
    console.log('submitted',this.signUpForm)
  }
}

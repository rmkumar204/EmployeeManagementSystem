import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Global } from 'src/app/global/global';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-documents-add-edit',
  templateUrl: './documents-add-edit.component.html',
  styleUrls: ['./documents-add-edit.component.scss']
})
export class DocumentsAddEditComponent implements OnInit  {

  documentForm:FormGroup;
  headeroptions:any;

  constructor( 
    private _fb:FormBuilder,
    public httpClient:HttpClient,
    public global:Global,
    public _dialogRef:MatDialogRef<DocumentsAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    ){
    this.documentForm= this._fb.group({
      document:'',
    })
  }
  ngOnInit(): void {
    this.documentForm.patchValue(this.data);
  }

  onFormSubmit(){
    if(this.documentForm.valid){
      this.headeroptions={header:this.global.header}
      console.log(this.documentForm.value);
      let formvalues=this.documentForm.value;
      if(this.data){
        let updatedata={
          "document":formvalues.document,
          
        }
        console.log(this.data.id);
        this.httpClient.put(this.global.url+`document/${this.data.id}`,updatedata,this.headeroptions).pipe().subscribe((response:any)=>{
          if(response.statusCode==200){
            this._dialogRef.close(true);
            
          }
        })
      }
      else{
        
        let data={
          "document":formvalues.document,
          "workspace_id":localStorage.getItem('workspace_id')
        }
        this.httpClient.post(this.global.url+'document',data,this.headeroptions).pipe().subscribe((data:any)=>{
          console.log(data);
          if(data.statusCode==201){
            this._dialogRef.close(true);
            
          }
        })
      }

    }
  }
}

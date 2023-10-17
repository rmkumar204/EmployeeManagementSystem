import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Global } from 'src/app/global/global';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-workspace-add-edit',
  templateUrl: './workspace-add-edit.component.html',
  styleUrls: ['./workspace-add-edit.component.scss']
})
export class WorkspaceAddEditComponent implements OnInit {

  workspaceForm:FormGroup;
  headeroptions:any;

  constructor( 
    private _fb:FormBuilder,
    public httpClient:HttpClient,
    public global:Global,
    public _dialogRef:MatDialogRef<WorkspaceAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    ){
    this.workspaceForm= this._fb.group({
      workspace:'',
    })
  }
  ngOnInit(): void {
    this.workspaceForm.patchValue(this.data);
  }

  onFormSubmit(){
    if(this.workspaceForm.valid){
      this.headeroptions={header:this.global.header}
      console.log(this.workspaceForm.value);
      let formvalues=this.workspaceForm.value;
      if(this.data){
        let updatedata={
          "workspace":formvalues.workspace,
          
        }
        console.log(this.data.id);
        this.httpClient.put(this.global.url+`workspace/${this.data.id}`,updatedata,this.headeroptions).pipe().subscribe((response:any)=>{
          if(response.statusCode==200){
            this._dialogRef.close(true);
            
          }
        })
      }
      else{
        
        let data={
          "workspace":formvalues.workspace,
          "user_id":localStorage.getItem('user_id')
        }
        this.httpClient.post(this.global.url+'workspace',data,this.headeroptions).pipe().subscribe((data:any)=>{
          console.log(data);
          if(data.statusCode==201){
            this._dialogRef.close(true);
            
          }
        })
      }

    }
  }
}

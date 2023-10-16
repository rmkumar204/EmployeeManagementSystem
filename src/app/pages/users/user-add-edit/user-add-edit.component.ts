import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Global } from 'src/app/global/global';
// import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-add-edit',
  templateUrl: './user-add-edit.component.html',
  styleUrls: ['./user-add-edit.component.scss']
})
export class UserAddEditComponent implements OnInit{

  userForm:FormGroup;
  headeroptions:any;

  constructor( 
    private _fb:FormBuilder,
    public httpClient:HttpClient,
    public global:Global,
    public _dialogRef:MatDialogRef<UserAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    ){
    this.userForm= this._fb.group({
      firstname:'',
      lastname:'',
      email:'',
      dob:'',
      gender:''
    })
  }

  ngOnInit(): void {
    this.userForm.patchValue(this.data);
  }
  onFormSubmit(){
    if(this.userForm.valid){
      this.headeroptions={header:this.global.header}
      console.log(this.userForm.value);
      let formvalues=this.userForm.value;
      if(this.data){
        let updatedata={
          "firstname":formvalues.firstname,
          "lastname":formvalues.lastname,
          "email":formvalues.email,
          "dob":formvalues.dob,
          "gender":formvalues.gender,
        }
        console.log(this.data.id);
        this.httpClient.put(this.global.url+`users/${this.data.id}`,updatedata,this.headeroptions).pipe().subscribe((response:any)=>{
          if(response.statusCode==200){
            this._dialogRef.close(true);
            
          }
        })
      }
      else{
        
        let data={
          "firstname":formvalues.firstname,
          "lastname":formvalues.lastname,
          "email":formvalues.email,
          "dob":formvalues.dob,
          "gender":formvalues.gender,
          "org_id":localStorage.getItem('org_id')
        }
        this.httpClient.post(this.global.url+'users',data,this.headeroptions).pipe().subscribe((data:any)=>{
          console.log(data);
          if(data.statusCode==201){
            this._dialogRef.close(true);
            
          }
        })
      }

    }
  }
}

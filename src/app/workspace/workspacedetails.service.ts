import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkspacedetailsService {

  constructor() { }

  details:any=[{name:'ram',age:35},{name:'raj',age:36},]
  getDetails(){
    return this.details;
  }
  getOneDetail(index:number){
    return this.details[index];
  }
}


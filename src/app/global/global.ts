import { HttpHeaders } from "@angular/common/http";
export class Global{
url!:string;
header:any;
jwt!:string;
constructor(){
    this.url='http://localhost:3000/'
}
headers() {
    if(this.jwt && this.jwt != 'null'){
      return this.header = new HttpHeaders({
          'Content-Type': 'application/json',
          'X-Token': '',
          'x-token': '',
          'Authorization':'Bearer ' +this.jwt
      });
  }
  else{
    return this.header = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Token': '',
      'x-token': '',
  });
  }
}
}
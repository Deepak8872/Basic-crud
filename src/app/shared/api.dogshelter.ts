import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import {map} from 'rxjs/operators'

@Injectable({
  providedIn :'root'
})
export class api{


  constructor(public http:HttpClient,
              ){

  }
postdog(data: any){
 return  this.http.post<any>("http://localhost:3000/Records",data)
  .pipe(map((res:any)=>{
    return res;
  }))
}

getdog(){
 return this.http.get<any>("http://localhost:3000/Records")
  .pipe(map((res:any)=>{
    return res;
  }))
}
updatedog(data:any , id:number){
 return this.http.put<any>("http://localhost:3000/Records/"+id,data)
  .pipe(map((res:any)=>{
   return res;
  }))
}
deletedog(id : number){
return  this.http.delete<any>("http://localhost:3000/Records/"+id)
  .pipe(map((res:any)=>{
    return res;
  }))
}

}

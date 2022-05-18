import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
   name:'myp'
})

export class mypipes implements PipeTransform{

  transform(value: number, ...args: any[]) {
  return value*0.6
  }

  


}

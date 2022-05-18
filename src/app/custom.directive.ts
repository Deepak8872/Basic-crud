import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective implements OnInit {

  constructor(public ef:ElementRef) {


   }
   ngOnInit(): void {
       this.ef.nativeElement.value="3";
   }

 @HostListener('keyup') onkeyup(){
   if(this.ef.nativeElement.value <0 || this.ef.nativeElement.value >5){
     this.ef.nativeElement.style.backgroundColor="red"
   }else{
     this.ef.nativeElement.style.backgroundColor="blue"
   }
 }

}

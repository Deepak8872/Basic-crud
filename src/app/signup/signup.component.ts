import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms'
import { signupmodel } from './signup.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupform ! : FormGroup
  signupmodelobj : signupmodel=new signupmodel();

  constructor(public router :Router,
              public fb: FormBuilder,
              public http : HttpClient) { }



  ngOnInit(): void {
    this.signupform=this.fb.group({
   username:['',Validators.required],
   lastname:['',Validators.required],
   phonenumber:['',Validators.required],
   password:['',Validators.required]
    })
  }
  Signup(){
  this.http.post<any>("  http://localhost:3000/Signup",this.signupform.value)
  .subscribe(res=>this.success(res),res=>this.Error(res))

  }
  success(res : any){
  alert("Signup Successfull");
  this.router.navigateByUrl("/login")
  }
 Error(res : any){
 alert("something went wrong")
 }
}

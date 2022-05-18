import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform !: FormGroup

  constructor(private rout :Router,
              public fb: FormBuilder,
              public http:HttpClient) { }

  ngOnInit(): void {
    this.loginform=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }

  Login(){
    this.http.get<any>("http://localhost:3000/Signup")
    .subscribe((res)=>{
      const user = res.find((a:any)=>{
        return a.username === this.loginform.value.username && this.loginform.value.password
      });
      if(user){
        alert("login successful")
        this.loginform.reset();
        this.rout.navigateByUrl("/dogshelter")
      }else{
        alert("username mismatch go 1st signin please")
      }
    })



  }


}

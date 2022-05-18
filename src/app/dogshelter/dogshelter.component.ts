import { api } from './../shared/api.dogshelter';
import { Dogshelter } from './dogshelter.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http'
import { PipeTransform  } from '@angular/core';
import { ServicesService } from '../services.service';


@Component({
  selector: 'app-dogshelter',
  templateUrl: './dogshelter.component.html',
  styleUrls: ['./dogshelter.component.css']
})
export class DogshelterComponent implements OnInit {

  dogshelterobj:Dogshelter =new Dogshelter();
  dogsheltercollection: any
  myform!:FormGroup

  constructor(public fb:FormBuilder ,
            public http:HttpClient ,
            public myapi: api,
            public ss:ServicesService
             ) {

              }

  ngOnInit(): void {
   this.getcollection();

    this.myform=this.fb.group({
      id:['',Validators.required],
      name:['',Validators.required],
      bread :['',Validators.required],
      quality :['',Validators.required],
      gender:['',Validators.required]
    })
  }

  value='10'

add(){
  this.dogshelterobj.name=this.myform.value.name;
  this.dogshelterobj.bread=this.myform.value.bread;
  this.dogshelterobj.quality=this.myform.value.quality;
  this.dogshelterobj.gender=this.myform.value.gender;

  this.myapi.postdog(this.dogshelterobj).subscribe((res: any)=>{
    console.log(res);
    alert("success");
    this.getcollection();
    this.myform.reset();
  })
}

getcollection(){
  this.myapi.getdog()
  .subscribe((res)=>{

    this.dogsheltercollection=res;
  })

}

deletedog(coll:any){
  this.myapi.deletedog(coll.id).subscribe
  (res=>{
    alert("sure u want to delete ")
    this.getcollection();
  })
}

editdog(coll:any){
  this.dogshelterobj.id= coll.id
this.myform.controls['name'].setValue(coll.name);
this.myform.controls['bread'].setValue(coll.bread);
this.myform.controls['quality'].setValue(coll.quality);
this.myform.controls['gender'].setValue(coll.gender);

}

update(){
  this.dogshelterobj.name=this.myform.value.name;
  this.dogshelterobj.bread=this.myform.value.bread;
  this.dogshelterobj.quality=this.myform.value.quality;
  this.dogshelterobj.gender=this.myform.value.gender;
  this.myapi.updatedog(this.dogshelterobj,this.dogshelterobj.id)
  .subscribe(res=>{
    alert("updated")
    this.getcollection();
    this.myform.reset();
  })

}


}



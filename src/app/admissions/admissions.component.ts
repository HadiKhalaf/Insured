import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpServiceService } from '../service/http-service.service';
import { Root2 } from '../classes/hospital';
import { Phys2 } from '../classes/physicians';
import { statuses2 } from '../classes/statuses';
import { mem2 } from '../classes/member';
import { adm2 } from '../classes/admissions';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admissions',
  templateUrl: './admissions.component.html',
  styleUrls: ['./admissions.component.css']
})
export class AdmissionsComponent implements OnInit{
  constructor(private httpService:HttpServiceService, private http:HttpClient){}
  @ViewChild('Form') f!:NgForm;
  hosp:Root2[];
  phys:Phys2[];
  stat:statuses2[];
  me:mem2[];
  ad:adm2;
  ngOnInit(): void {
  
    this.httpService.getHospital().subscribe((val)=>{
      this.hosp=val
    })
    this.httpService.getPhysicians().subscribe((s)=>{
      this.phys=s
    })
    this.httpService.getStatuses().subscribe((sp)=>{
      this.stat=sp
    })
    this.httpService.getMembers().subscribe((mm)=>{
      this.me=mm
    })
    
  }
  c(){
    this.httpService.getMember(this.f.form.value.cNumber).subscribe((val)=>{
      this.f.form.patchValue({
        iName:val[0].name,
        dob:val[0].dob,
        gen:val[0].gender
      })
    })
    
  }
  
  OnSubmit(){
    
   /*  console.log(this.f.form.value.cNumber)
    console.log(this.f.form.value.eCost);
    console.log(this.f.form.value.aDate);
    console.log(this.f.form.value.mCase);
    console.log(this.f.form.value.hos);
    console.log(this.f.form.value.phys);
    console.log(this.f.form.value.st);
   console.log(this.f.form.value.rem); */
   this.ad = {
    cardNumber : this.f.form.value.cNumber, 
    admissionDt : this.f.form.value.aDate,
    medicalCase : this.f.form.value.mCase,
    estimatedCost:this.f.form.value.eCost,
    remarks:this.f.form.value.rem,
    hospital:this.f.form.value.hos,
    physician:this.f.form.value.phys,
    adm_status:this.f.form.value.st,
    userr_id:this.httpService.uid
  }
      this.httpService.postAdmission(this.ad).subscribe((res)=>{
        alert("insert successfully")
      })
   /*  this.http.post('http://localhost:3000/saveAdmissions',this.ad).subscribe((res)=>{
      alert("insert successfully")
    }); */
    this.f.reset();
  
  //this.ad.push(object)
    console.log(this.ad)
   // console.log(this.ad) 

  }

}

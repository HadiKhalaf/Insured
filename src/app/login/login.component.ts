import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { us2 } from '../classes/user';
import { HttpServiceService } from '../service/http-service.service';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('Form') f!:NgForm;
  constructor(private httpService:HttpServiceService, private rout:Router, private authservice:AuthService){}

  count:number=0
  j:number
  z:number=0
  OnSubmit(){
    this.httpService.getUser().subscribe((val)=>{
      for(let i=0;i<val.length;i++){
        this.authservice.login();
        this.j=i
        if(this.f.value.user==val[i].username && this.f.value.pass==val[i].passwordHash){
          this.count=1
          break;
        }
      }
      if(this.count==1){
        this.httpService.uid=val[this.j].id
        this.httpService.l=2
        this.z=2
       
        this.rout.navigateByUrl('login/admissions')
      }else{
        this.httpService.l=1;
        this.z=1
      }
    })
    this.count=0
  }
  

}

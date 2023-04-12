import { Component, DoCheck, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { HttpServiceService } from '../service/http-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,DoCheck{
  constructor(private authservice:AuthService, private rout:Router, private httpService:HttpServiceService){}
  num:number;
  ngOnInit(): void {
    this.num=this.httpService.l
  }
  ngDoCheck(){
    this.num=this.httpService.l
  }
  logOut(){
    this.authservice.logout();
    this.rout.navigateByUrl('login')
    this.httpService.l=0
  }
}

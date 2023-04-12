import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Root, Root2 } from '../classes/hospital';
import { OnInit } from '@angular/core';
import { Phys2 } from '../classes/physicians';
import { statuses2 } from '../classes/statuses';
import { mem2 } from '../classes/member';
import { adm2 } from '../classes/admissions';
import { us2 } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService{

  constructor(private http:HttpClient) { }
  uid:number=2;
  l:number=0;
  getHospital():Observable<Root2[]>{
    return this.http.get<Root2[]>('http://localhost:3000/Hospitals');
  }

  getPhysicians():Observable<Phys2[]>{
    return this.http.get<Phys2[]>('http://localhost:3000/Physicians');
  }

  getStatuses():Observable<statuses2[]>{
    return this.http.get<statuses2[]>('http://localhost:3000/Statuses');
  }
  getMembers():Observable<mem2[]>{
    return this.http.get<mem2[]>('http://localhost:3000/Members/allMember');
  }
  getMember(i:String):Observable<mem2>{
    return this.http.get<mem2>('http://localhost:3000/Members/findByCard?cardNumber='+i);
  }
  getAdmission():Observable<adm2[]>{
    return this.http.get<adm2[]>('http://localhost:3000/allAdmissions');
  }
  postAdmission(a:adm2):Observable<adm2[]>{
    return this.http.post<adm2[]>('http://localhost:3000/saveAdmissions',a);
  }
  getUser():Observable<us2[]>{
    return this.http.get<us2[]>('http://localhost:3000/allUsers');
  }

}

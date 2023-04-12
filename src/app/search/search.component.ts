import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../service/http-service.service';
import { adm2 } from '../classes/admissions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  constructor(private http:HttpServiceService){}
  a:adm2[]
  va:String=""

  ngOnInit(): void {
    this.http.getAdmission().subscribe((val)=>{
      console.log(val)
      this.a=val
    })
  }

}

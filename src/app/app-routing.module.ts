import { RouterModule, Routes } from "@angular/router";
import { AdmissionsComponent } from "./admissions/admissions.component";
import { SearchComponent } from "./search/search.component";
import { NgModule } from "@angular/core";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { LoginComponent } from "./login/login.component";
import { ProductGuardService } from "./service/productGuardService";

const appRoute:Routes=[
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'login', component:LoginComponent},

    {path:'login', canActivateChild:[ProductGuardService], children:[
      {path:'admissions', component:AdmissionsComponent},
      {path:'search', component:SearchComponent}
     ]},
    {path:'**', component:PagenotfoundComponent}
  ]
  
  @NgModule({
    imports:[
        RouterModule.forRoot(appRoute)
    ],exports:[
        RouterModule
    ]
  })
export class AppRouting{

}
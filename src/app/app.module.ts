import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { SearchComponent } from './search/search.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppRouting } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { HttpServiceService } from './service/http-service.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthService } from './service/auth.service';
import { ProductGuardService } from './service/productGuardService';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdmissionsComponent,
    SearchComponent,
    PagenotfoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpServiceService, AuthService,ProductGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing}  from './app.routing';
import {HttpModule} from '@angular/http';
 import { FormsModule }   from '@angular/forms'; 
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {ModalModule} from "ng2-modal";
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './components/app.component';
import { HomeComponent } from './components/home.component';
import { AboutComponent } from './components/about.component';
import { EmployeeComponent } from './components/employee.component';
import { LoginComponent } from './components/login.component';

import {MyHttpService} from "./services/service";
import {DataService} from "./services/data.service";
import {AuthGuardService} from "./services/auth.service";

import {FilterPipe} from "./filter/search";


// import { TeachersModule } from './teachers/teachers.module';


// alert(Ng2SearchPipeModule);

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule , routing, ModalModule, Ng2SearchPipeModule],
  declarations: [ AppComponent, AboutComponent, HomeComponent,EmployeeComponent,LoginComponent,FilterPipe],
  bootstrap:    [ AppComponent ],
  providers:    [MyHttpService, DataService, AuthGuardService]
})
export class AppModule {}
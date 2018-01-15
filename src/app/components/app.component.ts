import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  
      <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" >WebSiteName</a>
        </div>

        <ul class="nav navbar-nav">
          <li [ngClass]=" avtiveLink=='home' ? 'active' : '' "><a  [routerLink]="'home'" (click)="avtiveLink='home'" >Home</a></li>
           <li [ngClass]=" avtiveLink=='employee' ? 'active' : '' "><a href="javascript:void(0);" [routerLink]="'employee'" (click)="avtiveLink='employee'" >Employees</a></li>
          <li [ngClass]=" avtiveLink=='about' ? 'active' : '' "><a href="javascript:void(0);" [routerLink]="'/about'" (click)="avtiveLink='about'" >About</a></li>
          <li  [ngClass]=" avtiveLink=='contact' ? 'active' : '' "><a href="javascript:void(0);" [routerLink]="''" (click)="avtiveLink='contact'">Contact</a></li>
          
        </ul>
      </div>
    </nav>

   <div class="container" style="margin-top : 100px">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent { 
  avtiveLink='home';


}

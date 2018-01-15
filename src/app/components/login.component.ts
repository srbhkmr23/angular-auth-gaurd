import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import {Router} from '@angular/router';

@Component({
  template: `This is Login page
  	<br>
  	User is login =  {{this.dataService.isLogin}}
      <br>
    Click to make login : 
  	<button type="button" (click)="makeLogin()"> Login </button>	`
})
export class LoginComponent { 

	constructor(private dataService: DataService,private router: Router) {
	}

    makeLogin(){
		this.dataService.isLogin = true;
	}
}
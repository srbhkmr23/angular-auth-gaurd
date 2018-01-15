import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import {Router} from '@angular/router';

@Component({
  template: `This is About page
  	<br>
  	New service data =  {{this.serviceData.n}}
  	<br>
  	<button type="button" (click)="goHomePage()"> Route to home page </button>	`
})
export class AboutComponent { 

	constructor(private serviceData: DataService,private router: Router) {
	}

    goHomePage(){
		this.router.navigateByUrl("home");
	}
}
import { Component,OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import {Router} from '@angular/router';

@Component({
  template: `This is Home page 
  	<br>
  	Old service data =  {{data}}
  	<br>
   <button type="button" (click)="changeServiceData()"> Change service data </button>
 
   <button type="button" (click)="goAboutPage()"> Route to about page </button>
   
  <br>
  <p>{{message}}</p>
	
  `
})
export class HomeComponent implements OnInit{ 

	
	data:any;
	message:any;
	constructor(private serviceData: DataService,private router: Router) {
		
    }

	ngOnInit() {

			// console.log("serviceData",this.serviceData);
			this.data=this.serviceData.n;
	}

	changeServiceData(){
		this.data=this.serviceData.n=15
		this.message="Service Data changed";
	}


	goAboutPage(){
		this.router.navigateByUrl("/about");
	}


}

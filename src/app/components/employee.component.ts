import { Component , OnInit, Pipe, PipeTransform} from '@angular/core';
// import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'; 
import { Injectable }     from '@angular/core';
// console.log(Http)
import { MyHttpService } from '../services/service';

// @Pipe({
//     name: 'filter'
// })


@Component({
  template: `	
	<div class="container">
	  <div>
		  <table id="searchTab" style="margin-bottom: 10px;">
		        <tr>
		            <td style="margin-right: 10px;" align="right">Search : </td>
		            <td style="margin-right: 10px;"><input type="text"  [(ngModel)]="searchValue"/> <span>{{term}}</span></td>
		            <td style="margin-right: 10px;" align="right">Search By : </td>
		            <td style="margin-right: 10px;">
		                <select  [(ngModel)]="searchBy" >
		                    <option value="" >All</option>
		                    <option value="EmpId">ID</option>
		                    <option value="FirstName">FirstName</option>
		                    <option value="LastName">LastName</option>
		                    <option value="Address">Address</option>
		                    <option value="Email">Email</option>
		                    <option value="Contact">Contact</option>
		                </select>   
		            </td>
		        </tr>
		    </table>
	    </div>


	  	<table class="table table-striped table-hover table-bordered">
				<thead>
					<tr>
						<th>ID </th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Address</th>
						<th>Email</th>
						<th>Contact</th>
						<th>Edit</th>
						<th>Delete</th>
						<th>View</th>
					</tr>
				</thead>
				<tbody>
					<tr *ngFor="let employee of employees | searchFilter: searchValue : searchBy">
						<td>{{employee.EmpId}}</td>
						<td>{{employee.FirstName}}</td>
						<td>{{employee.LastName}}</td>
						<td>{{employee.Address}}</td>
						<td>{{employee.Email}}</td>
						<td>{{employee.Contact}}</td>
						<td><button style="color: white; background-color: #428bca;
		    border-color: #357ebd; border-radius: 3px;"  (click)="myModal.open()" ><i class="fa fa-pencil" style="font-size:18px"></i></button></td>
						<td><button style="color: white; background-color: #d9534f;
		    border-color: #d43f3a; border-radius: 3px;"><i class="fa fa-trash" style="font-size:18px"></i></button></td>
		    			<td><a href="javascript:void(0)"  >Show</a></td>
					</tr>
				</tbody>
		</table>

		<modal  #myModal title="Modal title"
		        cancelButtonLabel="cancel"
		        submitButtonLabel="submit"
		        modalClass="modal-lg modal-sm any-other-css-class"
		        [hideCloseButton]="true"
		        [closeOnEscape]="true"
		        [closeOnOutsideClick]="false"
		        
		        >
		 
		    <modal-header>
		        Modal header content goes there.
		    </modal-header>
		 
		    <modal-content>
		        Modal body content goes there.
		    </modal-content>
		 
		    <modal-footer>
		        Modal footer content goes there.
		    </modal-footer>
		        
		</modal>

	</div>


  `
})

export class EmployeeComponent implements OnInit { 
	// employees=[1,2,3,4,5];

	testResponse: any;
	employees:any;
	searchBy:any;


	constructor(private myHttp: MyHttpService,private httpreq: Http) {
		this.searchBy="";
    }

	ngOnInit() {

		console.log(this.httpreq);
	    this.myHttp.getApi("https://api.myjson.com/bins/yzy4t").subscribe(
	        data => {
	           this.employees = data;
	        }
	    );


	    let postData={
				"key1":"value1",
				"key2":"value2"
				
			}

		console.log("postData : ",postData);

	    this.myHttp.postApi("http://localhost:8081/data",postData).subscribe(
	        data => {
	           this.employees = data;
	        }
	    );
	
	}



}

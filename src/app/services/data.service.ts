import {Injectable,OnInit } from '@angular/core';
import { MyHttpService } from '../services/service';


    @Injectable()
    export class DataService {
        n:any;
        m:any;
        employees:any;
        isLogin:boolean;

        constructor(private httpService: MyHttpService) {
                this.n=10;
                this.m=20;
                this.isLogin=false;

                this.httpService.getApi("https://api.myjson.com/bins/yzy4t").subscribe(
                data => {
                   this.employees = data;
                   console.log("service employees data : ",this.employees);
                }
            );
        }


    }
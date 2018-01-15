import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';  // we need to import this now

    @Injectable()
    export class MyHttpService {
    constructor(private _http:Http) {}

    getApi(url:string) {
        return this._http.get(url)
            .map(data => {
                data.json();
                console.log("I CAN SEE DATA HERE: ", data.json());
                return data.json();
        });
    }

    postApi(url:string,data:any) {
        return this._http.post(url,data)
            .map(data => {
                data.json();
                console.log("I CAN SEE DATA HERE: ", data.json());
                return data.json();
        });
    }

}
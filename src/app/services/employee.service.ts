import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Employee } from '../interfaces/employee';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EmployeeService {

  constructor(private http: Http) {}
     // private instance variable to hold base url
     private apiBaseUrl = 'http://localhost:8080/api/v1/employees/'; 

    getEmployeeList() {
        return this.http.get(this.apiBaseUrl)
                    .toPromise()
                    .then(res => <Employee[]> res.json().data)
                    .then(data => { return data; });
    }

    addEmployee(body: Object): Observable<Employee[]> {console.log(body);
        let bodyString = JSON.stringify(body); // Stringify payload
         console.log(bodyString);
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        console.log(options);
        return this.http.post(this.apiBaseUrl, bodyString, options) // ...using post request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    } 
  

    updateEmployee() {
        return this.http.get('http://localhost:8080/api/v1/employees/')
                    .toPromise()
                    .then(res => <Employee[]> res.json().data)
                    .then(data => { return data; });
    }

    deleteEmployee() {
        return this.http.get('http://localhost:8080/api/v1/employees/')
                    .toPromise()
                    .then(res => <Employee[]> res.json().data)
                    .then(data => { return data; });
    }  
}

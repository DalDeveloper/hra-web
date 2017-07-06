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

    addEmployee(employee: Employee): Promise <Employee> {console.log(employee);
        let bodyString = JSON.stringify(employee); // Stringify payload
        
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        
        return this.http.post(this.apiBaseUrl, employee, options) // ...using post request
                .toPromise()
                .then(res => <Employee[]> res.json().data)
                .then(data => { return data; });       
    } 
    
    updateEmployee(employee: Employee): Promise <Employee> {console.log(employee);
        let bodyString = JSON.stringify(employee); // Stringify payload
        
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        
        return this.http.put(this.apiBaseUrl, employee, options) // ...using post request
                .toPromise()
                .then(res => <Employee[]> res.json().data)
                .then(data => { return data; });       
    }

    deleteEmployee(employee: Employee): Promise <Employee> {
        return this.http.delete(this.apiBaseUrl + employee.empId)
                    .toPromise()
                    .then(res => <Employee[]> res.json().data)
                    .then(data => { return data; });
    }  
}

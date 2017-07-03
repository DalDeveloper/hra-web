import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Employee } from '../interfaces/employee';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class EmployeeService {

  constructor(private http: Http) {}

    getEmployeeList() {
        return this.http.get('http://localhost:8080/api/v1/employees/')
                    .toPromise()
                    .then(res => <Employee[]> res.json().data)
                    .then(data => { return data; });
    }

}

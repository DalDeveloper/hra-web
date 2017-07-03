import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Employee } from '../../interfaces/employee';
import {EmployeeService} from '../../services/employee.service';
@Component({
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()],
    providers: [EmployeeService]
})
export class TablesComponent implements OnInit {
    loading: boolean;

    employees: Employee[];
    
    cols: any[];
    
    constructor(private EmployeeService: EmployeeService) { }

    ngOnInit() {
        /*this.loading = true;
        setTimeout(() => {
            this.EmployeeService.getEmployeeList().then(employees => this.employees = employees);
            this.loading = false;
        }, 1000);
        */
        this.EmployeeService.getEmployeeList().then(employees => this.employees = employees);
        console.log(this.employees);
        this.cols = [
            {field: 'empId', header: 'empId'},
            {field: 'name', header: 'name'},
            {field: 'surname', header: 'surname'},
            {field: 'gender', header: 'gender'},
            {field: 'dob', header: 'dob'},
            {field: 'doj', header: 'doj'},
            {field: 'age', header: 'age'},
            {field: 'email', header: 'email'}
        ];

        /*  
            empId: String,
            name: String,
            surname: String,
            gender: String,
            dob: String,
            doj: String,
            age: Number,
            email: String,
            mobile: String,
            address: String,
            bgroup: String,
            image: String,
            designation: String,
            exp: Number,
            pan_no: String,
            status: String
        */
    }
}

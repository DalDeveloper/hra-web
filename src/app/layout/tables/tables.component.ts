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
            {field: 'empId', header: 'empId', style: "{'width':'250px'}"},
            {field: 'name', header: 'name', style: "{'width':'250px'}"},
            {field: 'surname', header: 'surname', style: "{'width':'250px'}"},
            {field: 'gender', header: 'gender', style: "{'width':'250px'}"},
            {field: 'dob', header: 'dob', style: "{'width':'250px'}"},
            {field: 'doj', header: 'doj', style: "{'width':'250px'}"},
            {field: 'age', header: 'age', style: "{'width':'250px'}"},
            {field: 'email', header: 'email', style: "{'width':'250px'}"},
            {field: 'mobile', header: 'mobile', style: "{'width':'250px'}"},
            {field: 'address', header: 'address', style: "{'width':'250px'}"},
            {field: 'bgroup', header: 'bgroup', style: "{'width':'250px'}"},
            {field: 'image', header: 'image', style: "{'width':'250px'}"},
            {field: 'designation', header: 'designation', style: "{'width':'250px'}"},
            {field: 'exp', header: 'exp', style: "{'width':'250px'}"},
            {field: 'pan_no', header: 'PAN', style: "{'width':'250px'}"},
            {field: 'status', header: 'status', style: "{'width':'250px'}"}
        ];
    }
}

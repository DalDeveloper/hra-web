import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Employee } from '../../interfaces/employee';
import {EmployeeService} from '../../services/employee.service';
@Component({
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    styles: [`
        .ui-grid-row div {
          padding: 4px 10px
        }
        
        .ui-grid-row div label {
          font-weight: bold;
        }
  `],
    animations: [routerTransition()],
    providers: [EmployeeService]
})
export class TablesComponent implements OnInit {
    displayDialog: boolean;

    employee: Employee = new EmployeeLocal();
    
    selectedEmployee: Employee;
    
    newEmployee: boolean;

    employees: Employee[];

    constructor(private employeeService: EmployeeService) { }

    ngOnInit() {
        this.employeeService.getEmployeeList().then(employees => this.employees = employees);
    }
    
    showDialogToAdd() {
        this.newEmployee = true;
        this.employee = new EmployeeLocal();
        this.displayDialog = true;
    }
    
    save() {
        let employees = [...this.employees];
        if(this.newEmployee)
            employees.push(this.employee);
        else
            employees[this.findSelectedCarIndex()] = this.employee;
        
        this.employees = employees;
        this.employee = null;
        this.displayDialog = false;
    }
    
    delete() {
        let index = this.findSelectedCarIndex();
        this.employees = this.employees.filter((val,i) => i!=index);
        this.employee = null;
        this.displayDialog = false;
    }    
    
    onRowSelect(event) {
        this.newEmployee = false;
        this.employee = this.cloneCar(event.data);
        this.displayDialog = true;
    }
    
    cloneCar(e: Employee): Employee {
        let employee = new EmployeeLocal();
        for(let prop in e) {
            employee[prop] = e[prop];
        }
        return employee;
    }
    
    findSelectedCarIndex(): number {
        return this.employees.indexOf(this.selectedEmployee);
    }
}
    
class EmployeeLocal implements Employee {
    
    constructor(
        public empId?, 
        public name?, 
        public surname?, 
        public gender?,
        public dob?, 
        public doj?, 
        public age?, 
        public email?,
        public mobile?, 
        public address?, 
        public bgroup?, 
        public image?, 
        public designation?, 
        public exp?,
        public pan_no?, 
        public status?
    ) {}
    
}


/*
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
        //this.loading = true;
        //setTimeout(() => {
          //  this.EmployeeService.getEmployeeList().then(employees => this.employees = employees);
           // this.loading = false;
        //}, 1000);
        
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
            {field: 'email', header: 'email'},
            {field: 'mobile', header: 'mobile'},
            {field: 'address', header: 'address'},
            {field: 'bgroup', header: 'bgroup'},
            {field: 'image', header: 'image'},
            {field: 'designation', header: 'designation'},
            {field: 'exp', header: 'exp'},
            {field: 'pan_no', header: 'PAN'},
            {field: 'status', header: 'status'}
        ];
        

        
    }
}

 */
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Employee } from '../../interfaces/employee';
import { EmployeeService } from '../../services/employee.service';
import { DomSanitizer} from '@angular/platform-browser';
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

    employee: Employee = new PrimeEmployee();
    
    selectedEmployee: Employee;
    
    newEmployee: boolean;

    employees: Employee[];

    cols: any[];

    msgs: Message[];
    
    imageUrl: any[];
    
    displayImageBox: boolean;
    
    empDate: Date;
    
    minDateDOB: Date;
    minDateDOJ: Date;
    maxDateDOJ: Date;
    maxDateDOB: Date;
    

    genderOpt: genderOptions[];
    statusOptions: any[];

    constructor(public _DomSanitizer: DomSanitizer, private employeeService: EmployeeService) { }

    ngOnInit() {
        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        
        this.minDateDOB = new Date();
        this.minDateDOB.setFullYear(year - 60);
        
        this.maxDateDOB = new Date();
        this.maxDateDOB.setFullYear(year - 18);


        this.employeeService.getEmployeeList().then(employees => this.employees = employees);

        this.cols = [
            {field: 'empId', header: 'ID'},
            {field: 'name', header: 'Name'},
            {field: 'surname', header: 'Surname'},
            {field: 'gender', header: 'Gender'},
            {field: 'dob', header: 'DOB'},
            {field: 'doj', header: 'DOJ'},
            {field: 'age', header: 'Age'},
            {field: 'email', header: 'Email'},
            {field: 'mobile', header: 'Mobile'},
            {field: 'address', header: 'Address'},
            {field: 'bgroup', header: 'Blood Gr.'},
            {field: 'designation', header: 'Designation'},
            {field: 'exp', header: 'Exp'},
            {field: 'pan_no', header: 'PAN'},
            {field: 'status', header: 'Status'}
        ];

        this.genderOpt = [{label: 'Male', value: 'Male'}, {label: 'Female', value: 'Female'}, {label: 'Others', value: 'Others'}];
        this.statusOptions = [{label: 'Active', value: 'Active'}, {label: 'Inactive', value: 'Inactive'}, {label: 'On Leave', value: 'On Leave'}];
    }
    
    onBasicUpload(event) {
        let employees = [...this.employees];
        this.imageUrl = JSON.parse(event.xhr.response).data.image;
        this.employee.image = this.imageUrl;
        employees[this.findSelectedCarIndex()] = this.employee;
        this.employees = employees;
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});
    }

    onBeforeBasicUpload(event){
      event.formData.append("details",JSON.stringify(this.employee));
      //event.formData.append("empId",this.employee.empId);  
    }

    showDialogToAdd() {
        this.newEmployee = true;
        this.employee = new PrimeEmployee();
        this.displayDialog = true;
        this.displayImageBox = false;
    }
    
    save() {
        let employees = [...this.employees];
        
        if(this.newEmployee){ 
            employees.push(this.employee);
            this.employeeService.addEmployee(this.employee)
            .then((employee) => {
                this.employee.empId = employee.empId;
                this.employee.image = employee.image;   
                employees[this.findSelectedCarIndex()] = this.employee;
                this.employees = employees;
                this.employee = null;
                this.displayDialog = false;
           });
        }
        else{
           this.employeeService.updateEmployee(this.employee)
           .then((employee) => {
              this.employee.empId = employee.empId;   
                employees[this.findSelectedCarIndex()] = this.employee;
                this.employees = employees;
                this.employee = null;
                this.displayDialog = false;
           });
        }
        
        
    }
    
    
    delete() {
        let index = this.findSelectedCarIndex();
        this.employees = this.employees.filter((val,i) => i!=index);
        this.employeeService.deleteEmployee(this.employee);
        this.employee = null;
        this.displayDialog = false;
    }    
    
    onRowSelect(event) {
        this.newEmployee = false;
        this.employee = this.cloneCar(event.data);
        this.displayImageBox = true;
        this.displayDialog = true;
        
    }
    
    cloneCar(e: Employee): Employee {
        let employee = new PrimeEmployee();
        for(let prop in e) {
            employee[prop] = e[prop];
        }
        return employee;
    }
    
    findSelectedCarIndex(): number { 
        return this.employees.indexOf(this.selectedEmployee);
    }

    calculateAge(selectedDate){ 
        console.log(selectedDate);
         let employees = [...this.employees];
         let ageDifMs = Date.now() - selectedDate.getTime();
         let ageDate = new Date(ageDifMs); // miliseconds from epoch 
         let actualDate =  Math.abs(ageDate.getUTCFullYear() - 1970);
         this.employee.age = actualDate || 0;
         

    }
    
}
 

class PrimeEmployee implements Employee {
    
    constructor(public empId?, public name?, public surname?, public gender?, public dob?, public doj?, public age?, public email?, public mobile?, public address?, public bgroup?, public image?, public designation?, public exp?, public pan_no?, public status?) {}
    
}

interface Message{
    severity?;
    summary?;
    detail?;
}

interface genderOptions{
    label: String;
    value: String;
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
//import { FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
  
  email: string;
  password: string;

  constructor(public authData: AuthProvider, public router: Router){
    this.email = 'jyotimoi.ghosh@digitalavenues.com';
    this.password = 'admin123';
  }
   // public signupForm:FormGroup;
    //constructor(public authData: AuthProvider, public formBuilder: FormBuilder) {

    /*this.signupForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });*/

    
  //}
   signupUser(){
   
     this.authData.signupUser(this.email, this.password)
      .then((value) => { console.log(value);
        console.log('success dev');
        this.router.navigate(['/dashboard']);
      }, (error) => {
        console.log('failed');
      })
   }

    ngOnInit() { }
}

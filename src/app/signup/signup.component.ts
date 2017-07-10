import { Component, OnInit } from '@angular/core';
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
  constructor(){}
   // public signupForm:FormGroup;
    //constructor(public authData: AuthProvider, public formBuilder: FormBuilder) {

    /*this.signupForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });*/

    
  //}
   /*signupUser(){
    alert("Hello");
     this.authData.signupUser(this.signupForm.value.email, this.signupForm.value.password)
      .then(() => {
        console.log('success');
      }, (error) => {
        console.log('failed');
      })
   }*/

    ngOnInit() { }
}

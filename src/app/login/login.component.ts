import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    email: string;
    password: string;
    constructor(public authData: AuthProvider, public router: Router) {
       // this.email = 'jyotimoi.ghosh@digitalavenues.com';
        //this.password = 'admin123';
    }

    ngOnInit() {
    }

    onLoggedin() {
    
    this.authData.loginUser(this.email, this.password)
      .then((value) => {
        this.email = this.password = '';
        localStorage.setItem('isLoggedin', 'true');
      }, (error) => {
        console.log('failed');
      })
    }

}

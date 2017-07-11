import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthProvider } from '../../../../providers/auth/auth';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    displayName: any;
    constructor(public authData: AuthProvider, private translate: TranslateService, public router: Router) {
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992) {
                this.toggleSidebar();
            }
        });

        let currentUser = JSON.parse(window.localStorage.getItem('currentUser'));
        this.displayName = currentUser.displayName;
    }

    ngOnInit() {}

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('push-right');
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        this.authData.logoutUser().then(()=>{
             console.log('logged out');
             localStorage.removeItem('currentUser');
        });
       
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}

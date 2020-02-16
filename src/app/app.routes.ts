import {Routes} from '@angular/router';

import {HomeComponent} from '@src/app/home/home.component';
import {LoginComponent} from '@src/app/login/login.component';
import {RegisterComponent} from '@src/app/register/register.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    }
];

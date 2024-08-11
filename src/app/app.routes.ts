import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';

export const routes: Routes = [
    {
        path:"user",
        component:UserComponent
    },
    {
        path:"home",
        component:HomeComponent
    },
    {
        path:"signup",
        component:SignupComponent
    }
];

import { Routes } from '@angular/router';
import { Dashboard1Component } from './dashboard1/dashboard1.component';

export const routes: Routes = [
    {path:'dashboard1', component: Dashboard1Component},
    {path: '', redirectTo: '/dashboard1', pathMatch:'full'}
];




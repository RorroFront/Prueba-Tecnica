import { Routes } from '@angular/router';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { ModalFormComponent } from './modal-form/modal-form.component';

export const routes: Routes = [
    {path:'dashboard1', component: Dashboard1Component},
    {path:'modal-form',component:ModalFormComponent},
    {path: '', redirectTo: '/dashboard1', pathMatch:'full'}
];




import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Events } from './events/events';
import { CounterApp } from './counter-app/counter-app';
import { User } from './login/user/user';
import { Admin } from './login/admin/admin';

export const routes: Routes = [
    {path: '', component:Login, children: [
        {path: 'user', component: User},
        {path: 'admin', component: Admin}
    ]},
    {path: 'events', component: Events},
    {path: 'counterapp', component: CounterApp},

    {path:'', redirectTo: 'Login', pathMatch: 'full'}
];

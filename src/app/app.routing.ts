import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from '../pages/home/home';
import { RegistroPage } from '../pages/registro/registro';



const appRoutes: Routes =[
    {path: '',component: HomePage},
    {path: 'registro',component: RegistroPage},
    {path: '**', component: HomePage},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
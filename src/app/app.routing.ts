import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate  } from '@angular/router';


import { AppComponent } from './components/app.component';
import { HomeComponent } from './components/home.component';
import { AboutComponent } from './components/about.component';
import { EmployeeComponent } from './components/employee.component';
import { LoginComponent } from './components/login.component';

import { AuthGuardService as AuthGuard } from './services/auth.service';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AuthGuard]
  },
    {
    path: 'employee',
    component: EmployeeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

// export const appRoutingProviders: any[] = [
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

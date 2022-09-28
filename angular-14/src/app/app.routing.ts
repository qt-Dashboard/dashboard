import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { UsersFormComponent } from './material-component/users/users-form/users-form.component';
import { UsersComponent } from './material-component/users/users.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      // {
      //   path: '',
      //   loadChildren:
      //     () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      // }
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'users/form',
    component: UsersFormComponent
  },
  {
    path: 'users/form/:id',
    component: UsersFormComponent
  }
];

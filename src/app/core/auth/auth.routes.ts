import { Routes } from '@angular/router';
import { AuthLayout } from '../layout/auth-layout/auth-layout';

export const AUTH_ROUTES = [
  {
    path: '',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./../../features/auth/login/login').then(m => m.Login),
        title: 'Login'
      }
    ]
  }
] as const satisfies Routes;
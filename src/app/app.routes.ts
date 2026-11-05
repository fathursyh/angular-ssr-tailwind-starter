import { Routes } from '@angular/router';
import { PublicLayout } from './core/layout/public-layout/public-layout';
import { Home } from './features/home/home';

import { AUTH_ROUTES } from './core/auth/auth.routes';
import { ExtractRoutes } from './core/utils/route-extractor';

export const routes = [
  {
    path: '',
    component: PublicLayout,
    children: [
      {
        path: '',
        component: Home,
        title: 'Home'
      }
    ]
  },
  ...AUTH_ROUTES,
] as const satisfies Routes;

export type AppRoute = ExtractRoutes<typeof routes>;

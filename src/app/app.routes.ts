import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'product',
        loadChildren: () =>
          import('./products/products.module').then((m) => m.ProductsModule),
      },
      {
        path: 'signals',
        loadChildren: () =>
          import('./signals/signals.module').then((m) => m.SignalsModule),
      },

      {
        path: '**',
        redirectTo: 'product',
      },
    ],
  },
];

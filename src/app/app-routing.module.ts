import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'route-one',
  },
  {
    path: 'route-one',
    loadChildren: () => import('./Features/route-one/route-one.module').then((m) => m.RouteOneModule),
  },
  {
    path: 'route-two',
    loadChildren: () => import('./Features/route-two/route-two.module').then((m) => m.RouteTwoModule),
  },
  {
    path: 'route-three',
    loadChildren: () => import('./Features/route-three/route-three.module').then((m) => m.RouteThreeModule),
  },
  {
    path: 'route-four',
    loadChildren: () => import('./Features/route-four/route-four.module').then((m) => m.RouteFourModule),
  },
  {
    path: 'route-five',
    loadChildren: () => import('./Features/route-five/route-five.module').then((m) => m.RouteFiveModule),
  },
  {
    path: 'route-six',
    loadChildren: () => import('./Features/route-six/route-six.module').then((m) => m.RouteSixModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

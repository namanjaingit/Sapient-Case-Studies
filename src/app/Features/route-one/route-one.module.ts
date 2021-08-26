import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteOneComponent } from './route-one.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
  {
    path: '',
    component: RouteOneComponent,
  },
];

@NgModule({
  declarations: [RouteOneComponent],
  imports: [CommonModule, RouterModule.forChild(route)],
})
export class RouteOneModule {}

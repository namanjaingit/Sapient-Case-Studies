import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteTwoComponent } from './route-two.component';
import { RouterModule, Routes } from '@angular/router';
import { RouteTwoService } from './route-two.service';
import { HttpClientModule } from '@angular/common/http';
import { GridViewComponent } from './grid-view/grid-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { ProductFormComponent } from './product-forn/product-form.component';

const routes: Routes = [
  {
    path: '',
    component: RouteTwoComponent,
  },
];

@NgModule({
  declarations: [RouteTwoComponent, GridViewComponent, ListViewComponent, ProductFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), HttpClientModule],
  providers: [RouteTwoService],
})
export class RouteTwoModule {}

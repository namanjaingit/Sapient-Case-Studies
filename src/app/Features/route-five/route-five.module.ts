import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteFiveComponent } from './route-five.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RouteFiveService } from './route-five.service';
import { SortDirective } from './directive/sort.directive';
import { StudentTableComponent } from './student-table/student-table.component';

const routes: Routes = [
  {
    path: '',
    component: RouteFiveComponent,
  },
];

@NgModule({
  declarations: [RouteFiveComponent, SortDirective, StudentTableComponent],
  imports: [CommonModule, RouterModule.forChild(routes), HttpClientModule],
  providers: [RouteFiveService],
})
export class RouteFiveModule {}

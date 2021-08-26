import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteThreeComponent } from './route-three.component';
import { RouterModule, Routes } from '@angular/router';
import { DisplayCountdownComponent } from './display-countdown/display-countdown.component';
import { TimerControlComponent } from './timer-control/timer-control.component';
import { TimestampLoggerComponent } from './timestamp-logger/timestamp-logger.component';
import { ClickCounterComponent } from './click-counter/click-counter.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: RouteThreeComponent,
  },
];

@NgModule({
  declarations: [
    RouteThreeComponent,
    DisplayCountdownComponent,
    TimerControlComponent,
    TimestampLoggerComponent,
    ClickCounterComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
})
export class RouteThreeModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteFourComponent } from './route-four.component';
import { RouterModule, Routes } from '@angular/router';
import { RouteFourService } from './route-four.service';

import { ReactiveFormsModule } from '@angular/forms';
import { DisplayCountdownComponent } from './display-countdown/display-countdown.component';
import { TimerControlComponent } from './timer-control/timer-control.component';
import { TimestampLoggerComponent } from './timestamp-logger/timestamp-logger.component';
import { ClickCounterComponent } from './click-counter/click-counter.component';

const routes: Routes = [
  {
    path: '',
    component: RouteFourComponent,
  },
];

@NgModule({
  declarations: [
    RouteFourComponent,
    DisplayCountdownComponent,
    TimerControlComponent,
    TimestampLoggerComponent,
    ClickCounterComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
  providers: [RouteFourService],
})
export class RouteFourModule {}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class RouteFourService {
  $timer = new Subject();
  timerObserve = this.$timer.asObservable();

  $pausedTimeState = new Subject();
  pausedStateObserve = this.$pausedTimeState.asObservable();

  public countdownHandler(timerValue: { state: string; value: number; dateTime: string; clickCount?: any }) {
    this.$timer.next(timerValue);
  }

  public setPausedCount(pauseTimerState) {
    this.$pausedTimeState.next(pauseTimerState);
  }
}

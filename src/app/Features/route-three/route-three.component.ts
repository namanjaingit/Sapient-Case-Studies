import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-three',
  templateUrl: './route-three.component.html',
  styleUrls: ['./route-three.component.css'],
})
export class RouteThreeComponent implements OnInit {
  public timerCount: number = 0;
  public countTracker: { start: number; pause: number } = {
    start: 0,
    pause: 0,
  };
  public intervalPauseTimeArr = [];
  public timeTracker: { dateTime: any; state: string }[] = [];

  private countInterval;

  constructor() {}

  ngOnInit(): void {}

  public onTimeStartStop(event) {
    switch (event.state) {
      case 'started':
        this.onStartCounter(event);
        break;
      case 'paused':
        this.onPauseCounter();
        break;
      case 'reset':
        this.onResetCounter();
        break;
      default:
        null;
    }
  }

  private onStartCounter(event) {
    this.timeTracker.push({
      dateTime: this.fetchStateChangeTime(),
      state: 'Started',
    });
    this.timerCount = event.count;
    this.countTracker.start++;
    this.countInterval = setInterval(() => {
      this.timerCount > 0 ? this.timerCount-- : clearInterval(this.countInterval);
    }, 1000);
  }

  private onPauseCounter() {
    this.timeTracker.push({
      dateTime: this.fetchStateChangeTime(),
      state: 'Paused',
    });
    this.countTracker.pause++;
    this.intervalPauseTimeArr.push(this.timerCount);
    clearInterval(this.countInterval);
  }

  private onResetCounter() {
    this.timeTracker.push({
      dateTime: this.fetchStateChangeTime(),
      state: 'Reset',
    });
    this.timerCount = 0;
    this.intervalPauseTimeArr = [];
    clearInterval(this.countInterval);
  }

  private fetchStateChangeTime() {
    let currentDateTime = new Date();
    let dateArr = currentDateTime.toLocaleDateString().split('/');
    let formatedDate = `${dateArr[1]}-${dateArr[0]}-${dateArr[2]} ${currentDateTime.toLocaleTimeString()}`;
    return formatedDate;
  }
}

import { Component, OnInit } from '@angular/core';
import { RouteFourService } from '../route-four.service';

@Component({
  selector: 'app-display-countdown',
  templateUrl: './display-countdown.component.html',
  styleUrls: ['./display-countdown.component.css'],
})
export class DisplayCountdownComponent implements OnInit {
  public timerState: { state: string; value: number; dateTime?: string } = {
    state: 'reset',
    value: 0,
  };
  private countInterval;
  constructor(private routeFourService: RouteFourService) {}

  ngOnInit(): void {
    this.fetchCountDownTimer();
  }

  public fetchCountDownTimer() {
    this.routeFourService.timerObserve.subscribe((data: { state: string; value: number; dateTime: string }) => {
      if (data.state === 'started') {
        this.timerState = data;
        this.countInterval = setInterval(() => {
          this.timerState.value--;
          if (this.timerState.value === 0) {
            clearInterval(this.countInterval);
          }
        }, 1000);
      } else if (data.state === 'paused') {
        this.timerState.state = data.state;
        clearInterval(this.countInterval);
        this.routeFourService.setPausedCount(this.timerState);
      } else {
        this.timerState = data;
        clearInterval(this.countInterval);
      }
    });
  }
}

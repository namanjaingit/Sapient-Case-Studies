import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorDef } from 'src/app/models/error.interface';
import { Errors } from 'src/app/models/message';
import { RouteFourService } from '../route-four.service';

@Component({
  selector: 'app-timer-control',
  templateUrl: './timer-control.component.html',
  styleUrls: ['./timer-control.component.css'],
})
export class TimerControlComponent implements OnInit {
  public timerForm: FormGroup;
  public errorState: ErrorDef;
  public isStarted: boolean = false;
  public countPausedArr = [];
  public clickCount = {
    start: 0,
    pause: 0,
  };
  constructor(private formBuilder: FormBuilder, private routeFourService: RouteFourService) {}

  ngOnInit(): void {
    this.timerForm = this.formBuilder.group({
      timerControl: new FormControl('', [Validators.required, Validators.min(1), Validators.pattern(/^[0-9]*$/)]),
    });

    this.fetchPausedTimerCount();
  }

  public onStartOrPause() {
    if (this.getTimerFieldState()) {
      this.isStarted = !this.isStarted;
    }
    if (this.timerForm.valid) {
      this.setError(false, null);
      switch (this.isStarted) {
        case true:
          this.routeFourService.countdownHandler({
            state: 'started',
            value: Number(this.timerForm.controls['timerControl'].value),
            dateTime: this.fetchStateChangeTime(),
            clickCount: {
              start: ++this.clickCount.start,
              pause: this.clickCount.pause,
            },
          });
          break;
        case false:
          this.routeFourService.countdownHandler({
            state: 'paused',
            value: null,
            dateTime: this.fetchStateChangeTime(),
            clickCount: {
              start: this.clickCount.start,
              pause: ++this.clickCount.pause,
            },
          });
      }
    } else {
      this.setError(true, this.timerForm.controls['timerControl'].errors);
    }
  }

  public resetCountDown() {
    this.timerForm.controls['timerControl'].setValue(null);
    this.errorState = {
      isError: 'none',
      errorType: 0,
      errorMsg: '',
    };
    this.countPausedArr = [];
    this.isStarted = false;
    this.routeFourService.countdownHandler({
      state: 'reset',
      value: 0,
      dateTime: this.fetchStateChangeTime(),
    });
  }

  public getTimerFieldState() {
    return (
      this.timerForm.get('timerControl').touched &&
      this.timerForm.get('timerControl').dirty &&
      this.timerForm.get('timerControl').valid
    );
  }

  private fetchStateChangeTime(): string {
    let currentDateTime = new Date();
    let dateArr = currentDateTime.toLocaleDateString().split('/');
    let formatedDate = `${dateArr[1]}-${dateArr[0]}-${dateArr[2]} ${currentDateTime.toLocaleTimeString()}`;
    return formatedDate;
  }

  private setError(isError, error) {
    if (isError) {
      let errorMsg = '';
      if (error.hasOwnProperty('required') && error.required) {
        errorMsg = `Timer ${Errors.required}`;
      }
      if (error.hasOwnProperty('pattern') && error.pattern) {
        errorMsg = Errors.numPattern;
      }
      if (error.hasOwnProperty('min') && error.min) {
        errorMsg = Errors.minNum;
      }
      this.errorState = {
        isError: 'block',
        errorType: error,
        errorMsg: errorMsg,
      };
    } else {
      this.errorState = {
        isError: 'none',
        errorType: error,
        errorMsg: '',
      };
    }
  }

  private fetchPausedTimerCount() {
    this.routeFourService.pausedStateObserve.subscribe((data) => {
      this.countPausedArr.push(data);
    });
  }
}

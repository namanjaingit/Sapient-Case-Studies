import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorDef } from 'src/app/models/error.interface';
import { Errors } from 'src/app/models/message';

@Component({
  selector: 'app-timer-control',
  templateUrl: './timer-control.component.html',
  styleUrls: ['./timer-control.component.css'],
})
export class TimerControlComponent implements OnInit {
  public timerForm: FormGroup;
  public errorState: ErrorDef;
  public isStarted: boolean = false;
  @Input('stopCountInterval') countPausedArr = [];
  @Output('timerValue') $timerVal = new EventEmitter<{ state: string; count: number }>();
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.timerForm = this.formBuilder.group({
      timerControl: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
    });
  }

  public onStartOrPause() {
    if (this.getTimerFieldState()) {
      this.isStarted = !this.isStarted;
    }
    if (this.timerForm.valid) {
      this.$timerVal.emit({
        state: this.isStarted ? 'started' : 'paused',
        count: this.isStarted ? this.timerForm.controls['timerControl'].value : null,
      });
      this.setError(false, null);
    } else {
      this.setError(true, this.timerForm.controls['timerControl'].errors);
    }
  }

  public resetCountDown() {
    this.timerForm.controls['timerControl'].setValue(null);
    this.errorState = {
      isError: 'none',
      errorType: null,
      errorMsg: '',
    };
    this.isStarted = false;
    this.$timerVal.emit({
      state: 'reset',
      count: null,
    });
  }

  public getTimerFieldState() {
    return (
      this.timerForm.get('timerControl').touched &&
      this.timerForm.get('timerControl').dirty &&
      this.timerForm.get('timerControl').valid
    );
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
}

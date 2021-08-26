import { Component, OnInit } from '@angular/core';
import { RouteFourService } from '../route-four.service';

@Component({
  selector: 'app-timestamp-logger',
  templateUrl: './timestamp-logger.component.html',
  styleUrls: ['./timestamp-logger.component.css'],
})
export class TimestampLoggerComponent implements OnInit {
  public trackedTime: { state: string; value: number; dateTime: string }[] = [];

  constructor(private routeFourService: RouteFourService) {}

  ngOnInit(): void {
    this.routeFourService.timerObserve.subscribe((data: { state: string; value: number; dateTime: string }) => {
      this.trackedTime.push({ ...data });
    });
  }
}

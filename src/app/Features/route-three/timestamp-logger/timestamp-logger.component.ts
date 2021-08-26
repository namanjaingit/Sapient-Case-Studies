import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timestamp-logger',
  templateUrl: './timestamp-logger.component.html',
  styleUrls: ['./timestamp-logger.component.css'],
})
export class TimestampLoggerComponent implements OnInit {
  @Input('logDate') trackedTime: { dateTime: any; state: string }[] = [];
  constructor() {}

  ngOnInit(): void {}
}

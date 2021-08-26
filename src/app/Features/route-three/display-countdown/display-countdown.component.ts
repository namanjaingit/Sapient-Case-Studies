import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-countdown',
  templateUrl: './display-countdown.component.html',
  styleUrls: ['./display-countdown.component.css'],
})
export class DisplayCountdownComponent implements OnInit {
  @Input('countdown') timer: number;

  constructor() {}

  ngOnInit(): void {}
}

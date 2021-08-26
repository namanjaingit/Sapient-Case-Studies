import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-counter',
  templateUrl: './click-counter.component.html',
  styleUrls: ['./click-counter.component.css'],
})
export class ClickCounterComponent implements OnInit {
  @Input('clickCounter') clicked: { start: number; pause: number };
  constructor() {}

  ngOnInit(): void {}
}

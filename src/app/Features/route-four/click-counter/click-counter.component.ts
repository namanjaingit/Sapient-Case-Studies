import { Component, OnInit } from '@angular/core';
import { RouteFourService } from '../route-four.service';

@Component({
  selector: 'app-click-counter',
  templateUrl: './click-counter.component.html',
  styleUrls: ['./click-counter.component.css'],
})
export class ClickCounterComponent implements OnInit {
  clicked: { start: number; pause: number } = { start: 0, pause: 0 };
  constructor(private routeFourService: RouteFourService) {}

  ngOnInit(): void {
    this.routeFourService.timerObserve.subscribe(
      (data: { state: string; value: number; dateTime: string; clickCount: { start: number; pause: number } }) => {
        this.clicked = data.clickCount;
      }
    );
  }
}

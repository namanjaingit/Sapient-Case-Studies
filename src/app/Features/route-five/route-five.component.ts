import { Component, OnInit } from '@angular/core';
import { RouteFiveService } from './route-five.service';

@Component({
  selector: 'app-route-five',
  templateUrl: './route-five.component.html',
  styleUrls: ['./route-five.component.css'],
})
export class RouteFiveComponent implements OnInit {
  constructor(private routeFiveService: RouteFiveService) {}
  tableData = [];
  ngOnInit(): void {
    this.getStudent();
    this.routeFiveService.resetObserver.subscribe((data) => {
      this.getStudent();
    });
  }

  public getStudent() {
    this.routeFiveService.fetchStudentData().subscribe((data: Array<any>) => {
      if (data.length) {
        this.tableData = data;
      }
    });
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Students } from 'src/app/models/studnet.interface';
import { RouteFiveService } from '../route-five.service';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css'],
})
export class StudentTableComponent {
  @Input() tableData: Students[] = [];

  constructor(private routeFiveService: RouteFiveService) {}

  public colReset() {
    this.routeFiveService.resetColumn();
  }
}

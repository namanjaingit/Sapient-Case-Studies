import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class RouteFiveService {
  private resetColumnData = new Subject();
  public resetObserver = this.resetColumnData.asObservable();

  constructor(private http: HttpClient) {}

  public fetchStudentData() {
    return this.http.get('./assets/student.json');
  }

  public resetColumn() {
    this.resetColumnData.next(true);
  }
}

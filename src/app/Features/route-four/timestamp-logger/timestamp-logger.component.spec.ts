import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimestampLoggerComponent } from './timestamp-logger.component';

describe('TimestampLoggerComponent', () => {
  let component: TimestampLoggerComponent;
  let fixture: ComponentFixture<TimestampLoggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimestampLoggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimestampLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteFiveComponent } from './route-five.component';

describe('RouteFiveComponent', () => {
  let component: RouteFiveComponent;
  let fixture: ComponentFixture<RouteFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteSixComponent } from './route-six.component';

describe('RouteSixComponent', () => {
  let component: RouteSixComponent;
  let fixture: ComponentFixture<RouteSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

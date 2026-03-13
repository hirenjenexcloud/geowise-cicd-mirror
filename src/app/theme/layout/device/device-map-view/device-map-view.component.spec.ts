import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceMapViewComponent } from './device-map-view.component';

describe('DeviceMapViewComponent', () => {
  let component: DeviceMapViewComponent;
  let fixture: ComponentFixture<DeviceMapViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceMapViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceMapViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

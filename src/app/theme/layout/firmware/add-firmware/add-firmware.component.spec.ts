import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFirmwareComponent } from './add-firmware.component';

describe('AddFirmwareComponent', () => {
  let component: AddFirmwareComponent;
  let fixture: ComponentFixture<AddFirmwareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFirmwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFirmwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

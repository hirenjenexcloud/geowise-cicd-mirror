import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceRoutingModule } from './device-routing.module';
import { DeleteDeviceComponent } from './delete-device/delete-device.component';
import{ DeviceAddComponent } from './device-add/device-add.component';
import { EditDeviceComponent } from './edit-device/edit-device.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DeleteDeviceComponent, DeviceAddComponent, EditDeviceComponent],
  imports: [
    CommonModule,
    DeviceRoutingModule,
    ReactiveFormsModule
  ]
})
export class DeviceModule { }

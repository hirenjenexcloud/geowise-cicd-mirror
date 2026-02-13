import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceRoutingModule } from './device-routing.module';
import { DeleteDeviceComponent } from './delete-device/delete-device.component';
import{ DeviceAddComponent } from './device-add/device-add.component';
import { EditDeviceComponent } from './edit-device/edit-device.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeviceMapViewComponent } from './device-map-view/device-map-view.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [DeleteDeviceComponent, DeviceAddComponent, EditDeviceComponent, DeviceMapViewComponent],
  imports: [
    CommonModule,
    DeviceRoutingModule,
    ReactiveFormsModule,
       AgmCoreModule.forRoot({
          apiKey: 'AIzaSyBExglEa6WhaOKDZ-cwQMMjbn5o1qQDTBQ&libraries=geometry'
        })
      
  ]
})
export class DeviceModule { }

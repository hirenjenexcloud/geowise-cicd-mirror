import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceRoutingModule } from './device-routing.module';
import { DeleteDeviceComponent } from './delete-device/delete-device.component';
import{ DeviceAddComponent } from './device-add/device-add.component';
import { EditDeviceComponent } from './edit-device/edit-device.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeviceMapViewComponent } from './device-map-view/device-map-view.component';
import { AgmCoreModule } from '@agm/core';
import { ToastrModule }  from 'ngx-toastr';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [DeleteDeviceComponent, DeviceAddComponent, EditDeviceComponent, DeviceMapViewComponent],
  imports: [
    CommonModule,
    DeviceRoutingModule,
    ReactiveFormsModule,
       AgmCoreModule.forRoot({
          apiKey: 'AIzaSyBExglEa6WhaOKDZ-cwQMMjbn5o1qQDTBQ&libraries=geometry'
        }),

          ToastrModule.forRoot({
            timeOut: 5000,
            // extendedTimeOut: 1000,
            positionClass: 'toast-top-right',
            //  positionClass: 'toast-top-full-width',
            closeButton: true,
            // progressBar: true,
            // preventDuplicates: true,
            // newestOnTop: true,
            tapToDismiss: true,            // Click pe close
            // enableHtml: false  
            iconClasses: {
            error: 'toast-error',
            info: 'toast-info',
            success: 'toast-success',
            warning: 'toast-warning'
          }        
          }),
          NgbTooltipModule
      
  ]
})
export class DeviceModule { }


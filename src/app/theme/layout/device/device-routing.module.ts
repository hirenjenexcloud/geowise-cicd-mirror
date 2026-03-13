import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeleteDeviceComponent } from './delete-device/delete-device.component';
import { DeviceAddComponent } from './device-add/device-add.component';
import { EditDeviceComponent } from './edit-device/edit-device.component';
import { DeviceMapViewComponent } from './device-map-view/device-map-view.component';


const routes: Routes = [
  {
    path: 'delete_device',
    component: DeleteDeviceComponent
  },
  {
    path: 'add_device',
    component: DeviceAddComponent
  },
  {
    path: 'edit_device',
    component: EditDeviceComponent
  },
  {
    path: 'map_view',
    component: DeviceMapViewComponent
  },
 
];  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceRoutingModule { }

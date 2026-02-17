import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import {AuthComponent} from './theme/layout/auth/auth.component';
import { AddFirmwareComponent } from './theme/layout/firmware/add-firmware/add-firmware.component';
import { AddGroupComponent } from './theme/layout/group/add-group/add-group.component';
import { AddSettingComponent } from './theme/layout/setting/add-setting/add-setting.component';
import { AddUserComponent } from './theme/layout/user/add-user/add-user.component';


const routes: Routes = [

   {
    path: '',
    redirectTo: 'auth/signin',
    pathMatch: 'full'
  },

  // 🔐 Auth routes (Login first)
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () =>
      import('./demo/pages/authentication/authentication.module')
        .then(m => m.AuthenticationModule)
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      // {
      //   path: '',
      //   redirectTo: 'dashboard/analytics',
      //   pathMatch: 'full'
      // },
     
       {
        path: 'device',
        loadChildren: () => import('./theme/layout/device/device.module').then(module => module.DeviceModule)
      },

    {
      path:'transfer',
      loadChildren: () => import('./theme/layout/transfer/transfer.module').then(module => module.TransferModule)
    },

       {
        path: 'firmware',
        component: AddFirmwareComponent
      },
      {
        path: 'group',
        component: AddGroupComponent
      },
      {
        path: 'setting',
        component: AddSettingComponent
      },
      {
        path: 'user',
        component: AddUserComponent
      },
     
     
     
     
     
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

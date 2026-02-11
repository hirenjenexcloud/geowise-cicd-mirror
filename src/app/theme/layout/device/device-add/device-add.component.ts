import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApisService } from 'src/app/theme/shared/services/apis.service';
import { ToastService } from 'src/app/theme/shared/services/toast.service';

@Component({
  selector: 'app-device-add',
  templateUrl: './device-add.component.html',
  styleUrls: ['./device-add.component.scss']
})
export class DeviceAddComponent implements OnInit {

  DeviceForm!: FormGroup;

  carriers = [
    'Telit',
    'Verizon',
    'AT&T',
    'T-Mobile'
];
clients = [
  { _id: '1', name: 'Client A', clientId: 'CA123' },
  { _id: '2', name: 'Client B', clientId: 'CB456' },
  { _id: '3', name: 'Client C', clientId: 'CC789' }
];

devices: any[] = [
  {
    imei: '353081090133666',
    imsi: '404100123456789',
    iccid: '8991101200003204512',
    msisdn: '9876543210',
    carrier: 'Airtel',
    clientId: 'CL001',
    grpId: 'Group-A'
  },
  {
    imei: '353081090133667',
    imsi: '404100987654321',
    iccid: '8991101200003204513',
    msisdn: '9123456780',
    carrier: 'Jio',
    clientId: 'CL002',
    grpId: 'Group-B'
  },
  {
    imei: '353081090133668',
    imsi: '404100456789123',
    iccid: '8991101200003204514',
    msisdn: '9988776655',
    carrier: 'VI',
    clientId: 'CL003',
    grpId: 'Group-C'
  }
];


groups = [];

  constructor(private fb: FormBuilder,private apiSvc: ApisService, private notification: ToastService) { }

  ngOnInit() {
    this.DeviceForm = this.fb.group({
    imei: ['', Validators.required],
    grpId: ['', Validators.required],
    iccid: ['', Validators.required],
    imsi: ['', Validators.required],
    msisdn: ['', Validators.required],
    carrier: ['', Validators.required],
    clientId: ['', Validators.required]
  })
   

   this.apiSvc.getGroups().subscribe((data: any) => {
     this.groups = data.data.groups;

     console.log("Groups:", this.groups);
   });

  //    setTimeout(() => {
  //   this.notification.success('Test Toast Working');
  // }, 5000);
  }

   submit() {

    var data = {
      imei: this.DeviceForm.value.imei,
      grpId: this.DeviceForm.value.grpId,
      clientId: this.DeviceForm.value.clientId,
      deviceInfo: {
      carrier: this.DeviceForm.value.carrier,
      iccid: this.DeviceForm.value.iccid,
      imsi: this.DeviceForm.value.imsi,
      msisdn: this.DeviceForm.value.msisdn
      }
    };



    if (this.DeviceForm.invalid) {
      this.DeviceForm.markAllAsTouched();
      return;
    }

    this.apiSvc.addDevice(data).subscribe((res:any) => {
      console.log('Device added:', res);
      console.log('Device msg:', res.message);
      console.log('Device status:', res.status);
      this.DeviceForm.reset();
      this.notification.success('Device added successfully');

    });
  }

}

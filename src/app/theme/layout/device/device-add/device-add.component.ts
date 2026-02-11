import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApisService } from 'src/app/theme/shared/services/apis.service';

@Component({
  selector: 'app-device-add',
  templateUrl: './device-add.component.html',
  styleUrls: ['./device-add.component.scss']
})
export class DeviceAddComponent implements OnInit {

  DeviceForm!: FormGroup;

  carriers = [
  'Airtel',
  'Jio',
  'Vodafone',
  'BSNL',
  'Verizon',
  'AT&T',
  'T-Mobile'
];
clients = [
  { _id: '1', name: 'Client A', clientId: 'CA123' },
  { _id: '2', name: 'Client B', clientId: 'CB456' },
  { _id: '3', name: 'Client C', clientId: 'CC789' }
];

groups = [];

  constructor(private fb: FormBuilder,private apiSvc: ApisService) { }

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

    this.apiSvc.addDevice(data).subscribe((response) => {
      console.log('Device added:', response);
      // Handle the response after adding the device
    });
  }

}

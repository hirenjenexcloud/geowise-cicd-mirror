import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApisService } from 'src/app/theme/shared/services/apis.service';
import { ToastService } from 'src/app/theme/shared/services/toast.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

devices: any[] = [];
groups = [];
editForm: FormGroup;
selectedDevice: any;

constructor(private fb: FormBuilder,private apiSvc: ApisService, private notification: ToastService, private modalService: NgbModal) { }

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

   this.editForm = this.fb.group({
    imei: [''],
    imsi: [''],
    iccid: [''],
    msisdn: ['']
  });
   

   this.apiSvc.getGroups().subscribe((data: any) => {
     this.groups = data.data.groups;

     console.log("Groups:", this.groups);
   });

   this.apiSvc.getDevices().subscribe((data: any) => {
     this.devices = data.data.devices;

     console.log("Devices:", this.devices);
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

  openEditModal(content: any, device: any) {
  this.selectedDevice = device;

  this.editForm.patchValue({
    imei: device.imei,
    imsi: device.deviceInfo.imsi,
    iccid: device.deviceInfo.iccid,
    msisdn: device.deviceInfo.msisdn
  });

  this.modalService.open(content, { centered: true });
}



updateDevice(modal: any) {
  const updatedData = {
    ...this.selectedDevice,
    imei: this.editForm.value.imei,
    deviceInfo: {
      ...this.selectedDevice.deviceInfo,
      imsi: this.editForm.value.imsi,
      iccid: this.editForm.value.iccid,
      msisdn: this.editForm.value.msisdn
    }
  };

  console.log("Updated:", updatedData);

  modal.close();
}


openDeleteModal(content: any, device: any) {
  this.selectedDevice = device;
  this.modalService.open(content, { centered: true });
}


confirmDelete(modal: any) {
  this.devices = this.devices.filter(
    d => d !== this.selectedDevice
  );

  modal.close();
}


}

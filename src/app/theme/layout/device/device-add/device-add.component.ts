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


devices: any[] = [];
groups = [];
editForm: FormGroup;
selectedDevice: any;
currentPage = 1;
itemsPerPage = 10;
totalPages = 0;
totalElements = 0;
// selectedDeviceID: any;

limit = 10;

constructor(private fb: FormBuilder,private apiSvc: ApisService, private notification: ToastService, private modalService: NgbModal) { }

  ngOnInit() {
  
    this.DeviceForm = this.fb.group({
    imei: ['', [Validators.required, Validators.pattern(/^[0-9]{15}$/)]],
    grpId: ['', Validators.required],
    iccid: ['', Validators.required],
    imsi: ['', [Validators.required, Validators.pattern(/^[0-9]{4,20}$/)]],
    msisdn: ['', [Validators.required, Validators.pattern(/^[0-9]{4,12}$/)]],
    carrier: ['', Validators.required],
    // clientId: ['', Validators.required]
  })

   this.editForm = this.fb.group({
    imei: [''],
    imsi: [''],
    iccid: [''],
    msisdn: [''],
    carrier: ['']
  });
   
    this.getAllDevices();
    this.getAllGroups();
 

  

  //    setTimeout(() => {
  //   this.notification.success('Test Toast Working');
  // }, 5000);
  }

   submit() {

    var data = {
      imei: this.DeviceForm.value.imei,
      grpId: this.DeviceForm.value.grpId,
      // clientId: this.DeviceForm.value.clientId,
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
      if(res.status == true) {
      this.getAllDevices();
      this.DeviceForm.reset();
      this.notification.success(res.message);
      }
      else{
        this.notification.error(res.message);
      }

    });
  }

  openEditModal(content: any, device: any) {
  this.selectedDevice = device;

  this.editForm.patchValue({
    imei: device.imei,
    imsi: device.deviceInfo.imsi,
    iccid: device.deviceInfo.iccid,
    msisdn: device.deviceInfo.msisdn,
    carrier: device.deviceInfo.carrier
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
      msisdn: this.editForm.value.msisdn,
      carrier: this.editForm.value.carrier
    }
  };

  this.apiSvc.updateDevice(updatedData).subscribe((res: any) => {
    console.log("Device updated:", res);
    if(res.status == true) {
      this.notification.success(res.message);
      this.getAllDevices();
      this.modalService.dismissAll();
    }
    else{
      this.notification.error(res.message);
    }
    
  });

  console.log("Updated:", updatedData);

  modal.close();
}


openDeleteModal(content: any, device: any) {
  this.selectedDevice = device;
  this.modalService.open(content, { centered: true });
}


confirmDelete(modal: any) {

  this.apiSvc.deleteDevice(this.selectedDevice.imei).subscribe((res: any) => {
    console.log("Device deleted:", res);
    if(res.status == true) {
      this.notification.success(res.message);
       this.getAllDevices();
       this.modalService.dismissAll();
    }
    else{
      this.notification.error(res.message);
    }
   
  });

  modal.close();
}

getAllDevices(page: number = 1)
{

   this.apiSvc.getDevices(`?page=${page}&limit=${this.limit}`).subscribe((data: any) => {
    
     this.devices = data.data.devices;
    this.totalPages = data.data.totalPages;
        this.currentPage = data.data.currentPage;
     console.log("Devices:", this.devices);
   });
}


 nextPage() {
    if (this.currentPage < this.totalPages) {
      this.getAllDevices(this.currentPage + 1);
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.getAllDevices(this.currentPage - 1);
    }
  }

  getAllGroups() {
    this.apiSvc.getGrps().subscribe((data: any) => {
      this.groups = data.data;
      console.log("Groups:", this.groups);
    });
  }

}

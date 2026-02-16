import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ApisService } from 'src/app/theme/shared/services/apis.service';
import { ToastService } from 'src/app/theme/shared/services/toast.service';


@Component({
  selector: 'app-add-firmware',
  templateUrl: './add-firmware.component.html',
  styleUrls: ['./add-firmware.component.scss']
})
export class AddFirmwareComponent implements OnInit {
   
  firmwares:any       
  editFirmwareForm!: FormGroup;       
  firmwareForm!: FormGroup;            
  selectedFirmware!:  null; 
  selectedFile!: File | null;

displayfile: any = '';
id: number = 0;
selectedFirmwareId: any;
currentPage = 1;
itemsPerPage = 10;
totalPages = 0;
totalElements = 0;


  constructor(private fb: FormBuilder, private modalService: NgbModal, private apiSvc: ApisService, private notification: ToastService) { }

   ngOnInit(): void {

    this.getAllFirmwares();
    this.firmwareForm = this.fb.group({
      swVersion: ['', Validators.required],
      firmName: ['', Validators.required],
      firmwareFile: ['', Validators.required]
    });

    this.editFirmwareForm = this.fb.group({
      fwId: [''],
      swVersion: [''],
      firmName: [''],
      firmwareFile: ['']
    });
  }

  // Open edit modal
  openEditFirmwareModal(modal: any, firmware: any) {

    console.log('Editing Firmware:', firmware);
     this.selectedFirmwareId = firmware._id;
    // this.selectedFirmware = firmware;
    this.editFirmwareForm.patchValue(firmware);
    this.modalService.open(modal, { centered: true });
  }
  
  // Update firmware 
  updateFirmware(modal: any) {
    console.log('Updated Firmware Data:', this.editFirmwareForm.value,"and id:",this.selectedFirmwareId);
    if (this.editFirmwareForm.valid) {
      this.apiSvc.updateFirmware(this.editFirmwareForm.value,this.selectedFirmwareId).subscribe((res: any) => {
        if (res.status == true) {
          this.notification.success(res.message);
          const index = this.firmwares.findIndex(fw => fw.fwId === this.editFirmwareForm.value.fwId);
          if (index !== -1) {
            this.firmwares[index] = { ...this.editFirmwareForm.value };
          }
          this.modalService.dismissAll();
        } else {
          this.notification.error(res.message);
        }
      });
    }
        }

        // // Open delete modal
 openDeleteFirmwareModal(modal: any, firmware: any) {
          this.selectedFirmwareId = firmware._id;
          this.modalService.open(modal, { centered: true });
        }

      
deleteFirmware(model:any)
        {
          console.log('Deleting Firmware with ID:', this.selectedFirmwareId);
          this.apiSvc.deleteFirmware(this.selectedFirmwareId).subscribe((res: any) => {

              console.log('Delete Firmware Response:', res);
              if (res.status == true) {
                this.notification.success(res.message);
                // this.firmwares = this.firmwares.filter(fw => fw._id !== this.selectedFirmwareId);
                this.modalService.dismissAll();
                this.getAllFirmwares();
              } else {
                console.error('Error deleting firmware:', res.message);
                this.modalService.dismissAll();
                this.notification.error(res.message);
              }
            });
          
        }


onFileSelect(event: any) {
  if (event.target.files.length > 0) {
    this.selectedFile = event.target.files[0];
    console.log('Selected File:', this.selectedFile.name);
  }
}
onFileChange(event: any) {
  if (event.target.files.length > 0) {
    this.selectedFile = event.target.files[0];
    console.log('Selected File:', this.selectedFile.name);
    this.displayfile = this.selectedFile.name;
  }
}
AddFirmware() {
  console.log("this.firmwareForm.value:", this.firmwareForm.value);
  if (!this.selectedFile) {
    this.notification.warning("Please select firmware file");
    return;
  }

  const formData = new FormData();
  formData.append('swVersion', this.firmwareForm.value.swVersion);
  formData.append('firmName', this.firmwareForm.value.firmName);
  formData.append('firmwareFile', this.selectedFile);
  console.log('Form Data:', formData);


  formData.forEach((value, key) => {
  console.log(key, value);
});

  this.apiSvc.addFirmware(formData).subscribe((res: any) => {

    if (res.status == true) {
      this.notification.success(res.message)
      this.firmwareForm.reset();
      this.selectedFile = null;
      this.displayfile = '';
      this.getAllFirmwares();

    } else {
      this.notification.error(res.message);
    }
  }
);
}

getAllFirmwares(page: number = 1)
{
  this.currentPage = page;
   this.apiSvc.getFirmwares(this.currentPage, this.itemsPerPage).subscribe((res: any) => {
      if (res.status == true) {
        this.firmwares = res.data.firmwares;
         this.totalPages = res.totalPages;
        this.totalElements = res.totalElements;
        console.log('Firmwares:', this.firmwares);
      } else {
        this.notification.error(res.message);
      }
    });
}

changePage(page: number) {
  if (page >= 1 && page <= this.totalPages) {
    this.getAllFirmwares(page);
  }
}
}
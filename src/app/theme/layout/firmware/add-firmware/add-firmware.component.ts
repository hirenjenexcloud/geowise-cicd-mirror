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

limit = 10;


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
      firmName: ['',Validators.required],
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
    if(this.editFirmwareForm.invalid) {
      this.editFirmwareForm.markAllAsTouched();
      return;
    }
    console.log('Updated Firmware Data:', this.editFirmwareForm.value,"and id:",this.selectedFirmwareId);
    if (this.editFirmwareForm.valid) {
      this.apiSvc.updateFirmware(this.editFirmwareForm.value,this.selectedFirmwareId).subscribe((res: any) => {
        if (res.status == true) {
          this.notification.success(res.message);
          // const index = this.firmwares.findIndex(fw => fw.fwId === this.editFirmwareForm.value.fwId);
          // if (index !== -1) {
          //   this.firmwares[index] = { ...this.editFirmwareForm.value };
          // }
          this.getAllFirmwares();
          this.modalService.dismissAll();
        } else {
          this.notification.error(res.message);
        }
      },
      err=>{
        console.error('Error updating firmware:', err);
        this.notification.error('Failed to update firmware');
      }
    );
    }
        }

        // // Open delete modal
 openDeleteFirmwareModal(modal: any, firmware: any) {
          this.selectedFirmware = firmware.firmName;
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
            },
            err=>{
              console.error('Error deleting firmware:', err);
              this.notification.error(err.error.message || 'Failed to delete firmware');
              this.modalService.dismissAll();
            }
          );
          
        }


onFileSelect(event: any) {
  if (event.target.files.length > 0) {
    this.selectedFile = event.target.files[0];
    console.log('Selected File:', this.selectedFile.name);
  }
}
// onFileChange(event: any) {
//   if (event.target.files.length > 0) {
//     this.selectedFile = event.target.files[0];
//     console.log('Selected File:', this.selectedFile.name);
//     this.displayfile = this.selectedFile.name;
//   }
// }

onFileChange(event: any) {
  if (event.target.files.length === 0) return;

  const file = event.target.files[0];
  const fileName = file.name.toLowerCase();
  const fileExtension = fileName.split('.').pop();

  const allowedExtensions = ['gbl', 'bin'];

  // 🔒 Extension validation
  if (!allowedExtensions.includes(fileExtension || '')) {
    this.notification.error('Only .gbl and .bin firmware files are allowed.');
    event.target.value = '';
    this.selectedFile = null;
    this.displayfile = '';
    return;
  }

  // const maxSize = 20 * 1024 * 1024;
  // if (file.size > maxSize) {
  //   this.notification.error('File size must be less than 20MB.');
  //   event.target.value = '';
  //   this.selectedFile = null;
  //   this.displayfile = '';
  //   return;
  // }


  this.selectedFile = file;
  console.log('Selected File:', this.selectedFile.name);
  this.firmwareForm.get('firmwareFile').markAsTouched();
  this.displayfile = this.selectedFile.name;
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
  },
  (err) => {
      console.log("Full error response:", err);
      const errorMessage = err.error.message || err.message || "Something went wrong";
      this.notification.error(errorMessage);
    }
);
}

getAllFirmwares(page: number = 1)
{
  this.currentPage = page;
   this.apiSvc.getFirmwares(`?page=${page}&limit=${this.limit}`).subscribe((res: any) => {
      if (res.status == true) {
        this.firmwares = res.data.firmwares;
         this.totalPages = res.data.totalPages;
        this.currentPage = res.data.currentPage;
        console.log('Firmwares:', this.firmwares);
      } else {
        this.notification.error(res.message);
      }
    });
}
 nextPage() {
    if (this.currentPage < this.totalPages) {
      this.getAllFirmwares(this.currentPage + 1);
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.getAllFirmwares(this.currentPage - 1);
    }
  }

// changePage(page: number) {
//   if (page >= 1 && page <= this.totalPages) {
//     this.getAllFirmwares(page);
//   }
// }
}
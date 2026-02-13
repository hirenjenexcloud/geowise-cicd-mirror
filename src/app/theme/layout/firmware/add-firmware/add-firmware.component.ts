import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ApisService } from 'src/app/theme/shared/services/apis.service';


@Component({
  selector: 'app-add-firmware',
  templateUrl: './add-firmware.component.html',
  styleUrls: ['./add-firmware.component.scss']
})
export class AddFirmwareComponent implements OnInit {
   
  firmwares:any         // List of firmwares
  editFirmwareForm!: FormGroup;       // Form for editing firmware
  firmwareForm!: FormGroup;              // Form for adding devices
  selectedFirmware!:  null; // Firmware selected for edit/delete
  selectedFile!: File | null;

displayfile: any = '';
id: number = 0;


  constructor(private fb: FormBuilder, private modalService: NgbModal, private apiSvc: ApisService) { }

   ngOnInit(): void {
    // Dummy data
    this.firmwares = [
      { fwid: 'FW001', sw: 'v1.0.0', fwName: 'Firmware Alpha' },
      { fwid: 'FW002', sw: 'v1.2.1', fwName: 'Firmware Beta' },
      { fwid: 'FW003', sw: 'v2.0.0', fwName: 'Firmware Gamma' }
    ];
    this.firmwareForm = this.fb.group({
      sw: ['', Validators.required],
      fwName: ['', Validators.required]
    });


    // Initialize edit form
    this.editFirmwareForm = this.fb.group({
      fwid: [''],
      sw: [''],
      fwName: ['']
    });

    
  // this.uploader.onBuildItemForm = (item, form) => {
  //   form.append("id", "" + this.id);
  // };


  }

  // Open edit modal
  openEditFirmwareModal(modal: any, firmware: any) {
    this.selectedFirmware = firmware;
    this.editFirmwareForm.patchValue(firmware);
    this.modalService.open(modal, { centered: true });
  }

  // Update firmware (dummy update)
        // updateFirmware(modal: any) {
        //   if (this.selectedFirmware) {
        //     const index = this.firmwares.findIndex(fw => fw.fwid === this.selectedFirmware!.fwid);
        //     if (index !== -1) { 
        //       this.firmwares[index] = { ...this.editFirmwareForm.value };
        //     }
        //     this.modalService.dismissAll();
        //   }
        // }

        // // Open delete modal
        // openDeleteFirmwareModal(modal: any, firmware: Firmware) {
        //   this.selectedFirmware = firmware;
        //   this.modalService.open(modal, { centered: true });
        // }

        // // Confirm delete (dummy delete)
        // confirmDeleteFirmware(modal: any) {
        //   if (this.selectedFirmware) {
        //     this.firmwares = this.firmwares.filter(fw => fw.fwid !== this.selectedFirmware!.fwid);
        //     this.modalService.dismissAll();
        //   }

onFileSelect(event: any) {
  if (event.target.files.length > 0) {
    this.selectedFile = event.target.files[0];
    console.log('Selected File:', this.selectedFile.name);
  }
}
onFileChange(event: any) {
  if (event.target.files.length > 0) {
    this.selectedFile = event.target.files[0];
    this.displayfile = this.selectedFile.name;
  }
}
AddFirmware() {
console.log('Selected File:', this.selectedFile);
  if (!this.selectedFile) {
    alert("Please select firmware file");
    return;
  }

  const formData = new FormData();

  formData.append('sw', this.firmwareForm.value.sw);
  formData.append('fwName', this.firmwareForm.value.fwName);
  formData.append('file', this.selectedFile);

  this.apiSvc.addFirmware(formData).subscribe((res: any) => {

    if (res.success) {

      alert("Firmware Added Successfully");

      this.firmwareForm.reset();
      this.selectedFile = null;
      this.displayfile = '';

    } else {
      alert("Error adding firmware");
    }

  });

}


}
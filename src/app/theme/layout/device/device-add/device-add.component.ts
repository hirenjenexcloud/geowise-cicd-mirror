import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApisService } from "src/app/theme/shared/services/apis.service";
import { ToastService } from "src/app/theme/shared/services/toast.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-device-add",
  templateUrl: "./device-add.component.html",
  styleUrls: ["./device-add.component.scss"],
})
export class DeviceAddComponent implements OnInit {
  DeviceForm!: FormGroup;

  carriers = ["Telit", "Verizon", "AT&T", "T-Mobile"];

  groupMap: any = {};
  selectedGroup = "";
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

  constructor(
    private fb: FormBuilder,
    private apiSvc: ApisService,
    private notification: ToastService,
    private modalService: NgbModal,
  ) {}

  ngOnInit() {
    this.DeviceForm = this.fb.group({
      imei: ["", [Validators.required, Validators.pattern(/^[0-9]{15}$/)]],
      grpId: ["", Validators.required],
      iccid: ["", [Validators.required, Validators.pattern(/^[0-9]{4,20}$/)]],
      imsi: ["", [Validators.required, Validators.pattern(/^[0-9]{4,20}$/)]],
      msisdn: ["", [Validators.required, Validators.pattern(/^[0-9]{4,15}$/)]],
      carrier: ["", Validators.required],
      // clientId: ['', Validators.required]
    });

    this.editForm = this.fb.group({
      imei: [""],
      iccid: ["", [Validators.required, Validators.pattern(/^[0-9]{4,20}$/)]],
      imsi: ["", [Validators.required, Validators.pattern(/^[0-9]{4,20}$/)]],
      msisdn: ["", [Validators.required, Validators.pattern(/^[0-9]{4,15}$/)]],
      carrier: ["", Validators.required],
       grpId: ["", Validators.required],
    });

    this.getAllDevices();
    this.getAllGroups();

    //    setTimeout(() => {
    //   this.notification.success('Test Toast Working');
    // }, 5000);
  }

  // submit() {
  //   var data = {
  //     imei: this.DeviceForm.value.imei,
  //     grpId: this.DeviceForm.value.grpId,
  //     // clientId: this.DeviceForm.value.clientId,
  //     deviceInfo: {
  //       carrier: this.DeviceForm.value.carrier,
  //       iccid: this.DeviceForm.value.iccid,
  //       imsi: this.DeviceForm.value.imsi,
  //       msisdn: this.DeviceForm.value.msisdn,
  //     },
  //   };

  //   if (this.DeviceForm.invalid) {
  //     this.DeviceForm.markAllAsTouched();
  //     return;
  //   }

  //   this.apiSvc.addDevice(data).subscribe(
  //     (res: any) => {

  //       console.log("Device added:", res);
  //       if (res.status == true) {
  //         this.getAllDevices();
  //         this.DeviceForm.reset();
  //         this.notification.success(res.message);
  //       } else {
  //         this.notification.error(res.message);
  //       }
  //     },
  //     (err) => {
  //       console.log("Error adding device:", err);
  //       if(err.message == "Duplicate key error")
  //       {
  //         console.log("Duplicate key error:", err);
  //         err.message = "Device with this IMEI already exists.";
  //         this.notification.error(err.message);
  //       }
  //       else{
  //         console.log("Error adding device else case:", err);
  //       this.notification.error(err.message);

  //       }

  //     },
  //   );
  // }

  resetForm() {
  this.DeviceForm.reset({
    imei: '',
    imsi: '',
    iccid: '',
    msisdn: '',
    carrier: '',
    grpId: ''
  });
}

  submit() {
  if (this.DeviceForm.invalid) {
    this.DeviceForm.markAllAsTouched();
    return;
  }

  const data = {
    imei: this.DeviceForm.value.imei,
    grpId: this.DeviceForm.value.grpId,
    deviceInfo: {
      carrier: this.DeviceForm.value.carrier,
      iccid: this.DeviceForm.value.iccid,
      imsi: this.DeviceForm.value.imsi,
      msisdn: this.DeviceForm.value.msisdn,
    },
  };

  this.apiSvc.addDevice(data).subscribe(
    (res: any) => {
      if (res.status === true) {
        this.getAllDevices();
        // this.DeviceForm.reset();
        this.resetForm();
        this.notification.success(res.message || "Device added successfully");
      } else {
        this.notification.error(res.message || "Something went wrong");
      }
    },
    (err) => {
      console.log("Full error response:", err);

      const errorMessage =
        err.error.message || err.message || "Something went wrong";

      // Duplicate IMEI Handling
      if (
        errorMessage === "Duplicate key error" ||
        err.error.details.includes("imei_1")
      ) {
        this.notification.error(
          "Device with this IMEI already exists. Please use a different IMEI."
        );
      } else {
        this.notification.error(errorMessage);
      }
    }
  );
}

  openEditModal(content: any, device: any) {
    this.selectedDevice = device;

    this.editForm.patchValue({
      imei: device.imei,
      imsi: device.deviceInfo.imsi,
      iccid: device.deviceInfo.iccid,
      msisdn: device.deviceInfo.msisdn,
      carrier: device.deviceInfo.carrier,
      grpId: device.grpId
    });

    this.modalService.open(content, { centered: true  });
  }

  updateDevice(modal: any) {
    if (this.editForm.invalid) {
      this.editForm.markAllAsTouched();
      return;
    }

    const updatedData = {
      ...this.selectedDevice,
      imei: this.editForm.value.imei,
      deviceInfo: {
        ...this.selectedDevice.deviceInfo,
        imsi: this.editForm.value.imsi,
        iccid: this.editForm.value.iccid,
        msisdn: this.editForm.value.msisdn,
        carrier: this.editForm.value.carrier,
      },
    };

    this.apiSvc.updateDevice(updatedData).subscribe((res: any) => {
      console.log("Device updated:", res);
      if (res.status == true) {
        this.notification.success(res.message);
        this.getAllDevices();
        this.modalService.dismissAll();
      } else {
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
      if (res.status == true) {
        this.notification.success(res.message);
        this.getAllDevices();
        this.modalService.dismissAll();
      } else {
        this.notification.error(res.message);
      }
    });

    modal.close();
  }

  getAllDevices(page: number = 1) {
    // 👉 IF GROUP FILTER SELECTED
    if (this.selectedGroup) {
      this.apiSvc.getDevicesByGroup(this.selectedGroup).subscribe(
        (res: any) => {
          this.devices = res.data || [];
          this.totalPages = 1;
          this.currentPage = 1;
        },
        (err) => {
          this.devices = [];
        },
      );

      return;
    }

    // 👉 OTHERWISE NORMAL PAGINATION
    this.apiSvc
      .getDevices(`?page=${page}&limit=${this.limit}`)
      .subscribe((data: any) => {
        this.devices = data.data.devices;
        this.totalPages = data.data.totalPages;
        this.currentPage = data.data.currentPage;
      });
  }

  filterByGroup() {
    this.getAllDevices(1);
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

      // create id → name map
      this.groupMap = {};
      this.groups.forEach((g) => {
        this.groupMap[g._id] = g.grpName;
      });
    });
  }
  
}

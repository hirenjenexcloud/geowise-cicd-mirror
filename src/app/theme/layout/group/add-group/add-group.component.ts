import { Component, OnInit } from "@angular/core";
import { ApisService } from "src/app/theme/shared/services/apis.service";
import { ToastService } from "src/app/theme/shared/services/toast.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-add-group",
  templateUrl: "./add-group.component.html",
  styleUrls: ["./add-group.component.scss"],
})
export class AddGroupComponent implements OnInit {
  constructor(
    private groupService: ApisService,
    private toast: ToastService,
    private modalService: NgbModal,
  ) {}

  ngOnInit() {
    this.loadFirmwares();
    this.loadSettings();
    this.loadGroups();
  }

  group: any = {
    grpName: "",
    fwId: "",
    settingId: "",
    hwVersion: "",
    swVersion: "",
    desc: "",
  };

  firmwareList: any[] = [];
  settingList: any[] = [];

  loadFirmwares() {
    this.groupService.getFirmwares().subscribe((res: any) => {
      console.log("Firmware Response:", res.data.firmwares);
      this.firmwareList = res.data.firmwares;
    });
  }

  loadSettings() {
    this.groupService.getSettings().subscribe((res: any) => {
      this.settingList = res.data.settings;
    });
  }

  onSubmit(form: any) {
    if (form.invalid) {
      this.toast.warning("Please fill all required fields");
      return;
    }

    this.groupService.addGroup(this.group).subscribe(
      (res: any) => {
        this.toast.success(res.message || "Group created successfully");

        // reset model
        this.group = {
          grpName: "",
          fwId: "",
          settingId: "",
          hwVersion: "",
          swVersion: "",
          desc: "",
        };

        // reset form state
        form.resetForm();
      },

      (err: any) => {
        this.toast.error(
          err && err.error && err.error.message
            ? err.error.message
            : "Failed to create group",
        );
      },
    );
  }

  groups: any[] = [];

  currentPage = 1;
  totalPages = 1;
  limit = 10;

  selectedGroup: any = null;

  loadGroups(page = 1) {
    this.groupService
      .getGroups(`?page=${page}&limit=${this.limit}`)
      .subscribe((res: any) => {
        this.groups = res.data.groups;
        this.totalPages = res.data.totalPages;
        this.currentPage = res.data.currentPage;
      });
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.loadGroups(this.currentPage + 1);
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.loadGroups(this.currentPage - 1);
    }
  }

  openEditModal(content: any, group: any) {
    this.selectedGroup = { ...group };
    this.modalService.open(content, { centered: true, size: "lg" });
  }

  updateGroup(modal: any) {
    this.groupService
      .updateGroup(this.selectedGroup._id, this.selectedGroup)
      .subscribe((res: any) => {
        this.toast.success(res.message || "Group updated");

        modal.close(); // 👈 this is correct
        this.loadGroups(this.currentPage);
      });
  }

  openDeleteModal(content: any, group: any) {
    this.selectedGroup = group;
    this.modalService.open(content, { centered: true });
  }

  confirmDelete(modal: any) {
    this.groupService
      .deleteGroup(this.selectedGroup._id)
      .subscribe((res: any) => {
        this.toast.success(res.message || "Group deleted");

        modal.close();
        this.loadGroups(this.currentPage);
      });
  }
}

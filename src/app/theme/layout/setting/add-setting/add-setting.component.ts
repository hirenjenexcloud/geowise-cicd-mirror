import { Component, OnInit } from "@angular/core";
import { ApisService } from "src/app/theme/shared/services/apis.service";
import { ToastService } from "src/app/theme/shared/services/toast.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-add-setting",
  templateUrl: "./add-setting.component.html",
  styleUrls: ["./add-setting.component.scss"],
})
export class AddSettingComponent implements OnInit {
  constructor(
    private api: ApisService,
    private toast: ToastService,
    private modalService: NgbModal,
  ) {}

  settings: any[] = [];
  selected: any = null;
  currentPage = 1;
  totalPages = 1;
  limit = 10;

  setting: any = {
    name: "",
    breadcrumb: "",
    hbt: "",
    btHbt: "",
    stop: "",
    sleep: "",

    moveTrigger: {
      minSpeedKph: "",
      speedCount: "",
      minDistanceM: "",
    },

    resetTimeouts: {
      deviceTimeout: "",
      gpsTimeout: "",
      cellularTimeout: "",
    },

    qualityFilters: {
      minSatellite: "",
      stopHac: "",
      moveHac: "",
      gsmRssi: "",
    },

    dashboardServer: {
      ip: "",
      port: "",
    },

    atCommands: "",
  };

  ngOnInit() {
    this.loadSettings(1);
  }

  loadSettings(page: number = 1) {
    this.currentPage = page;

    this.api.getSettings(this.currentPage, this.limit).subscribe((res: any) => {
      this.settings = res.data.settings;
      this.totalPages = res.data.totalPages;
    });
  }

  create(form: any) {
    if (form.invalid) {
      this.toast.warning("Fill all required fields");
      return;
    }

    let payload = { ...this.setting };

    if (payload.atCommands) {
      payload.atCommands = this.setting.atCommands
        .split(/[,\s]+/)
        .map((x) => x.trim())
        .filter((x) => x);
    }

    this.api.addSetting(payload).subscribe(
      (res: any) => {
        this.toast.success(res.message);
        form.resetForm();
        this.loadSettings();
      },
      (err: any) => {
        this.toast.error(
          err && err.error && err.error.message
            ? err.error.message
            : "Failed to create setting",
        );
      },
    );
  }

  openEdit(m: any, s: any) {
    this.selected = { ...s };
    this.modalService.open(m, { centered: true });
  }

  update(modal: any) {
    this.api
      .updateSetting(this.selected._id, {
        name: this.selected.name,
      })
      .subscribe(
        (res: any) => {
          this.toast.success(res.message);
          modal.close();
          this.loadSettings();
        },
        (err: any) => {
          this.toast.error(
            err && err.error && err.error.message
              ? err.error.message
              : "Failed to update setting",
          );
        },
      );
  }

  openDelete(m: any, s: any) {
    this.selected = s;
    this.modalService.open(m, { centered: true });
  }

  delete(modal: any) {
    this.api.deleteSetting(this.selected._id).subscribe(
      (res: any) => {
        this.toast.success(res.message);
        modal.close();
        this.loadSettings();
      },
      (err: any) => {
        modal.close();
        this.toast.error(
          err && err.error && err.error.message
            ? err.error.message
            : "Failed to delete setting",
        );
      },
    );
  }

  changePage(p: number) {
    if (p < 1 || p > this.totalPages) return;

    this.currentPage = p;
    this.loadSettings(p);
  }
}

import { Component, OnInit } from "@angular/core";
import { ApisService } from "src/app/theme/shared/services/apis.service";
import { ToastService } from "src/app/theme/shared/services/toast.service";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.scss"],
})
export class AddUserComponent implements OnInit {
  constructor(
    private api: ApisService,
    private toast: ToastService,
  ) {}

  user: any = {
    name: "",
    email: "",
    password: "",
    phone: "",
    timezone: "",
    role: false,
  };

  timezones = [
    "Asia/Kolkata",
    "UTC",
    "America/New_York",
    "Europe/London",
    "Asia/Dubai",
    "Asia/Singapore",
    "Australia/Sydney",
  ];

  ngOnInit() {}

  submit(form: any) {
    if (form.invalid) {
      this.toast.warning("Please fill all required fields correctly");
      return;
    }

    const payload = {
      ...this.user,
      role: this.user.role ? "master" : "user",
    };

    this.api.signup(payload).subscribe(
      (res: any) => {
        this.toast.success(res.message || "User created");
        form.resetForm();
      },

      (err: any) => {
        this.toast.error(
          err && err.error && err.error.message
            ? err.error.message
            : "Failed to create user",
        );
      },
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApisService } from 'src/app/theme/shared/services/apis.service';
import { ToastService } from 'src/app/theme/shared/services/toast.service';

@Component({
  selector: 'app-auth-reset-password',
  templateUrl: './auth-reset-password.component.html',
  styleUrls: ['./auth-reset-password.component.scss']
})
export class AuthResetPasswordComponent implements OnInit {

  email: string = '';

  constructor(private http: HttpClient, private apiService: ApisService, private toastService: ToastService) { }

  ngOnInit() {
  }

  resetPassword() {
    if (!this.email) {
      alert('Please enter email');
      return;
    }

    console.log("Sending password reset link to:", this.email);
    this.apiService.sendPasswordResetLink(this.email).subscribe({
      next: (res: any) => {
        this.toastService.success('Reset link sent to your email');
      },
      error: (err) => {
        this.toastService.error(err.error.message || 'Something went wrong');
      }
    });
  }

}



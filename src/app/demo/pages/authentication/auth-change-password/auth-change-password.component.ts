import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { ApisService } from 'src/app/theme/shared/services/apis.service';
import { ToastService } from 'src/app/theme/shared/services/toast.service';

@Component({
  selector: 'app-auth-change-password',
  templateUrl: './auth-change-password.component.html',
  styleUrls: ['./auth-change-password.component.scss']
})
export class AuthChangePasswordComponent implements OnInit {

  newPassword: string = '';
  confirmPassword: string = '';

  token: string = '';
  email: string = '';

  constructor( private route: ActivatedRoute,
    private http: HttpClient,private apiService: ApisService,
    private notify : ToastService,
    private router: Router
  ) { }

  ngOnInit() {

      this.route.queryParams.subscribe(params => {
      this.token = params['token'];
      this.email = params['email'];

      // console.log('Token:', this.token);
      // console.log('Email:', this.email);
    });
  }


  changePassword() {
    console.log('Changing password for:', this.email);
    // validation
    if (!this.newPassword || !this.confirmPassword) {
      this.notify.error('Please fill in all fields');
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      this.notify.error('Passwords do not match');
      return;
    }

    if (!this.token || !this.email) {
      this.notify.error('Invalid reset link');
      return;
    }

    // API call
   
    this.apiService.resetPassword(
      this.email,
      this.token,
      this.newPassword
    )
    .subscribe({
      next: (res: any) => {
        console.log('Password change response:', res);
        if(res.status === true) {
          this.notify.success(res.message);
          this.router.navigate(['/auth/signin']);
        }
        else {
          this.notify.error(res.message || 'Something went wrong');
        }
      },
      error: (err) => {
        this.notify.error(err.error.message || 'Something went wrong');
      }
    });
  }


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder , FormGroup, Validators} from '@angular/forms';
import { ApisService } from 'src/app/theme/shared/services/apis.service';
import { ToastService } from 'src/app/theme/shared/services/toast.service';
@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})
export class AuthSigninComponent implements OnInit {

  loginForm : FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private apiSvc: ApisService, private notification: ToastService) { }

  ngOnInit() {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

   login() {

    console.log('Login form submitted:', this.loginForm.value);
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      this.apiSvc.login(credentials).subscribe(
        (res:any) => {
          // Handle successful login
          console.log('Login successful:', res);
          if(res.status == true)  {
            console.log('Login test:', res);
            this.notification.success(res.message);
            localStorage.setItem('token', 'Bearer ' + res.data.token);
            this.router.navigate(['/device']);
          }
          else
          {
            this.notification.error(res.message);
        }
      },
      (error) => {
       
        console.error('Login error:', error);
      }
    );
    }
  }


}

import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private notify: ToastrService) { }

   success(message: string) {
    console.log('Success:', message);
    this.notify.success(message);
  }

  error(message: string) {
    this.notify.error(message);
  }

  warning(message: string) {
    this.notify.warning(message);
  }

  info(message: string) {
    this.notify.info(message);
  }
}

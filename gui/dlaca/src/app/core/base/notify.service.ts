import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  constructor(private toastr: ToastrService) { }

  success(msg: string): void {
    this.toastr.success(msg);
  }

  error(msg: string): void {5
    console.log(msg);
    this.toastr.error(msg);
  }
}

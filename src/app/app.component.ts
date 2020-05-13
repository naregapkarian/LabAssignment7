import { Component } from '@angular/core';
import { ToastService } from './toast/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toast-app';
  toastTypes: Array<string> = [];
  constructor(private toastService: ToastService) {
    this.toastTypes = ['success', 'info', 'warning', 'danger'];
  }

// success, info, warning, danger
  showToast() {

    const rand = Math.floor(Math.random() * 4);
    const toasttype = this.toastTypes[rand];
    const message = 'Hi! This is a message. My random number is ' + rand + '!';
    const duration = 4000;
    this.toastService.showToast(toasttype, message, duration);
  }
}

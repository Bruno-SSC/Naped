import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DeviceCheckerService {
  mediumDevice: number = 768;
  largeDevice: number = 1024;
  biggerDevice: number = 1920;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private route: Router
  ) {}

  checkDeviceSize(): void {
    if (window.innerWidth < this.mediumDevice) {
      this.route.navigate(['/mobile']);
      return;
    }

    if (window.innerWidth < this.largeDevice) {
      this.route.navigate(['/mobile']);
      return;
    }

    if (window.innerWidth < this.biggerDevice) {
      this.route.navigate(['/desktop']);
      return;
    }
  }
}

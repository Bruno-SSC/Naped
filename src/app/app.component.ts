import { Component } from '@angular/core';
import { DeviceCheckerService } from './services/device-checker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private devChek: DeviceCheckerService) {
    this.devChek.checkDeviceSize();
  }
}

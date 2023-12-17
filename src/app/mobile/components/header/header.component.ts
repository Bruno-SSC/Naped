import { Component } from '@angular/core';
import { AssetsProviderService } from 'src/app/services/assets-provider.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  assetsFolder: string | undefined;

  constructor(private assets: AssetsProviderService) {
    this.assetsFolder = this.assets.assetsFolder;
  }
}

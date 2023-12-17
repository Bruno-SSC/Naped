import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AssetsProviderService } from 'src/app/services/assets-provider.service';

@Component({
  selector: 'app-main-image',
  templateUrl: './main-image.component.html',
  styleUrls: ['./main-image.component.scss'],
})
export class MainImageComponent {
  assetsPath: string | undefined;

  constructor(private assets: AssetsProviderService) {
    this.assetsPath = this.assets.assetsFolder;
  }
}

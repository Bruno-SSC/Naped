import { Component } from '@angular/core';

interface headerIcons {
  logo: string;
  menuIcon: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  assetsFolder: string = '../../../../assets/';
  
  imgPaths: headerIcons = {
    logo: 'icons/Naped.svg',
    menuIcon: 'icons/menu.svg',
  };
}

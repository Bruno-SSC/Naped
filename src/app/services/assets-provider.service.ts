import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AssetsProviderService {
  assetsFolder: string = '../../../../assets/';
  constructor() {}
}

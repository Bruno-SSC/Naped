import { TestBed } from '@angular/core/testing';

import { AssetsProviderService } from './assets-provider.service';

describe('AssetsProviderService', () => {
  let service: AssetsProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetsProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

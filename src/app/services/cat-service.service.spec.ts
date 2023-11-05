import { TestBed } from '@angular/core/testing';

import { CatserviceService } from './cat-service.service';

describe('CatServiceService', () => {
  let service: CatserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

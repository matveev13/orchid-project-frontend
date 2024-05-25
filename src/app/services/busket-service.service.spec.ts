import { TestBed } from '@angular/core/testing';

import { BusketServiceService } from './busket-service.service';

describe('BusketServiceService', () => {
  let service: BusketServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusketServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

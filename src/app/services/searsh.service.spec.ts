import { TestBed } from '@angular/core/testing';

import { SearshService } from './searsh.service';

describe('SearshService', () => {
  let service: SearshService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearshService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

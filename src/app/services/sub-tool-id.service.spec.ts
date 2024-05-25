import { TestBed } from '@angular/core/testing';

import { SubToolIdService } from './sub-tool-id.service';

describe('SubToolIdService', () => {
  let service: SubToolIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubToolIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

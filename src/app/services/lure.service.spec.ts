import { TestBed } from '@angular/core/testing';

import { LureService } from './lure.service';

describe('LureService', () => {
  let service: LureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

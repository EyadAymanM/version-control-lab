import { TestBed } from '@angular/core/testing';

import { FouadService } from './fouad.service';

describe('FouadService', () => {
  let service: FouadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FouadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GrngService } from './grng.service';

describe('GrngService', () => {
  let service: GrngService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrngService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

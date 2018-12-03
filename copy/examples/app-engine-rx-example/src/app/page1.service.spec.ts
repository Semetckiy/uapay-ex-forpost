import { TestBed, inject } from '@angular/core/testing';

import { Page1Service } from './page1.service';

describe('Page1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Page1Service]
    });
  });

  it('should be created', inject([Page1Service], (service: Page1Service) => {
    expect(service).toBeTruthy();
  }));
});

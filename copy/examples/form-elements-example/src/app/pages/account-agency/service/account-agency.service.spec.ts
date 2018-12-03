import { TestBed, inject } from '@angular/core/testing';

import { AccountAgencyService } from './account-agency.service';

describe('AccountAgencyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountAgencyService]
    });
  });

  it('should be created', inject([AccountAgencyService], (service: AccountAgencyService) => {
    expect(service).toBeTruthy();
  }));
});

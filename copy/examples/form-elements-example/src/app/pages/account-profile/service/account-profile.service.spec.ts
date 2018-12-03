import { TestBed, inject } from '@angular/core/testing';

import { AccountProfileService } from './account-profile.service';

describe('AccountAgencyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountProfileService]
    });
  });

  it('should be created', inject([AccountProfileService], (service: AccountProfileService) => {
    expect(service).toBeTruthy();
  }));
});

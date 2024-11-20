import { TestBed } from '@angular/core/testing';

import { MaxlengthValidationService } from './maxlength-validation.service';

describe('MaxlengthValidationService', () => {
  let service: MaxlengthValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaxlengthValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

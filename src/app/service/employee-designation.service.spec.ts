import { TestBed } from '@angular/core/testing';

import { EmployeeDesignationService } from './employee-designation.service';

describe('EmployeeDesignationService', () => {
  let service: EmployeeDesignationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeDesignationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

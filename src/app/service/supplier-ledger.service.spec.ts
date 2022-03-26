import { TestBed } from '@angular/core/testing';

import { SupplierLedgerService } from './supplier-ledger.service';

describe('SupplierLedgerService', () => {
  let service: SupplierLedgerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupplierLedgerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

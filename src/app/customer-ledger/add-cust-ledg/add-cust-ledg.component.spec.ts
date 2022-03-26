import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustLedgComponent } from './add-cust-ledg.component';

describe('AddCustLedgComponent', () => {
  let component: AddCustLedgComponent;
  let fixture: ComponentFixture<AddCustLedgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCustLedgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCustLedgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSuppLedgComponent } from './add-supp-ledg.component';

describe('AddSuppLedgComponent', () => {
  let component: AddSuppLedgComponent;
  let fixture: ComponentFixture<AddSuppLedgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSuppLedgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSuppLedgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

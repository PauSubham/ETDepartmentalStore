import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrdctSaleComponent } from './add-prdct-sale.component';

describe('AddPrdctSaleComponent', () => {
  let component: AddPrdctSaleComponent;
  let fixture: ComponentFixture<AddPrdctSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPrdctSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPrdctSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

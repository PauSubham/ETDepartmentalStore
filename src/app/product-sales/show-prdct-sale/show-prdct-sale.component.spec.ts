import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPrdctSaleComponent } from './show-prdct-sale.component';

describe('ShowPrdctSaleComponent', () => {
  let component: ShowPrdctSaleComponent;
  let fixture: ComponentFixture<ShowPrdctSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPrdctSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPrdctSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

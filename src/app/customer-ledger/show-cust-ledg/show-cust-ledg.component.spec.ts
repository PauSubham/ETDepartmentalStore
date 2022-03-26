import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCustLedgComponent } from './show-cust-ledg.component';

describe('ShowCustLedgComponent', () => {
  let component: ShowCustLedgComponent;
  let fixture: ComponentFixture<ShowCustLedgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCustLedgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCustLedgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

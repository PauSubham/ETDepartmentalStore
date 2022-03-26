import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSuppLedgComponent } from './show-supp-ledg.component';

describe('ShowSuppLedgComponent', () => {
  let component: ShowSuppLedgComponent;
  let fixture: ComponentFixture<ShowSuppLedgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSuppLedgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSuppLedgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSalesComponent } from './show-sales.component';

describe('ShowSalesComponent', () => {
  let component: ShowSalesComponent;
  let fixture: ComponentFixture<ShowSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

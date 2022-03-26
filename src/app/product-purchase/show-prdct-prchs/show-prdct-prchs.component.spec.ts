import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPrdctPrchsComponent } from './show-prdct-prchs.component';

describe('ShowPrdctPrchsComponent', () => {
  let component: ShowPrdctPrchsComponent;
  let fixture: ComponentFixture<ShowPrdctPrchsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPrdctPrchsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPrdctPrchsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrdctPrchsComponent } from './add-prdct-prchs.component';

describe('AddPrdctPrchsComponent', () => {
  let component: AddPrdctPrchsComponent;
  let fixture: ComponentFixture<AddPrdctPrchsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPrdctPrchsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPrdctPrchsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

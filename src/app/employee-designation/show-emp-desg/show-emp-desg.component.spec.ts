import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEmpDesgComponent } from './show-emp-desg.component';

describe('ShowEmpDesgComponent', () => {
  let component: ShowEmpDesgComponent;
  let fixture: ComponentFixture<ShowEmpDesgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowEmpDesgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEmpDesgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmpDesgComponent } from './add-emp-desg.component';

describe('AddEmpDesgComponent', () => {
  let component: AddEmpDesgComponent;
  let fixture: ComponentFixture<AddEmpDesgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmpDesgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmpDesgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

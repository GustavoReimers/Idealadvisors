import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanFacilitiesComponent } from './loan-facilities.component';

describe('LoanFacilitiesComponent', () => {
  let component: LoanFacilitiesComponent;
  let fixture: ComponentFixture<LoanFacilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanFacilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

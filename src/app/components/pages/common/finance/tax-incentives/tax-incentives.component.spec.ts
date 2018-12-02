import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxIncentivesComponent } from './tax-incentives.component';

describe('TaxIncentivesComponent', () => {
  let component: TaxIncentivesComponent;
  let fixture: ComponentFixture<TaxIncentivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxIncentivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxIncentivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

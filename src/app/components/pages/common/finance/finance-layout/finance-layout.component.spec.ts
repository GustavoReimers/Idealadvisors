import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceLayoutComponent } from './finance-layout.component';

describe('FinanceLayoutComponent', () => {
  let component: FinanceLayoutComponent;
  let fixture: ComponentFixture<FinanceLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

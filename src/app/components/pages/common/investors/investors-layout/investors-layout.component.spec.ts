import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorsLayoutComponent } from './investors-layout.component';

describe('InvestorsLayoutComponent', () => {
  let component: InvestorsLayoutComponent;
  let fixture: ComponentFixture<InvestorsLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorsLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalLayoutComponent } from './capital-layout.component';

describe('CapitalLayoutComponent', () => {
  let component: CapitalLayoutComponent;
  let fixture: ComponentFixture<CapitalLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapitalLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitalLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

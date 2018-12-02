import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiduciaryLayoutComponent } from './fiduciary-layout.component';

describe('FiduciaryLayoutComponent', () => {
  let component: FiduciaryLayoutComponent;
  let fixture: ComponentFixture<FiduciaryLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiduciaryLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiduciaryLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

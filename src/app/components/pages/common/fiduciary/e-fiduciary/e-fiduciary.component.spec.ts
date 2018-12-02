import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EFiduciaryComponent } from './e-fiduciary.component';

describe('EFiduciaryComponent', () => {
  let component: EFiduciaryComponent;
  let fixture: ComponentFixture<EFiduciaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EFiduciaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EFiduciaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

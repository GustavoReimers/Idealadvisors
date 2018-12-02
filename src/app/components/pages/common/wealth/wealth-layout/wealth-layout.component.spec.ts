import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WealthLayoutComponent } from './wealth-layout.component';

describe('WealthLayoutComponent', () => {
  let component: WealthLayoutComponent;
  let fixture: ComponentFixture<WealthLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WealthLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WealthLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

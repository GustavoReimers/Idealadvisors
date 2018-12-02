import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactLayoutComponent } from './contact-layout.component';

describe('LayoutComponent', () => {
  let component: ContactLayoutComponent;
  let fixture: ComponentFixture<ContactLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

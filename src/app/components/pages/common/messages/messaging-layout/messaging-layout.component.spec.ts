import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagingLayoutComponent } from './messaging-layout.component';

describe('MessagingLayoutComponent', () => {
  let component: MessagingLayoutComponent;
  let fixture: ComponentFixture<MessagingLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagingLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagingLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MAComponent } from './m-a.component';

describe('MAComponent', () => {
  let component: MAComponent;
  let fixture: ComponentFixture<MAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

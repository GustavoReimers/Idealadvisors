import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EamRelationsComponent } from './eam-relations.component';

describe('EamRelationsComponent', () => {
  let component: EamRelationsComponent;
  let fixture: ComponentFixture<EamRelationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EamRelationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EamRelationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

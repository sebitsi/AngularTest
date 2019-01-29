import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vaja1Component } from './vaja1.component';

describe('Vaja1Component', () => {
  let component: Vaja1Component;
  let fixture: ComponentFixture<Vaja1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vaja1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vaja1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vaja2Component } from './vaja2.component';

describe('Vaja2Component', () => {
  let component: Vaja2Component;
  let fixture: ComponentFixture<Vaja2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vaja2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vaja2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

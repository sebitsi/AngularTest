import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnaComponent } from './ena.component';

describe('EnaComponent', () => {
  let component: EnaComponent;
  let fixture: ComponentFixture<EnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

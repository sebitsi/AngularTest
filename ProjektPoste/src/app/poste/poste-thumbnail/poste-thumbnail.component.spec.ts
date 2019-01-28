import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosteThumbnailComponent } from './poste-thumbnail.component';

describe('PosteThumbnailComponent', () => {
  let component: PosteThumbnailComponent;
  let fixture: ComponentFixture<PosteThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosteThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosteThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

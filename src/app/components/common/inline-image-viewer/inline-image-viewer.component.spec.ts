import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineImageViewerComponent } from './inline-image-viewer.component';

describe('InlineImageViewerComponent', () => {
  let component: InlineImageViewerComponent;
  let fixture: ComponentFixture<InlineImageViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineImageViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineImageViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

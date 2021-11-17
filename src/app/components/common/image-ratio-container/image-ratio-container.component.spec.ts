import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageRatioContainerComponent } from './image-ratio-container.component';

describe('ImageRatioContainerComponent', () => {
  let component: ImageRatioContainerComponent;
  let fixture: ComponentFixture<ImageRatioContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageRatioContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageRatioContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

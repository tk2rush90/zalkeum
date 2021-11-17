import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridImageViewerComponent } from './grid-image-viewer.component';

describe('GridImageViewerComponent', () => {
  let component: GridImageViewerComponent;
  let fixture: ComponentFixture<GridImageViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridImageViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridImageViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

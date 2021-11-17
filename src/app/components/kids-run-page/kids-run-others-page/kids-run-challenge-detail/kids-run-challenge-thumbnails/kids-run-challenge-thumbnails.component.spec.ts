import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsRunChallengeThumbnailsComponent } from './kids-run-challenge-thumbnails.component';

describe('KidsRunChallengeThumbnailsComponent', () => {
  let component: KidsRunChallengeThumbnailsComponent;
  let fixture: ComponentFixture<KidsRunChallengeThumbnailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsRunChallengeThumbnailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsRunChallengeThumbnailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

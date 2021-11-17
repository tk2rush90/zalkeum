import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsRunChallengeTopDescriptionComponent } from './kids-run-challenge-top-description.component';

describe('KidsRunChallengeTopDescriptionComponent', () => {
  let component: KidsRunChallengeTopDescriptionComponent;
  let fixture: ComponentFixture<KidsRunChallengeTopDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsRunChallengeTopDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsRunChallengeTopDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

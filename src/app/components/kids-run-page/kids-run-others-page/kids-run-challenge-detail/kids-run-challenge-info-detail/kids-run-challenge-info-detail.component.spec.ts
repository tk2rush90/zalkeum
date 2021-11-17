import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsRunChallengeInfoDetailComponent } from './kids-run-challenge-info-detail.component';

describe('KidsRunChallengeInfoDetailComponent', () => {
  let component: KidsRunChallengeInfoDetailComponent;
  let fixture: ComponentFixture<KidsRunChallengeInfoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsRunChallengeInfoDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsRunChallengeInfoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

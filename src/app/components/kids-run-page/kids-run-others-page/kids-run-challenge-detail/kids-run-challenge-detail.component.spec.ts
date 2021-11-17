import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsRunChallengeDetailComponent } from './kids-run-challenge-detail.component';

describe('KidsRunChallengeDetailComponent', () => {
  let component: KidsRunChallengeDetailComponent;
  let fixture: ComponentFixture<KidsRunChallengeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsRunChallengeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsRunChallengeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

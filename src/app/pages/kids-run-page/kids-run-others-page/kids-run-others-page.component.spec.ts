import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsRunOthersPageComponent } from './kids-run-others-page.component';

describe('KidsRunOthersPageComponent', () => {
  let component: KidsRunOthersPageComponent;
  let fixture: ComponentFixture<KidsRunOthersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsRunOthersPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsRunOthersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

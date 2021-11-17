import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsRunPageComponent } from './kids-run-page.component';

describe('KidsRunPageComponent', () => {
  let component: KidsRunPageComponent;
  let fixture: ComponentFixture<KidsRunPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsRunPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsRunPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

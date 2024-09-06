import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqWelcomeTextComponent } from './faq-welcome-text.component';

describe('FaqWelcomeTextComponent', () => {
  let component: FaqWelcomeTextComponent;
  let fixture: ComponentFixture<FaqWelcomeTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqWelcomeTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqWelcomeTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitiesInfoComponent } from './facilities-info.component';

describe('FacilitiesInfoComponent', () => {
  let component: FacilitiesInfoComponent;
  let fixture: ComponentFixture<FacilitiesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacilitiesInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilitiesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableInfoComponent } from './timetable-info.component';

describe('TimetableInfoComponent', () => {
  let component: TimetableInfoComponent;
  let fixture: ComponentFixture<TimetableInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimetableInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimetableInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

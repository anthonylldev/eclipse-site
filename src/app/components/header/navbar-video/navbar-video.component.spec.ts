import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarVideoComponent } from './navbar-video.component';

describe('NavbarVideoComponent', () => {
  let component: NavbarVideoComponent;
  let fixture: ComponentFixture<NavbarVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarVideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

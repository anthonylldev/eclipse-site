import { ChangeDetectionStrategy, Component } from '@angular/core';
import {EclipseComponent} from "../../icons";

@Component({
  selector: 'app-navbar-video',
  standalone: true,
  imports: [
    EclipseComponent
  ],
  templateUrl: './navbar-video.component.html',
  styleUrl: './navbar-video.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarVideoComponent {
  toggleMenu(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    const menuItems = document.querySelector('.menu-items');
    const blurContainer = document.querySelector('.blur-container');

    if (menuItems && blurContainer) {
      if (checkbox.checked) {
        menuItems.classList.add('show');
        blurContainer.classList.add('show');
      } else {
        menuItems.classList.remove('show');
        blurContainer.classList.remove('show');
      }
    }
  }
}

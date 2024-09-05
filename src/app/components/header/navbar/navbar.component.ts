import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  inject,
  input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {NgClass} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {CheckboxModule} from "primeng/checkbox";
import {LogoComponent} from "../navbar-video/components";
import {EclipseComponent} from "../../icons";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    RouterLinkActive,
    CheckboxModule,
    LogoComponent,
    EclipseComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  @ViewChild('menuItems') menuItems?: ElementRef;
  @ViewChild('blurContainer') blurContainer?: ElementRef;
  @ViewChild('menuToggle') menuToggle?: ElementRef<HTMLInputElement>;
  renderer: Renderer2 = inject(Renderer2)
  transparent = input<boolean>();

  toggleMenu() {
    if (this.menuItems && this.menuToggle && this.blurContainer) {
      if (this.menuToggle.nativeElement.checked) {
        this.renderer.addClass(this.menuItems.nativeElement, 'show');
        this.renderer.addClass(this.blurContainer.nativeElement, 'show');
      } else {
        this.renderer.removeClass(this.menuItems.nativeElement, 'show');
        this.renderer.removeClass(this.blurContainer.nativeElement, 'show');
      }
    }
  }

  @HostListener('scroll')
  @HostListener('window:scroll')
  onWindowScroll() {
    if (window.scrollY > 100) {
      if (this.blurContainer) {
        this.renderer.addClass(this.blurContainer.nativeElement, 'showBlur');
      }
    } else {
      if (this.blurContainer) {
        this.renderer.removeClass(this.blurContainer.nativeElement, 'showBlur');
      }
    }
  }
}

import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-eclipse',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './eclipse.component.html',
  styleUrl: './eclipse.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EclipseComponent {
  navbarBrand = input<boolean>();
}

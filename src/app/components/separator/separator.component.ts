import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {NgClass, NgStyle} from "@angular/common";

@Component({
  selector: 'app-separator',
  standalone: true,
  imports: [
    NgStyle,
    NgClass
  ],
  templateUrl: './separator.component.html',
  styleUrl: './separator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeparatorComponent {
  slim = input<boolean>()
  black = input<boolean>()
}

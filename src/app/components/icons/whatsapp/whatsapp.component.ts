import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {NgClass, NgStyle} from "@angular/common";

@Component({
  selector: 'app-whatsapp',
  standalone: true,
  imports: [
    NgClass,
    NgStyle
  ],
  templateUrl: './whatsapp.component.html',
  styleUrl: './whatsapp.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhatsappComponent {
  onlyPointer = input<boolean>();
  size = input<string>();
  stroke = input<number>();
}

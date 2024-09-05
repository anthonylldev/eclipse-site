import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-whatsapp',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './whatsapp.component.html',
  styleUrl: './whatsapp.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhatsappComponent {
  onlyPointer = input<boolean>();
}

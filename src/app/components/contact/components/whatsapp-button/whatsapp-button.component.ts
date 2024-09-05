import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [],
  templateUrl: './whatsapp-button.component.html',
  styleUrl: './whatsapp-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhatsappButtonComponent {

}

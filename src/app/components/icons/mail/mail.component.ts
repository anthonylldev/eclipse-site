import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-mail',
  standalone: true,
  imports: [],
  templateUrl: './mail.component.html',
  styleUrl: './mail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MailComponent {

}

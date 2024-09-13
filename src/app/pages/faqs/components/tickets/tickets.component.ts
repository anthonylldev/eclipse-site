import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketsComponent {
  refundShow = false;
  ticketsShow = false;

  toggleRefund() {
    const aux = !this.refundShow;
    this.reset();
    this.refundShow = aux;
  }

  toggleTickets() {
    const aux = !this.ticketsShow;
    this.reset();
    this.ticketsShow = aux;
  }

  private reset() {
    this.refundShow = false;
    this.ticketsShow = false;
  }
}

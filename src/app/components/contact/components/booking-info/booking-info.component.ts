import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-booking-info',
  standalone: true,
  imports: [],
  templateUrl: './booking-info.component.html',
  styleUrl: './booking-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingInfoComponent {

}

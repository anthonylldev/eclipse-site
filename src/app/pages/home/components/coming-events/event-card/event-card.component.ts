import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {IEvent} from "../../../../../model";
import {Ripple} from "primeng/ripple";
import {DatePipe, NgOptimizedImage} from "@angular/common";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [
    Ripple,
    NgOptimizedImage,
    RouterLink,
    DatePipe
  ],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventCardComponent {
  event = input.required<IEvent>();
  router = inject(Router)

  navigate() {
    this.router.navigate(['/events', this.event().id])
  }
}

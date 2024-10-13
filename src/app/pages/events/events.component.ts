import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MainContainerComponent} from "../../layout";
import {EventService} from "../../services";
import {AsyncPipe} from "@angular/common";
import {EventCardComponent} from "../home/components/coming-events/event-card";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
    MainContainerComponent,
    AsyncPipe,
    EventCardComponent,
    RouterLink
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventsComponent {
  eventService = inject(EventService);
  events$ = this.eventService.getAllEvents()
}

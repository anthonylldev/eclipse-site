import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {EventService} from "../../../../services";
import {Observable} from "rxjs";
import {HttpResponse} from "@angular/common/http";
import {IEvent} from "../../../../model";
import {MainContainerComponent} from "../../../../layout";
import {AsyncPipe} from "@angular/common";
import {EventCardComponent} from "./event-card";
import {Button} from "primeng/button";
import {Ripple} from "primeng/ripple";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-coming-events',
  standalone: true,
  imports: [
    MainContainerComponent,
    AsyncPipe,
    EventCardComponent,
    Button,
    Ripple,
    RouterLink
  ],
  templateUrl: './coming-events.component.html',
  styleUrl: './coming-events.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComingEventsComponent {
  private eventService = inject(EventService);
  private router = inject(Router);
  events$: Observable<HttpResponse<IEvent[]>> = this.eventService.getComingEvents();

  navigate() {
    this.router.navigate(['/events']);
  }
}

import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {MainContainerComponent} from "../../layout";
import {EventService} from "../../services";
import {Observable} from "rxjs";
import {HttpResponse} from "@angular/common/http";
import {IEvent} from "../../model";
import {AsyncPipe, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-event-info',
  standalone: true,
    imports: [
        MainContainerComponent,
        AsyncPipe,
        NgOptimizedImage
    ],
  templateUrl: './event-info.component.html',
  styleUrl: './event-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventInfoComponent {
  eventService = inject(EventService)
  event$?: Observable<HttpResponse<IEvent>>

  @Input()
  set id(eventId: string) {
    this.event$ = this.eventService.getEventById(eventId);
  }
}

import {inject, Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {IEvent} from "../../model";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  resourceUrl = environment.apiUrl + 'events';
  http = inject(HttpClient);

  getComingEvents(): Observable<HttpResponse<IEvent[]>> {
    return this.http.get<IEvent[]>(`${this.resourceUrl}/coming`, {observe: 'response'});
  }

  getEventById(id: number): Observable<HttpResponse<IEvent>> {
    return this.http.get<IEvent>(`${this.resourceUrl}/${id}`, {observe: 'response'});
  }
}

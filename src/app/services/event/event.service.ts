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

  getAllEvents(): Observable<HttpResponse<IEvent[]>> {
    return this.http.get<IEvent[]>(this.resourceUrl, {observe: 'response'})
  }

  getComingEvents(): Observable<HttpResponse<IEvent[]>> {
    return this.http.get<IEvent[]>(`${this.resourceUrl}/coming`, {observe: 'response'});
  }

  getPreviousEvents(): Observable<HttpResponse<IEvent[]>> {
    return this.http.get<IEvent[]>(`${this.resourceUrl}/previous`, {observe: 'response'});
  }

  getEventById(id: string): Observable<HttpResponse<IEvent>> {
    return this.http.get<IEvent>(`${this.resourceUrl}/${id}`, {observe: 'response'});
  }
}

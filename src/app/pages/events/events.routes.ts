import {Route} from "@angular/router";
import {NavbarComponent} from "../../components";
import {EventsComponent} from "./events.component";

export const eventsRoutes: Route = {
  path: 'events',
  children: [
    {
      path: '',
      component: EventsComponent
    },
    {
      path: '',
      component: NavbarComponent,
      outlet: 'navbar'
    }
  ]
}

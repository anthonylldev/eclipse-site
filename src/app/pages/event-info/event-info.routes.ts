import {Route} from "@angular/router";
import {EventInfoComponent} from "./event-info.component";
import {NavbarComponent} from "../../components";

export const eventInfoRoutes: Route = {
  path: 'events',
  children: [
    {
      path: ':id',
      component: EventInfoComponent
    },
    {
      path: '',
      component: NavbarComponent,
      outlet: 'navbar'
    }
  ]
}

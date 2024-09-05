import {Route} from "@angular/router";
import {NavbarComponent} from "../header";
import {ContactComponent} from "./contact.component";

export const contactRoutes: Route = {
  path: 'contact',
  children: [
    {
      path: '',
      component: ContactComponent
    },
    {
      path: '',
      component: NavbarComponent,
      outlet: 'navbar'
    }
  ]
}

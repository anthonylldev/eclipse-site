import {Route} from "@angular/router";
import {ContactComponent} from "./contact.component";
import {NavbarComponent} from "../../components";

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

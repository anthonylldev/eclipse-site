import {Route} from "@angular/router";
import {NavbarComponent} from "../header";
import {FaqsComponent} from "./faqs.component";

export const faqsRoutes: Route = {
  path: 'faqs',
  children: [
    {
      path: '',
      component: FaqsComponent
    },
    {
      path: '',
      component: NavbarComponent,
      outlet: 'navbar'
    }
  ]
}

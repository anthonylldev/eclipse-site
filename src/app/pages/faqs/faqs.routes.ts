import {Route} from "@angular/router";
import {FaqsComponent} from "./faqs.component";
import {NavbarComponent} from "../../components";

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

import {Route} from "@angular/router";
import {FaqComponent} from "./faq.component";
import {NavbarComponent} from "../header";

export const faqRoutes: Route = {
  path: 'faq',
  children: [
    {
      path: '',
      component: FaqComponent
    },
    {
      path: '',
      component: NavbarComponent,
      outlet: 'navbar'
    }
  ]
}

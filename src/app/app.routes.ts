import {Routes} from '@angular/router';
import {contactRoutes, homeRoutes} from "./components";
import {faqRoutes} from "./components/faq/faq.routes";

export const routes: Routes = [
  homeRoutes,
  contactRoutes,
  faqRoutes
];

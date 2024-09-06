import {Routes} from '@angular/router';
import {contactRoutes, faqsRoutes, homeRoutes} from "./components";
import {dressCodeRoutes} from "./components/dress-code";

export const routes: Routes = [
  homeRoutes,
  contactRoutes,
  faqsRoutes,
  dressCodeRoutes
];

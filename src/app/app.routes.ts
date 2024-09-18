import {Routes} from '@angular/router';
import {contactRoutes, dressCodeRoutes, faqsRoutes, homeRoutes} from "./pages";
import {eventsRoutes} from "./pages/events";
import {eventInfoRoutes} from "./pages/event-info";

export const routes: Routes = [
  homeRoutes,
  contactRoutes,
  faqsRoutes,
  dressCodeRoutes,
  eventsRoutes,
  eventInfoRoutes
];

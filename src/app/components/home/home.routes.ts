import {Route} from '@angular/router';
import {HomeComponent} from "./home.component";
import {NavbarVideoComponent} from "../header";

export const homeRoutes: Route = {
  path: '',
  children: [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: '',
      component: NavbarVideoComponent,
      outlet: 'navbar'
    }
  ]
};

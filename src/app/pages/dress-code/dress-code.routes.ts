import {Route} from "@angular/router";
import {DressCodeComponent} from "./dress-code.component";
import {NavbarComponent} from "../../components";

export const dressCodeRoutes: Route = {
  path: 'dress-code',
  children: [
    {
      path: '',
      component: DressCodeComponent
    },
    {
      path: '',
      component: NavbarComponent,
      outlet: 'navbar'
    }
  ]
}

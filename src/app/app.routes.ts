import {Routes} from '@angular/router';
import {ContactComponent, FaqComponent, HomeComponent, NavbarComponent, NavbarVideoComponent} from "./components";

export const routes: Routes = [
  {
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
  },
  {
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
  },
  {
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
];

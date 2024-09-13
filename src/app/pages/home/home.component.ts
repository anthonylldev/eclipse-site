import { ChangeDetectionStrategy, Component } from '@angular/core';
import {BrandsComponent, ComingEventsComponent, FacilitiesComponent, WelcomeComponent} from "./components";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BrandsComponent,
    WelcomeComponent,
    FacilitiesComponent,
    ComingEventsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

}

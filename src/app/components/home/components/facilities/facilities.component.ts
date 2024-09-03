import { ChangeDetectionStrategy, Component } from '@angular/core';
import {SeparatorComponent} from "../../../separator";
import {LocationInfoComponent} from "./location-info";
import {FacilitiesInfoComponent} from "./facilities-info";
import {MainContainerComponent} from "../../../../layout";

@Component({
  selector: 'app-facilities',
  standalone: true,
  imports: [
    SeparatorComponent,
    LocationInfoComponent,
    FacilitiesInfoComponent,
    MainContainerComponent
  ],
  templateUrl: './facilities.component.html',
  styleUrl: './facilities.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FacilitiesComponent {

}

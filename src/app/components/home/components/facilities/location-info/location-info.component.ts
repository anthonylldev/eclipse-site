import { ChangeDetectionStrategy, Component } from '@angular/core';
import {ArrowRightComponent} from "../../../../icons";

@Component({
  selector: 'app-location-info',
  standalone: true,
  imports: [
    ArrowRightComponent
  ],
  templateUrl: './location-info.component.html',
  styleUrl: './location-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocationInfoComponent {

}

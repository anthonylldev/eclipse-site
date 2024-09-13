import { ChangeDetectionStrategy, Component } from '@angular/core';
import {SeparatorComponent} from "../../../../../components";

@Component({
  selector: 'app-facilities-info',
  standalone: true,
  imports: [
    SeparatorComponent
  ],
  templateUrl: './facilities-info.component.html',
  styleUrl: './facilities-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FacilitiesInfoComponent {

}

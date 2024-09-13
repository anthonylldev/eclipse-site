import { ChangeDetectionStrategy, Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-general-info',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './general-info.component.html',
  styleUrl: './general-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GeneralInfoComponent {

}

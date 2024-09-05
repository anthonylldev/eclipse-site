import { ChangeDetectionStrategy, Component } from '@angular/core';
import {EclipseComponent} from "../../../../icons";

@Component({
  selector: 'app-logo',
  standalone: true,
    imports: [
        EclipseComponent
    ],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoComponent {

}

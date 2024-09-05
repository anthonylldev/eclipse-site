import { ChangeDetectionStrategy, Component } from '@angular/core';
import {EclipseComponent} from "../../../../icons";

@Component({
  selector: 'app-video',
  standalone: true,
    imports: [
        EclipseComponent
    ],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoComponent {

}

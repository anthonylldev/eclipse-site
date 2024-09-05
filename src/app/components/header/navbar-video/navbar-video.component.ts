import { ChangeDetectionStrategy, Component } from '@angular/core';
import {EclipseComponent} from "../../icons";
import {LogoComponent, VideoComponent} from "./components";
import {NavbarComponent} from "../navbar";

@Component({
  selector: 'app-navbar-video',
  standalone: true,
  imports: [
    EclipseComponent,
    VideoComponent,
    LogoComponent,
    NavbarComponent
  ],
  templateUrl: './navbar-video.component.html',
  styleUrl: './navbar-video.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarVideoComponent {}

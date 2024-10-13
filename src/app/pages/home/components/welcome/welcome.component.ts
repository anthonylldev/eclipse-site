import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MainContainerComponent} from "../../../../layout";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    MainContainerComponent,
    NgOptimizedImage
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeComponent {

}

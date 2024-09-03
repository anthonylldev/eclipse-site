import { ChangeDetectionStrategy, Component } from '@angular/core';
import {SeparatorComponent} from "../separator";
import {SocialMediaComponent} from "./social-media";
import {MainContainerComponent} from "../../layout";
import {FooterContentComponent} from "./footer-content";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    SeparatorComponent,
    SocialMediaComponent,
    MainContainerComponent,
    FooterContentComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

}

import {ChangeDetectionStrategy, Component} from '@angular/core';
import {
  FacebookComponent,
  GithubComponent,
  InstagramComponent,
  MailComponent,
  TiktokComponent,
  WhatsappComponent
} from "../icons";

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [
    FacebookComponent,
    InstagramComponent,
    TiktokComponent,
    WhatsappComponent,
    MailComponent,
    GithubComponent
  ],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialMediaComponent {

}

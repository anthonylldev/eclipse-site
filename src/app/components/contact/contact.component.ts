import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MainContainerComponent} from "../../layout";
import {NgOptimizedImage} from "@angular/common";
import {ContactFormComponent} from "./components";
import {WhatsappComponent} from "../icons";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    MainContainerComponent,
    NgOptimizedImage,
    ContactFormComponent,
    WhatsappComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {

}

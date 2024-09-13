import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MainContainerComponent} from "../../layout";
import {NgOptimizedImage} from "@angular/common";
import {
  BookingInfoComponent,
  GeneralInfoComponent,
  MapComponent,
  TimetableInfoComponent,
  WhatsappButtonComponent
} from "./components";
import {WhatsappComponent} from "../../components";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    MainContainerComponent,
    NgOptimizedImage,
    WhatsappComponent,
    MapComponent,
    WhatsappButtonComponent,
    GeneralInfoComponent,
    BookingInfoComponent,
    TimetableInfoComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {

}

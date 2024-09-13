import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AccessComponent, FaqWelcomeTextComponent, GeneralComponent, TicketsComponent,} from "./components";
import {MainContainerComponent} from "../../layout";

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [
    FaqWelcomeTextComponent,
    MainContainerComponent,
    GeneralComponent,
    AccessComponent,
    TicketsComponent,
  ],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqsComponent {

}

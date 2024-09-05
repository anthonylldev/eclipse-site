import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {ContactFormGroup, ContactFormService} from "../../services";
import {FloatLabelModule} from "primeng/floatlabel";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {InputNumberModule} from "primeng/inputnumber";
import {Button} from "primeng/button";
import {PrimeNGConfig} from "primeng/api";

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FloatLabelModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    Button
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactFormComponent implements OnInit {
  contactFormService = inject(ContactFormService)
  contactForm: ContactFormGroup = this.contactFormService.createContactForm();

  p = inject(PrimeNGConfig)

  ngOnInit() {
    this.p.ripple = true;
  }

  send() {

  }
}

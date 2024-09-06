import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SeparatorComponent} from "../../../separator";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-access',
  standalone: true,
  imports: [
    SeparatorComponent,
    RouterLink
  ],
  templateUrl: './access.component.html',
  styleUrl: './access.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccessComponent {
  securityShow = false
  dressCodeShow = false
  bagShow = false
  identificationShow = false
  ageShow = false

  toggleSecurity() {
    const aux = !this.securityShow;
    this.reset();
    this.securityShow = aux;
  }

  toggleDressCode() {
    const aux = !this.dressCodeShow;
    this.reset();
    this.dressCodeShow = aux;
  }

  toggleBag() {
    const aux = !this.bagShow;
    this.reset();
    this.bagShow = aux;
  }

  toggleIdentification() {
    const aux = !this.identificationShow;
    this.reset();
    this.identificationShow = aux;
  }

  toggleAge() {
    const aux = !this.ageShow;
    this.reset();
    this.ageShow = aux;
  }

  private reset() {
    this.securityShow = false
    this.dressCodeShow = false
    this.bagShow = false
    this.identificationShow = false
    this.ageShow = false
  }
}

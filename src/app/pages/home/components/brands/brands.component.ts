import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MainContainerComponent} from "../../../../layout";
import {IBrand} from "../../model";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [
    MainContainerComponent,
    NgStyle
  ],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrandsComponent {
  brands: IBrand[] = [
    {
      title: 'Heineken',
      label: 'Heineken, se abrirá en una nueva pestaña',
      lang: 'es',
      url: 'https://www.heinekenespana.es/',
      imgUrl: 'https://www.heinekenespana.es/sites/theheinekencompany/files/default_images/heineken-logo.svg'
    },
    {
      title: 'DonJulio',
      label: 'DonJulio, se abrirá en una nueva pestaña',
      lang: 'es',
      url: 'https://www.donjulio.com/',
      imgUrl: 'https://www.donjulio.com/icons/dj-logo.svg'
    },
    {
      title: 'Old Parr',
      label: 'Old Parr, se abrirá en una nueva pestaña',
      lang: 'es',
      url: 'https://www.oldparrscotch.com/',
      imgUrl: 'https://www.oldparrscotch.com/img/OldParr-logo.svg'
    },
    {
      title: 'The Macallan',
      label: 'The Macallan, se abrirá en una nueva pestaña',
      lang: 'es',
      url: 'https://www.themacallan.com/es',
      imgUrl: 'https://www.themacallan.com/_next/static/media/Logo.099e24b8.svg'
    },
    {
      title: 'Buchanans',
      label: 'Buchanans, se abrirá en una nueva pestaña',
      lang: 'es',
      url: 'https://www.buchananswhisky.com/es-us',
      imgUrl: 'https://www.buchananswhisky.com/buchanans-seal.png?fm=avif&w=256&q=60'
    },
    {
      title: 'Moet',
      label: 'Moet, se abrirá en una nueva pestaña',
      lang: 'es',
      url: 'https://www.moet.com/es-es',
      imgUrl: 'https://www.moet.com/themes/custom/moet/images/logo-footer.svg'
    }
  ]
}

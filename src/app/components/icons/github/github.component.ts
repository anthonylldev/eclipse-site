import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-github',
  standalone: true,
  imports: [],
  templateUrl: './github.component.html',
  styleUrl: './github.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GithubComponent {

}

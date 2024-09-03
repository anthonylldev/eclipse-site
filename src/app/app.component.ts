import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent, NavbarComponent} from "./components";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'eclipse-site';
}

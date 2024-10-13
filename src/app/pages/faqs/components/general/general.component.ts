import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-general',
  standalone: true,
  imports: [],
  templateUrl: './general.component.html',
  styleUrl: './general.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GeneralComponent {
  cardShow = false;
  cashShow = false;
  drinkFoodShow = false;
  photoVideoShow = false;
  lostShow = false;

  toggleCard() {
    const aux = !this.cardShow;
    this.reset();
    this.cardShow = aux;
  }

  toggleCash() {
    const aux = !this.cashShow;
    this.reset();
    this.cashShow = aux;
  }

  toggleDrinkFood() {
    const aux = !this.drinkFoodShow;
    this.reset();
    this.drinkFoodShow = aux;
  }

  togglePhotoVideo() {
    const aux = !this.photoVideoShow;
    this.reset();
    this.photoVideoShow = aux;
  }

  toggleLost() {
    const aux = !this.lostShow;
    this.reset();
    this.lostShow = aux;
  }

  private reset() {
    this.cardShow = false;
    this.cashShow = false;
    this.drinkFoodShow = false;
    this.photoVideoShow = false;
    this.lostShow = false;
  }
}

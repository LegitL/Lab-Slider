import { Component, OnInit  } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  reorderMode = false;

  /**
   * ...
   *
   * @param modalController ...
   */
  constructor(
    private modalController: ModalController,
  ) { }

  /**
   * ...
   */
  public ngOnInit(): void {
  }

  /**
   * ...
   *
   * @param index ...
   */
  public toggleReorderMode(): void {
    this.reorderMode = !this.reorderMode;
  }

  /**
   * ...
   *
   * @param event ...
   */
  public doReorder(event: any): void {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log(`Dragged from index ${event.detail.from} to ${event.detail.to}`);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    event.detail.complete();
  }

  /**
   * ...
   */
  public dismissModal(): void {
    this.modalController.dismiss();
  }
}

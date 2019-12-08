import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FavoritesPage } from '../favorites/favorites.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOptions = {
    slidesPerView: 'auto',
    zoom: false,
  };


  /**
   * ...
   */
  public constructor(
    private modalController: ModalController
  ) {}

  /**
   * ...
   * 
   * @param event ...
   */
  public onThumbnailTap(event) {
    const tappedIndex = event.target.swiper.clickedIndex;
    if (tappedIndex !== undefined) {
      console.log(tappedIndex);
      if (tappedIndex === 0) {
        // 'more' has been tapped/clicked
        this.showMoreModal();
      } else {
        // Thumbnail with styles has been tapped/clicked
      }
    }
  }

  /*
   * ...
   */
  private async showMoreModal(): Promise<void> {
    const modal = await this.modalController.create({
      component: FavoritesPage
    });
    return await modal.present();
  }
}

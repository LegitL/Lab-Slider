import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FavoritesPage } from '../favorites/favorites.page';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  slideOptions = {
    slidesPerView: 'auto',
    zoom: false,
  };

  items: any[];

  /**
   * ...
   */
  public constructor(
    private modalController: ModalController,
    private imagesService: ImagesService
  ) {}

  public ngOnInit(): void {
    this.items = this.imagesService.getAllItems();
  }

  /**
   * ...
   *
   * @param event ...
   */
  public onThumbnailTap(event) {
    const tappedIndex = event.target.swiper.clickedIndex;
    if (tappedIndex !== undefined) {
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

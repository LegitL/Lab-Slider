import { Component, OnInit  } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  reorderMode = false;
  items: any[];

  /**
   * ...
   *
   * @param modalController ...
   */
  constructor(
    private modalController: ModalController,
    private toastController: ToastController,
    private imagesService: ImagesService,
  ) {}

  /**
   * ...
   */
  public ngOnInit(): void {
    this.items = this.imagesService.getAllItems();
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
    this.imagesService.moveItem(event.detail.from, event.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    event.detail.complete();
  }

  /**
   * ...
   */
  public add() {
    const item = {
      isWikiart: false,
      isPublic: false,
      title: '',
      description: '',
      url: `https://picsum.photos/seed/${Math.random()}/200/300`,
    };
    this.imagesService.addItem(item);
  }

  /**
   * ...
   *
   * @param item ...
   */
  public async togglePublic(item: any) {
    item.isPublic = !item.isPublic;
    const toast = await this.toastController.create({
      message: (item.isPublic) ? 'Item made public' : 'Item made private',
      color: 'light',
      duration: 2000
    });
    toast.present();
  }

  /**
   * ...
   *
   * @param event ...
   * @param index ...
   */
  public onTitleBlur(event: any, index: number): void {
    const newTitle = event.target.value;
    if (this.items[index].title !== newTitle) {
      this.items[index].title = newTitle;
    }
  }

  /**
   * ...
   *
   * @param event ...
   * @param index ...
   */
  public onDescriptionBlur(event: any, index: number): void {
    const newDescription = event.target.value;
    if (this.items[index].description !== newDescription) {
      this.items[index].description = newDescription;
    }
  }

  /**
   * ...
   *
   * @param index ...
   */
  public delete(index: number): void {
    this.imagesService.deleteItem(index);
  }

  /**
   * ...
   */
  public dismissModal(): void {
    this.modalController.dismiss();
  }
}

import { BaseComponent } from '../base.js';

export class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(url: string, imageTitle: string) {
    super(`<section class="image">
          <div class="image_holder"><img class="image_thumbnail"></div>
          <h2 class="image_title"></h2>
          </section>`);
    const imageElement = this.element.querySelector('.image_thumbnail')! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = imageTitle;

    const titleElement = this.element.querySelector('.image_title')! as HTMLParagraphElement;
    titleElement.textContent = imageTitle;
  }
}

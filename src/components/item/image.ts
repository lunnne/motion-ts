import { BaseComponent } from '../base.js';

export class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(url: string, imageTitle: string) {
    super(`<section class="image">
          <div class="image_holder"><img class="image_thumbnail"></div>
          <p class="image_title"></p>
          </section>`);
    const imageElement = this.element.querySelector('.image_thumbnail')! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = imageTitle;

    const titleElement = this.element.querySelector('.image_title')! as HTMLParagraphElement;
    titleElement.textContent = imageTitle;
  }
}

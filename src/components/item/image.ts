export class ImageComponent {
  private element: HTMLElement;
  constructor(url: string, imageTitle: string) {
    const template = document.createElement('template');
    template.innerHTML = `<section class="image">
            <div class="image_holder"><img class="image_thumbnail" src="" alt=""></div>
            <p class="image_title"></p>
        </section>`;
    this.element = template.content.firstElementChild! as HTMLElement;

    const imageElement = this.element.querySelector('.image_thumbnail')! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = imageTitle;
  }
  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
  }
}

import { ImageComponent } from './item/image.js';

export class pageComponent {
  private element: HTMLUListElement;
  private readonly image : ImageComponent;
  constructor() {
    this.element = document.createElement('ul');
    this.element.setAttribute('class', 'page');
    this.element.textContent = 'This is PageComponent';
    this.image = new ImageComponent('https://picsum.photos/200/300', 'my Image');
    this.image.attachTo(this.element, 'beforeend')
  }

  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
  }
}

import { BaseComponent, Component } from '../base.js';

export interface Composable {
  addChild(child: Component): void;
}

type OnCloseListener = () => void;

export class PageComponent extends BaseComponent<HTMLUListElement> implements Composable {
  constructor() {
    super('<ul class="page"></ul>');
  }
  addChild(section: Component) {
    const item = new PageItemComponent();
    item.addChild(section);
    item.attachTo(this.element, 'beforeend');
    item.setOnCloseListener(()=> {
     item.removeFrom(this.element) 
    })
  }
}

export class PageItemComponent extends BaseComponent<HTMLElement> implements Composable {
  private closeListener: OnCloseListener | undefined;
  constructor() {
    super(`<li class="page-item">
        <section class="page-item_body"></section>
        <div class="page-item_controls">
          <button class="close">&times;</button>
        </div>
      </li>`);
    const deleteBtn = this.element.querySelector('.close')! as HTMLButtonElement;
    deleteBtn.onclick = () => {
      this.closeListener && this.closeListener();
    };
  }

  addChild(child: Component) {
    const ItemContainer = this.element.querySelector('.page-item_body')! as HTMLElement;
    child.attachTo(ItemContainer);
  }

  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }
}

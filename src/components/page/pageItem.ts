import { BaseComponent } from '../base.js';


export class pageItemComponent extends BaseComponent<HTMLElement> {
    constructor(itemElement : HTMLObjectElement) {
        super(`<li class="page-item">
        <section class="page-item_body"></section>
        <div class="page-item_controls">
          <button class="close">&times;</button>
        </div>
      </li>`)
        
        const ItemBox = this.element.querySelector('.page-item')! as HTMLLIElement
        ItemBox.appendChild(itemElement)

    }
}
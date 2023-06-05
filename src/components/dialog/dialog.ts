import { BaseComponent, Component } from '../base.js';
import { Composable } from '../page/page.js';

type OnCloseListener = () => void;
type OnSubmitListener = () => void;

export interface MediaData {
  readonly title: string;
  readonly url: string;
}

export interface TextData {
  readonly title: string;
  readonly body: string;
}

export class DialogComponent extends BaseComponent<HTMLElement> implements Composable {
  closeListener?: OnCloseListener;
  submitListener?: OnSubmitListener;
  constructor() {
    super(`<dialog class="dialog">
    <div class="dialog_container">
      <button class="close">&times;</button>
      <div id="dialog_body"></div>
      <button class="dialog_submit">ADD</button>
    </div>
  </dialog>`);

    const closeBtn = this.element.querySelector('.close')! as HTMLButtonElement;
    const submitBtn = this.element.querySelector('.dialog_submit') as HTMLButtonElement;

    closeBtn.onclick = () => {
      this.closeListener && this.closeListener();
    };
    submitBtn.onclick = () => {
      this.submitListener && this.submitListener();
    };
  }

  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }
  setOnSubmitListener(listener: OnSubmitListener) {
    this.submitListener = listener;
  }
  addChild(child: Component): void {
    const body = this.element.querySelector('#dialog_body')! as HTMLDivElement;
    child.attachTo(body);
  }
}

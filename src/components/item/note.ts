import { BaseComponent } from '../base.js';

export class NoteComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, bodyText: string) {
    super(`<section class="note">
        <h2 class="note_title"></h2>
        <p class="note_body"></p>
    </section>`);

    const noteTitle = this.element.querySelector('.note_title')! as HTMLHeadingElement
    noteTitle.textContent = title
    const noteBody = this.element.querySelector('.note_body')! as HTMLParagraphElement
    noteBody.textContent = bodyText
  }
}

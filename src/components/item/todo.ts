import { BaseComponent } from '../base.js';
export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, body: string) {
    super(`<section class="todo">
        <h2 class="todo_title"></h2>
        <input type="checkbox" id="todo_checkbox"/>
        <label for="todo_checkbox" class="todo_label"></label>
        </section>`);

    const todoTitle = this.element.querySelector('.todo_title')! as HTMLHeadingElement;
    todoTitle.textContent = title;
    const todoText = this.element.querySelector('.todo_label')! as HTMLInputElement;
    todoText.insertAdjacentText('afterend', body);
  }
}

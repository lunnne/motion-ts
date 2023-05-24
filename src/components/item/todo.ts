import { BaseComponent } from '../base.js';
export class TodoComponent extends BaseComponent<HTMLElement> {

    constructor(title: string, text: string) {
        super (`<section class="todo">
        <h2 class="todo_title"></h2>
        <input type="checkbox" class="todo_checkbox"></input>
    </section>`)

    const todoTitle = this.element.querySelector('.todo_title')! as HTMLHeadingElement
    todoTitle.textContent = title
    const todoText= this.element.querySelector('.todo_checkbox')! as HTMLInputElement
    todoText.insertAdjacentText('afterend', text)
    }
}
export interface Component {
    attachTo(parent: HTMLElement, position?: InsertPosition) : void;
}
// Encapsulate the HTML element creation 
// HTML Element 를 만드는 과정을 캡슐화 해준다.

export class BaseComponent<T extends HTMLElement> implements Component{
  protected readonly element: T;

  constructor(htmlTemplateString: string) {
    const template = document.createElement('template');
    template.innerHTML = htmlTemplateString;
    this.element = template.content.firstElementChild! as T;
  }
  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
  }
}

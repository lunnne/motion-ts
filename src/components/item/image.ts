export class ImageComponent {
    private element : HTMLElement
    constructor(path: string , imageTitle : string) {
        this.element = document.createElement('li')
        this.element.innerHTML = `
        <img src=${path} alt="image">
        <p>${imageTitle}</p>`
    }
    attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
        parent.insertAdjacentElement(position, this.element);
      }
}
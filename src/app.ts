import { Composable, PageComponent, PageItemComponent } from './components/page/page.js';
import { ImageComponent } from './components/item/image.js';
// import { VideoComponent } from './components/item/video.js';
// import { NoteComponent } from './components/item/note.js';
// import { TodoComponent } from './components/item/todo.js';
import { Component } from './components/base.js';
import { DialogComponent } from './components/dialog/dialog.js';
import { MediaSectionInput } from './components/dialog/Input/media-input.js';

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement, dialogRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    // const video = new VideoComponent('https://youtu.be/D7cwvvA7cP0', 'my Video');
    // this.page.addChild(video);

    // const note = new NoteComponent('my Note', 'typescript project');
    // this.page.addChild(note);

    // const todo = new TodoComponent('오늘의 할일', 'motion project');
    // this.page.addChild(todo);

    const imageBtn = document.querySelector('#image_btn')! as HTMLButtonElement;

    imageBtn.addEventListener('click', () => {
      const dialog = new DialogComponent();
      const inputSection = new MediaSectionInput()
      dialog.setOnCloseListener(() => {
        dialog.removeFrom(dialogRoot);
      });
      dialog.setOnSubmitListener(() => {
        // 섹션을 만들어서 페이지에 추가 해준다
        const image = new ImageComponent(inputSection.title, inputSection.url)
        this.page.addChild(image)
        dialog.removeFrom(dialogRoot);
      });
      dialog.addChild(inputSection)
      dialog.attachTo(dialogRoot);
    });
  }
}

new App(document.querySelector('.document')! as HTMLElement, document.body);

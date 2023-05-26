import { Composable, PageComponent, PageItemComponent } from './components/page/page.js';
import { ImageComponent } from './components/item/image.js';
// import { VideoComponent } from './components/item/video.js';
import { NoteComponent } from './components/item/note.js';
import { TodoComponent } from './components/item/todo.js';
import { Component } from './components/base.js';
import { DialogComponent } from './components/dialog/dialog.js';

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent)
    this.page.attachTo(appRoot);

    const image = new ImageComponent('https://picsum.photos/200/300', 'my Image');
    this.page.addChild(image);

    // const video = new VideoComponent('https://youtu.be/D7cwvvA7cP0', 'my Video');
    // this.page.addChild(video);

    const note = new NoteComponent('my Note', 'typescript project');
    this.page.addChild(note);

    const todo = new TodoComponent('오늘의 할일', 'motion project');
    this.page.addChild(todo);

    const imageBtn = document.querySelector('#image_btn')! as HTMLButtonElement
    imageBtn.addEventListener('click',()=> {
      console.log("clicked");
      
      const dialog = new DialogComponent()
      dialog.setOnCloseListener(()=> {
        dialog.removeFrom(document.body)
      })
      dialog.setOnSubmitListener(() => {
        // 섹션을 만들어서 페이지에 추가 해준다
        dialog.removeFrom(document.body);
      });
      dialog.attachTo(document.body);
    })
  }
}

new App(document.querySelector('.document')! as HTMLElement);

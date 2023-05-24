import { pageComponent } from './components/page/page.js';
import { ImageComponent } from './components/item/image.js';
import { VideoComponent } from './components/item/video.js';
import { NoteComponent } from './components/item/note.js';
import { TodoComponent } from './components/item/todo.js';

class App {
  private readonly page: pageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new pageComponent();
    this.page.attachTo(appRoot);
   
    const image = new ImageComponent('https://picsum.photos/200/300', 'my Image');
    image.attachTo(appRoot, 'beforeend');

    const video = new VideoComponent("http://www.youtube.com/embed/M7lc1UVf-VE", 'my Video');
    video.attachTo(appRoot, 'beforeend')

    const note = new NoteComponent('my Note', 'typescript project')
    note.attachTo(appRoot, 'beforeend')

    const todo = new TodoComponent('오늘의 할일', 'motion project')
    todo.attachTo(appRoot, 'beforeend')
  
  }
}

new App(document.querySelector('.document')! as HTMLElement);

import { PageComponent } from './components/page/page.js';
import { ImageComponent } from './components/item/image.js';
import { VideoComponent } from './components/item/video.js';
import { NoteComponent } from './components/item/note.js';
import { TodoComponent } from './components/item/todo.js';
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const image = new ImageComponent('https://picsum.photos/200/300', 'my Image');
        this.page.addChild(image);
        const video = new VideoComponent('http://www.youtube.com/embed/M7lc1UVf-VE', 'my Video');
        this.page.addChild(video);
        const note = new NoteComponent('my Note', 'typescript project');
        this.page.addChild(note);
        const todo = new TodoComponent('오늘의 할일', 'motion project');
        this.page.addChild(todo);
    }
}
new App(document.querySelector('.document'));

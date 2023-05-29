import { PageComponent, PageItemComponent } from './components/page/page.js';
import { ImageComponent } from './components/item/image.js';
import { NoteComponent } from './components/item/note.js';
import { TodoComponent } from './components/item/todo.js';
import { DialogComponent } from './components/dialog/dialog.js';
class App {
    constructor(appRoot) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);
        const image = new ImageComponent('https://picsum.photos/200/300', 'my Image');
        this.page.addChild(image);
        const note = new NoteComponent('my Note', 'typescript project');
        this.page.addChild(note);
        const todo = new TodoComponent('오늘의 할일', 'motion project');
        this.page.addChild(todo);
        const imageBtn = document.querySelector('#image_btn');
        imageBtn.addEventListener('click', () => {
            const dialog = new DialogComponent();
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(document.body);
            });
            dialog.setOnSubmitListener(() => {
                dialog.removeFrom(document.body);
            });
            dialog.attachTo(document.body);
        });
    }
}
new App(document.querySelector('.document'));

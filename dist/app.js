import { PageComponent, PageItemComponent } from './components/page/page.js';
import { ImageComponent } from './components/item/image.js';
import { VideoComponent } from './components/item/video.js';
import { NoteComponent } from './components/item/note.js';
import { TodoComponent } from './components/item/todo.js';
import { DialogComponent } from './components/dialog/dialog.js';
import { MediaSectionInput } from './components/dialog/Input/media-input.js';
import { TextSectionInput } from './components/dialog/Input/text-input.js';
class App {
    constructor(appRoot, dialogRoot) {
        this.dialogRoot = dialogRoot;
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);
        this.bindElementToDialog('#image_btn', MediaSectionInput, (input) => new ImageComponent(input.title, input.url));
        this.bindElementToDialog('#video_btn', MediaSectionInput, (input) => new VideoComponent(input.title, input.url));
        this.bindElementToDialog('#note_btn', TextSectionInput, (input) => new NoteComponent(input.title, input.body));
        this.bindElementToDialog('#todo_btn', TextSectionInput, (input) => new TodoComponent(input.title, input.body));
    }
    bindElementToDialog(selector, InputComponent, makeSection) {
        const element = document.querySelector(selector);
        element.addEventListener('click', () => {
            console.log('clicked!');
            const dialog = new DialogComponent();
            const input = new InputComponent();
            dialog.addChild(input);
            dialog.attachTo(this.dialogRoot);
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(this.dialogRoot);
            });
            dialog.setOnSubmitListener(() => {
                const image = makeSection(input);
                this.page.addChild(image);
                dialog.removeFrom(this.dialogRoot);
            });
        });
    }
}
new App(document.querySelector('.document'), document.body);

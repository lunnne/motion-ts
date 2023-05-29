import { PageComponent, PageItemComponent } from './components/page/page.js';
import { ImageComponent } from './components/item/image.js';
import { DialogComponent } from './components/dialog/dialog.js';
import { MediaSectionInput } from './components/dialog/Input/media-input.js';
class App {
    constructor(appRoot, dialogRoot) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);
        const imageBtn = document.querySelector('#image_btn');
        imageBtn.addEventListener('click', () => {
            const dialog = new DialogComponent();
            const inputSection = new MediaSectionInput();
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitListener(() => {
                const image = new ImageComponent(inputSection.title, inputSection.url);
                this.page.addChild(image);
                dialog.removeFrom(dialogRoot);
            });
            dialog.addChild(inputSection);
            dialog.attachTo(dialogRoot);
        });
    }
}
new App(document.querySelector('.document'), document.body);

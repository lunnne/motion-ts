import { Composable, PageComponent, PageItemComponent } from './components/page/page.js';
import { ImageComponent } from './components/item/image.js';
import { VideoComponent } from './components/item/video.js';
import { NoteComponent } from './components/item/note.js';
import { TodoComponent } from './components/item/todo.js';
import { Component } from './components/base.js';
import { DialogComponent, MediaData, TextData } from './components/dialog/dialog.js';
import { MediaSectionInput } from './components/dialog/Input/media-input.js';
import { TextSectionInput } from './components/dialog/Input/text-input.js';

type InputComponentConstructor<T extends (MediaData | TextData) & Component> = {
  new (): T;
};
class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement, private dialogRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    this.bindElementToDialog<MediaSectionInput>(
      '#image_btn',
      MediaSectionInput,
      (input: MediaSectionInput) => new ImageComponent(input.title, input.url)
    );
    this.bindElementToDialog<MediaSectionInput>(
      '#video_btn',
      MediaSectionInput,
      (input: MediaSectionInput) => new VideoComponent(input.title, input.url)
    );
    this.bindElementToDialog<TextSectionInput>(
      '#note_btn',
      TextSectionInput,
      (input: TextSectionInput) => new NoteComponent(input.title, input.body)
    );
    this.bindElementToDialog<TextSectionInput>(
      '#todo_btn',
      TextSectionInput,
      (input: TextSectionInput) => new TodoComponent(input.title, input.body)
    );

    // for demo
    this.page.addChild(new ImageComponent('Image1', 'https://picsum.photos/200/300?grayscale'))
    this.page.addChild(new VideoComponent('video1', 'https://www.youtube.com/watch?v=jBdQ65yHB_U&t=276&ab_channel=%EB%B0%B1%EC%A2%85%EC%9B%90PAIKJONGWON'))
    this.page.addChild(new NoteComponent('Note title1', 'Note body1'));
    this.page.addChild(new TodoComponent('Todotitle1', 'TodoList1'));
    this.page.addChild(new ImageComponent('Image2', 'https://picsum.photos/200/300?grayscale'))
    this.page.addChild(new VideoComponent('video2', 'https://www.youtube.com/watch?v=jBdQ65yHB_U&t=276&ab_channel=%EB%B0%B1%EC%A2%85%EC%9B%90PAIKJONGWON'))
    this.page.addChild(new NoteComponent('Note title2', 'Note body2'));
    this.page.addChild(new TodoComponent('Todotitle2', 'TodoList2'));
  }

  private bindElementToDialog<T extends (MediaData | TextData) & Component>(
    selector: string,
    InputComponent: InputComponentConstructor<T>,
    makeSection: (input: T) => Component
  ) {
    const element = document.querySelector(selector)! as HTMLButtonElement;
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
        // 섹션을 만들어서 페이지에 추가 해준다
        const image = makeSection(input);
        this.page.addChild(image);
        dialog.removeFrom(this.dialogRoot);
      });
    });
  }
}

new App(document.querySelector('.document')! as HTMLElement, document.body);

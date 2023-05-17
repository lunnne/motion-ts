import { BaseComponent } from '../base.js';

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(url: string, title: string) {
    super(`<section class="video">
        <iframe
          id="player"
          type="text/html"
          width="640"
          height="390"
          frameborder="0"
        ></iframe>
        <p class="video_title"></p>
      </section>`);

    const videoElement = this.element.querySelector('#player')! as HTMLIFrameElement;
    videoElement.src = url;
    const videoTitle = this.element.querySelector('.video_title')! as HTMLParagraphElement;
    videoTitle.textContent = title;
  }
}
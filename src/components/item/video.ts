// import { BaseComponent } from '../base.js';

// export class VideoComponent extends BaseComponent<HTMLElement> {
//   constructor(url: string, title: string) {
//     super(`<section class="video">
//     <div class="video_player"><iframe class="video_iframe"></iframe></div>
//         <h3 class="video_title"></h3>
//       </section>`);

//     const videoElement = this.element.querySelector('.video_iframe')! as HTMLIFrameElement;
  
//     // 정규표현식 Regex
//     videoElement.src = this.convertToEmbeddedURL(url);
//     const videoTitle = this.element.querySelector('.video_title')! as HTMLHeadingElement;
//     videoTitle.textContent = title;
//   }

//   private convertToEmbeddedURL(url: string): string {
//     const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
//     const match = url.match(regExp);
//     const videoId = match ? match[1] || match[2] : undefined;

//     if (videoId) {
//       return `http://www.youtube.com/embed/${videoId}`;
//     }
//     return url;
//   }
// }

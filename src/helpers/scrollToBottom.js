import { animateScroll } from 'react-scroll';

export const scrollToBottom = (id) => {
   setTimeout(() => {
      animateScroll.scrollToBottom({
         containerId: id,
         duration: 0
      });
   }, 0);
}

export const scrollToBottomAnimated = (id) => {

   setTimeout(() => {
      animateScroll.scrollToBottom({
         containerId: id,
         duration: 250,
         offset: 100,
      });
   }, 0);

}

import { morseToStr } from './translateLogic/morseToStr.js';
import { strToMorse } from './translateLogic/strToMorse.js';

const strTextArea = document.querySelector<HTMLTextAreaElement>('#strTextArea');
const morseStrTextArea =
  document.querySelector<HTMLTextAreaElement>('#morseStrTextArea');

console.log(strTextArea);
console.log(morseStrTextArea);

if (!strTextArea || !morseStrTextArea) {
  throw Error('Translate textarea could not be found on page');
}

strTextArea?.addEventListener('input', () => {
  console.log('captured event strTextArea');
  morseStrTextArea.value = strToMorse(strTextArea.value);
});

morseStrTextArea?.addEventListener('input', () => {
  strTextArea.value = morseToStr(morseStrTextArea.value);
});

import { ImapMorseToChar, mapMorseToChar } from './translateMap';

export function morseToStr(str: string) {
  if (str === '') {
    return '';
  }

  if (str.trim() === '') {
    return '';
  }

  const morseWords = str.trim().split('/');

  const words = morseWords.map((morseWord) => {
    const morseChars = morseWord.trim().split(/\s+/);

    const chars = morseChars.map((morseChar) => {
      const char = mapMorseToChar[morseChar as keyof ImapMorseToChar];
      if (char === undefined) return '#';
      return char;
    });

    return chars.join('');
  });

  return words.join(' ');
}

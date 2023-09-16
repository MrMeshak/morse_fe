import { IMapCharToMorse, mapCharToMorse } from './translateMap.js';

export function strToMorse(str: string) {
  if (str === '') {
    return '';
  }

  if (str.trim() === '') {
    return '';
  }

  const words = str.trim().toUpperCase().split(/\s+/);

  const morseWords = words.map((word) => {
    const chars = word.split('');

    const morseChars = chars.map((char) => {
      const morseChar = mapCharToMorse[char as keyof IMapCharToMorse];
      if (morseChar === undefined) return '#';
      return morseChar;
    });

    return morseChars.join(' ');
  });

  return morseWords.join(' / ');
}

import { morseToStr } from '../morseToStr';

describe('translate - strToMorse', () => {
  describe('when input morseStr is empty', () => {
    it('should return an empty string', () => {
      expect(morseToStr('')).toBe('');
    });
  });

  describe('when input morseStr is just spaces', () => {
    it('should return a empty string', () => {
      expect(morseToStr('    ')).toBe('');
    });
  });

  describe('when input morseStr has starting or trailing whitespace', () => {
    it('should trim white space and return a translated str', () => {
      const morseStr =
        '    - .-- .. -. -.- .-.. . / - .-- .. -. -.- .-.. . / .-.. .. - - .-.. . / ... - .- .-. .-.-.-      ';
      const expected = 'TWINKLE TWINKLE LITTLE STAR.';
      expect(morseToStr(morseStr)).toBe(expected);
    });
  });

  describe('when input morseStr contains duplicate spaces between morseChars', () => {
    it('it should remove duplicated spaces and return the translated str', () => {
      const morseStr =
        '....       .       .-..    .-..    ---    /   .--  ---  .-.   .-..   -..';
      const expected = 'HELLO WORLD';

      expect(morseToStr(morseStr)).toBe(expected);
    });
  });

  describe.each([
    ['.... . .-.. .-.. --- / --.--.- /.-- --- .-. .-.. -..', 'HELLO # WORLD'],
  ])('when input morseStr contains invalid morseChar', (morseStr, expected) => {
    it('should return a translated str with invalid morseChar replaced with  a "#"', () => {
      expect(morseToStr(morseStr)).toBe(expected);
    });
  });

  describe.each([
    [
      '.- / -... / -.-. / -.. / . / ..-. / --. / .... / .. / .--- / -.- / .-.. / -- / -. / --- / .--. / --.- / .-. / ... / - / ..- / ...- / .-- / -..- / -.-- / --.. / ----- / .---- / ..--- / ...-- / ....- / ..... / -.... / --... / ---.. / ----. / .-... / .----. / .--.-. / -.--. / -.--.- / ---... / --..-- / -...- / -.-.-- / .-.-.- / -....- / .-.-. / .-..-. / ..--.. / -..-.',
      'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 0 1 2 3 4 5 6 7 8 9 & \' @ ( ) : , = ! . - + " ? /',
    ],
    [
      '- .... . / -.. --- --- .-. / ... .-.. .- -- -- . -.. / --- -. / - .... . / .-- .- - . .-. -- . .-.. --- -. .-.-.-',
      'THE DOOR SLAMMED ON THE WATERMELON.',
    ],
    [
      '. ...- . .-. -.-- / -- .- -. .- --. . .-. / ... .... --- ..- .-.. -.. / -... . / .- -... .-.. . / - --- / .-. . -.-. .. - . / .- - / .-.. . .- ... - / - . -. / -. ..- .-. ... . .-. -.-- / .-. .... -.-- -- . ... / -... .- -.-. -.- .-- .- .-. -.. .-.-.-',
      'EVERY MANAGER SHOULD BE ABLE TO RECITE AT LEAST TEN NURSERY RHYMES BACKWARD.',
    ],
  ])('when input morseStr contains valid morseChars', (morseStr, expected) => {
    it('should return translated str', () => {
      expect(morseToStr(morseStr)).toBe(expected);
    });
  });
});

import { strToMorse } from '../strToMorse';

describe('translate - strToMorse', () => {
  describe('when input str is empty', () => {
    it('should return an empty string', () => {
      expect(strToMorse('')).toBe('');
    });
  });

  describe('when input string is just spaces', () => {
    it('should return an empty string', () => {
      expect(strToMorse('    ')).toBe('');
    });
  });

  describe('when input string has starting or trailing spaces', () => {
    it('should return the morseStr with starting and trailing spaces trimmed', () => {
      const str =
        '    They desperately needed another drummer since the current one only knew how to play bongos.      ';
      const expected =
        '- .... . -.-- / -.. . ... .--. . .-. .- - . .-.. -.-- / -. . . -.. . -.. / .- -. --- - .... . .-. / -.. .-. ..- -- -- . .-. / ... .. -. -.-. . / - .... . / -.-. ..- .-. .-. . -. - / --- -. . / --- -. .-.. -.-- / -.- -. . .-- / .... --- .-- / - --- / .--. .-.. .- -.-- / -... --- -. --. --- ... .-.-.-';
      expect(strToMorse(str)).toBe(expected);
    });
  });

  describe('when input string contains duplicate spaces between words', () => {
    it(`should return the morseStr with duplicate spaces removed`, () => {
      const str =
        'The   minute        she   landed  she     understood  the  reason  this    was a     fly-over state.';
      const expected =
        '- .... . / -- .. -. ..- - . / ... .... . / .-.. .- -. -.. . -.. / ... .... . / ..- -. -.. . .-. ... - --- --- -.. / - .... . / .-. . .- ... --- -. / - .... .. ... / .-- .- ... / .- / ..-. .-.. -.-- -....- --- ...- . .-. / ... - .- - . .-.-.-';
      expect(strToMorse(str)).toBe(expected);
    });
  });

  describe.each([
    [
      'Barking dogs and screaming 3*4 toddlers have the || unique ability to turn friendly  >neighbors into cranky enemies.',
      '-... .- .-. -.- .. -. --. / -.. --- --. ... / .- -. -.. / ... -.-. .-. . .- -- .. -. --. / ...-- # ....- / - --- -.. -.. .-.. . .-. ... / .... .- ...- . / - .... . / # # / ..- -. .. --.- ..- . / .- -... .. .-.. .. - -.-- / - --- / - ..- .-. -. / ..-. .-. .. . -. -.. .-.. -.-- / # -. . .. --. .... -... --- .-. ... / .. -. - --- / -.-. .-. .- -. -.- -.-- / . -. . -- .. . ... .-.-.-',
    ],
  ])('when input string contains invalid characters', (str, expected) => {
    it(`should return the morseStr with invalid chars translated to a "#" character`, () => {
      expect(strToMorse(str)).toBe(expected);
    });
  });

  describe.each([
    [
      'a b c d e f g h i j k l m n o p q r s t u v w x y z 0 1 2 3 4 5 6 7 8 9 & \' @ ( ) : , = ! . - + " ? /',
      '.- / -... / -.-. / -.. / . / ..-. / --. / .... / .. / .--- / -.- / .-.. / -- / -. / --- / .--. / --.- / .-. / ... / - / ..- / ...- / .-- / -..- / -.-- / --.. / ----- / .---- / ..--- / ...-- / ....- / ..... / -.... / --... / ---.. / ----. / .-... / .----. / .--.-. / -.--. / -.--.- / ---... / --..-- / -...- / -.-.-- / .-.-.- / -....- / .-.-. / .-..-. / ..--.. / -..-.',
    ],
    [
      'She used her own hair in the soup to give it more flavor.',
      '... .... . / ..- ... . -.. / .... . .-. / --- .-- -. / .... .- .. .-. / .. -. / - .... . / ... --- ..- .--. / - --- / --. .. ...- . / .. - / -- --- .-. . / ..-. .-.. .- ...- --- .-. .-.-.-',
    ],
    [
      'She had the gift of being able to paint songs.',
      '... .... . / .... .- -.. / - .... . / --. .. ..-. - / --- ..-. / -... . .. -. --. / .- -... .-.. . / - --- / .--. .- .. -. - / ... --- -. --. ... .-.-.-',
    ],
    [
      'She did a happy dance because all of the socks from the dryer matched.',
      '... .... . / -.. .. -.. / .- / .... .- .--. .--. -.-- / -.. .- -. -.-. . / -... . -.-. .- ..- ... . / .- .-.. .-.. / --- ..-. / - .... . / ... --- -.-. -.- ... / ..-. .-. --- -- / - .... . / -.. .-. -.-- . .-. / -- .- - -.-. .... . -.. .-.-.-',
    ],
  ])('when input string contains valid characters', (str, expected) => {
    it(`should return morseStr`, () => {
      expect(strToMorse(str)).toBe(expected);
    });
  });
});

import { Translations, localize } from './1-taggedTamplates';
import { curry } from './6-crrying';
import { multiline } from './3-multiline';
import { highlightKeywords } from './2-highlited';

const HEADER_COLOR = '\x1b[1;33m';
const NORMAL_COLOR = '\x1b[1;37m';

const log = (message: string) => {
  console.log(HEADER_COLOR);
  console.log(`==============  ${message}  ==============`);
  console.log(NORMAL_COLOR);
};

{
  log('Tagged Templates');
  const translation: Translations = {
    en: {
      greet: 'Hello',
      intro: 'Welcome to our website'
    },
    fr: {
      greet: 'Bonjour',
      intro: 'Bienvenue sur notre site web'
    }
  };

  const fr = 'fr';
  const en = 'en';
  const greeting = 'greet';
  const introduction = 'intro';

  const toFr = localize(translation, fr);
  const toEn = localize(translation, en);
  console.log(toFr`${greeting}! ${introduction}`);
  console.log(toEn`${greeting}! ${introduction}`);
}

{
  log('Highlight Keywords');
  const keywords = ['JavaScript', 'template', 'tagged'];
  const template =
 'Learn ${1} tagged templates to create custom ${1} literals for ${2} manipulation.';
  const highlighted = highlightKeywords(template, keywords);
  console.log(highlighted);
}

{
  log('Multiline');
  const code = multiline`
  function add(a, b) {
  return a + b;
  }`;
  console.log(code);
}

{
  log('Currying');
  const multiply = (a: number, b: number, c: number) => a * b * c;
  const curriedMultiply = curry(multiply, 3);

  const result = curriedMultiply(2, 3, 4);

  console.log('Result:', result); // Expected: 24
}

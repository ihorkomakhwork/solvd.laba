export interface Translations {
   [languge: string]: {
        [sentance: string]: string
   }
}

type Localize = (
  translation: Translations,
  language: string,) => (template: TemplateStringsArray, ...args: string[]) => string ;

export const localize: Localize = (translation,  language) => (template, ...args) => {
  const sentances  = translation[language];
  return template.reduce((final, arg, counter) => {
    const argument = args[counter];
    const sentance = sentances[argument] ? sentances[argument] : '';
    return final += arg + sentance;
  }, '');
};


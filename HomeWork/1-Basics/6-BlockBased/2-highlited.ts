const TAMPLATE_REGEXP = /\${(\d+)}/g;
const INT_REGEXP = /\d+/;

const HIGHLIGT_OPEN = '<span class=\'highlight\'>';
const HIGHLIGT_CLOSE = '</span>';

export const highlightKeywords = (tamplate: string, args: string[]): string => {
  const tampl = tamplate.match(TAMPLATE_REGEXP);
  if (!tampl) return tamplate;
  tampl.forEach((element: string) => {
    const [ match ] = element.match(INT_REGEXP) as RegExpMatchArray;
    if (match) tamplate = tamplate.replace(element,
      `${HIGHLIGT_OPEN}${args[match]}${HIGHLIGT_CLOSE}`);
  });
  return tamplate;
};



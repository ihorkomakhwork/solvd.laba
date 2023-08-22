export const multiline = (tamplate: TemplateStringsArray): string => {
  const [str] = tamplate;
  const lines =  str.split('\n');
  lines.shift();
  const result = lines.map((line, index) => `${index + 1} ${line}`).join('\n');
  return result;
};

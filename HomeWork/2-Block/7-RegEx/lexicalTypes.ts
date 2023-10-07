/**
 * A class containing regular expressions for various lexical types in JSON.
 */
export class LexicalTypes{
   /** A regular expression for matching double quotes. */
   static readonly DOUBLE_QUOTES =  /"/g;
   /** A regular expression for matching numbers. */
   static readonly NUMBER =  /(\d+)(\.\d+)?/g;
   /** A regular expression for matching strings enclosed in double quotes. */
   static readonly STRING = /"([^"]*)"/g;
   /** A regular expression for matching opening braces. */
   static readonly OPEN_BRACES = /\{/g;
   /** A regular expression for matching closing braces. */
   static readonly CLOSE_BRACES = /\}/g;
   /** A regular expression for matching opening square brackets. */
   static readonly OPEN_SQUARE_BRACKETS =  /\[/g;
   /** A regular expression for matching closing square brackets. */
   static readonly CLOSE_SQUARE_BRACKETS = /\]/g;
   /** A regular expression for matching the true literal. */
   static readonly TRUE_LITERAL = /true/g;
   /** A regular expression for matching the false literal. */
   static readonly FALSE_LITERAL = /false/g;
   /** A regular expression for matching the null literal. */
   static readonly NULL_LITERAL = /null/g;
   /** A regular expression for matching whitespace characters. */
   static readonly WHITESPACE = /\s/g; 
   /** A regular expression for matching colons. */
   static readonly COLON = /:/g;
   /** A regular expression for matching commas. */
   static readonly COMMA = /,/g;
};

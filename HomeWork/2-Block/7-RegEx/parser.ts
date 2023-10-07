import  { Tokens } from './tokens'; 
import { TTtokens } from './contracts/types';
import { IToken} from './contracts/interfaces';

const STEP = 1;

/**
 * A class that parses a JSON string into a JavaScript object.
 */
export class Parser {
  /**
   * Creates a new instance of the Parser class.
   * @param tokens An array of tokens representing the JSON string to be parsed.
   * @param counter An optional parameter representing the current position in the token array.
   */
  constructor(public readonly tokens: TTtokens, private counter: number = 0) {}

  /**
   * An object containing mapping for functions to diff types.
   */
  private readonly types = {
    'OPEN_SQUARE_BRACKETS': () => this.parseArray(),
    'OPEN_BRACES': () => this.parseObject(),
    'DOUBLE_QUOTES': () => this.parseString(),
    'NUMBER': () => this.parseNumber(),
    'TRUE_LITERAL': () => this.parseBoolean(),
    'FALSE_LITERAL': () => this.parseBoolean(),
    'NULL_LITERAL': () => this.parseNull(),
  };

  /**
   * Returns the current token being parsed.
   */
  private get currentToken() {
    return this.tokens[this.counter];
  }

  /**
   * Increments the current position in the token array by a given coefficient.
   * @param coefficent An optional parameter representing the coefficient to increment the position by.
   * @returns The new position in the token array.
   */
  private iterate(coefficent: number = 1): number {
    return (this.counter += STEP * coefficent);
  }

  /**
   * Validates the token array to ensure it is a valid JSON input.
   * @param tokens An array of tokens representing the JSON string to be parsed.
   * @throws An error if the token array is not a valid JSON input.
   */
  private validateTokens(tokens: TTtokens) {
    if (!tokens.length) throw new Error('Expected JSON value');
    const object = this.currentToken.type === 'OPEN_BRACES';
    const array = this.currentToken.type === 'OPEN_SQUARE_BRACKETS';
    const string = this.currentToken.type === 'DOUBLE_QUOTES';
    const literal = object || array;
    if (literal) return;
    if (string && this.tokens.length === 3) return;
    else if (this.tokens.length === 1) return;
    throw new Error('Expected JSON input');
  }

  /**
   * Starts the parsing process and returns the resulting JavaScript object.
   * @returns The resulting JavaScript object.
   * @throws An error if the token array is not a valid JSON input or if there is a syntax error in the JSON string.
   */
  public start() {
    try {
      this.validateTokens(this.tokens);
      const JSON = this.parseValue(this.currentToken);
      return JSON;
    } catch (error: any) {
      const { position } = this.currentToken;
      throw new Error(`Syntax error at position ${position}: ${error.message}`);
    }
  }

  /**
   * Parses a JSON value based on its token type.
   * @param token The token representing the JSON value to be parsed.
   * @returns The parsed JavaScript value.
   * @throws An error if the token type is not recognized or if there is an error parsing the value.
   */
  private parseValue(token: IToken) {
    const { type } = token;
    const serialize = this.types[type];
    return serialize();
  }

  /**
   * Parses a JSON number value.
   * @returns The parsed JavaScript number.
   * @throws An error if the token value is not a valid number.
   */
  private parseNumber(): number {
    const num = Number(this.currentToken.value);
    if (isNaN(num)) throw new Error('Expected number in JSON');
    this.iterate();
    return num;
  }

  /**
   * Parses a JSON boolean value.
   * @returns The parsed JavaScript boolean.
   * @throws An error if the token value is not a valid boolean.
   */
  private parseBoolean(): boolean {
    const valid = Tokens.isBoolean(this.currentToken.value);
    if (!valid) throw new Error('Expected boolean in JSON');
    const bool = this.currentToken.value === 'true';
    this.iterate();
    return bool;
  }

  /**
   * Parses a JSON null value.
   * @returns The parsed JavaScript null value.
   * @throws An error if the token value is not null.
   */
  private parseNull(): null {
    if (this.currentToken.value !== 'null') throw new Error('Expected null in JSON');
    this.iterate();
    return null;
  }

  /**
   * Parses a JSON string value.
   * @returns The parsed JavaScript string.
   * @throws An error if the token value is not a valid string.
   */
  private parseString(): string {
    /** 
    * We expect to have 3 tokens in this.tokens 
    * because we are based on JSON grammar rules.
    **/
    
    const [openQuotes, contain, closeQuotes] = this.tokens.slice(this.counter, this.iterate(3));
    const quoted = Tokens.isQuote(openQuotes.value) && Tokens.isQuote(closeQuotes.value);
    if (!quoted) throw new Error(`Expected string in JSON`);
    return contain.value;
  }

  /**
   * Parses a JSON object value.
   * @returns The parsed JavaScript object.
   * @throws An error if the token value is not a valid object.
   */
  private parseObject(): object {
    const output = {};
    /**
     * Check if the next token is a closing brace
     * and if it is, return empty object.
     * **/
    const next = this.tokens[this.counter + STEP];
    const isCloseBraces = next.type === 'CLOSE_BRACES';
    if (isCloseBraces) {
      this.iterate(2);
      return output;
    }

    while (this.counter < this.tokens.length) {
      this.iterate();

      const prop = this.parseProperty();
      Object.assign(output, prop);

      if (this.currentToken.type === 'CLOSE_BRACES') {
        this.iterate();
        return output;
      }
      if (this.currentToken.type !== 'COMMA') throw new Error('Expected comma (,) or closing brace (}) in JSON object');
    }
    throw new Error('Expected closing brace (}) in JSON object');
  }

  /**
   * Parses a JSON object property.
   * The same as I mantioned above, we expect some symbols in some order.
   * @returns An object containing the parsed property key and value.
   * @throws An error if the property key or value is not valid.
   */
  private parseProperty() {
    const key = this.parseString();
    const [colon, contain] = this.tokens.slice(this.counter, this.iterate(2));
    this.iterate(-1);
    if (colon.type !== 'COLON') throw new Error('Expected colon (:) after property name in JSON object)');
    const value = this.parseValue(contain);
    return { [key]: value };
  }

  /**
   * Parses a JSON array value.
   * @returns The parsed JavaScript array.
   * @throws An error if the token value is not a valid array.
   */
  private parseArray() {
    const output: Array<any> = [];
    const next = this.tokens[this.counter + STEP];
    const isCloseSqureBrackets = next.type === 'CLOSE_SQUARE_BRACKETS';
    if (isCloseSqureBrackets) {
      this.iterate(2);
      return output;
    }
    while (this.counter < this.tokens.length) {
      this.iterate();
      const value = this.parseValue(this.currentToken);
      output.push(value);
      const isCloseBrackets = this.currentToken.type === 'CLOSE_SQUARE_BRACKETS';
      if (isCloseBrackets) {
        this.iterate();
        return output;
      }
      if (this.currentToken.type !== 'COMMA') throw new Error('Expected comma (,) or closing bracket (]) in JSON array');
    }
    throw new Error('Expected closing bracket (]) in JSON array');
  }
}

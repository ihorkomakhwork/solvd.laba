import { IToken} from './contracts/interfaces';
import { Parser } from './parser';
import { Tokens } from './tokens';

/**
 * Parses a JSON string and returns the resulting JavaScript object.
 * @param str - The JSON string to parse.
 * @returns The resulting JavaScript object.
 */
export const JSONparse = (str: string) => {
    const tokenizator = new Tokens();
    const tokens = tokenizator.scan(str)
    const parser = new Parser(tokens);
    const JSON = parser.start();
    return JSON;
};

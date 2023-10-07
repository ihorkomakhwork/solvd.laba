import { IToken } from './contracts/interfaces';
import { TTtokens } from './contracts/types';
import { LexicalTypes } from './lexicalTypes';

/**
 * Represents a collection of tokens generated from a given code string.
 */
export class Tokens {
    /**
     * Creates a new instance of the `Tokens` class.
     * @param tokens An array of tokens to initialize the instance with.
     */
    constructor(
        private tokens: TTtokens = []
    ) {}
    
    /**
     * Compares two tokens based on their position in the code string.
     * @param a The first token to compare.
     * @param b The second token to compare.
     * @returns A number indicating the order of the tokens.
     */
    static compare (a: IToken , b: IToken){ 
        if (a.position > b.position) return 1;
        else if (a.position < b.position) return -1;    
        else if (a.position === b.position) {
           if (b.type == 'STRING' && a.type == 'DOUBLE_QUOTES') return -1;           
        }
        return 0;
    };
    
    /**
     * Determines whether a given string represents a boolean value.
     * @param value The string to check.
     * @returns `true` if the string represents a boolean value, otherwise `false`.
     */
    static isBoolean(value: string) {
        const isTrue = value === 'true';  
        const isFalse = value === 'false'; 
        return isTrue || isFalse;
    };
    
    /**
     * Determines whether a given string represents a quote character.
     * @param value The string to check.
     * @returns `true` if the string represents a quote character, otherwise `false`.
     */
    static isQuote(value: string) {
        const isQuote = value === '"';
        return isQuote;
    }

    /**
     * Determines whether a given token represents whitespace.
     * @param token The token to check.
     * @returns `true` if the token does not represent whitespace, otherwise `false`.
     */
    static isWhitespace (token: IToken) {
        return token.type !== 'WHITESPACE';
    } 
    
    /**
     * Scans a given code string and generates an array of tokens 
.
     * @param code The code string to scan.
     * @returns An array of tokens generated from the code string.
     */
    public scan(code: string): TTtokens {
        /** 
        *define a variable to check if the current token is an opening quote and
        *define an array to store the positions of the opening and closing quotes
        **/
         let isOpeningQuote = false;
        const stringsPostions: Array<number[]> = [];
        /**
        *iterate over the lexical types that based on the regular expressions
        *and match the tokens in the code string  
        *such number, string, boolean, null, whitespace, colon, comma
        */
        for (let type in LexicalTypes) {
            const exp = LexicalTypes[type];
            let match;

            while (match = exp.exec(code)) {
                const position = match.index;
                let [ value, group ] = match;

                /**
                 * parse the quotes token 
                 */
                if (type === 'DOUBLE_QUOTES') {
                    if (isOpeningQuote) {
                        /**
                         * if the current token is a closing quote,
                         * push the position of the opening and closing quotes to the array
                         * and set the flag to false
                         */
                        const last = stringsPostions.length - 1;
                        stringsPostions[last].push(match.index); 
                        isOpeningQuote = false;
                    } else {
                        /**
                         * if the current token is an opening quote,
                         * push the position of the opening quote to the array
                         * and set the flag to true
                         */
                        isOpeningQuote = true;
                        stringsPostions.push([match.index]);
                    }
                    this.tokens.push({ value, type, position } as IToken);
                    continue;
                }

                /**
                 * parse actual sring position
                 */
                if (group && type === 'STRING'){
                    value = group;
                    this.tokens.push({ value, type, position } as IToken);
                    continue;
                }   

                /**
                 * logic for to avoid parsing special characters inside a string
                 * such as { } [ ] , : null true false
                 */
                let existInString = false
                for (let stringsPostion of stringsPostions) {
                    const [start, end] = stringsPostion;
                    const exist = start <= position && position <= end;
                    if (exist) {
                        existInString = true;
                        break;
                    }  
                }
                if (!existInString) this.tokens.push({ value, type, position } as IToken);    
            }
        }

        /**
         * normalize the tokens array with the deliting unnecessary whitespace
         * and sort the tokens array by position 
         */
        return this.tokens.sort(Tokens.compare).filter(Tokens.isWhitespace);
    }
}
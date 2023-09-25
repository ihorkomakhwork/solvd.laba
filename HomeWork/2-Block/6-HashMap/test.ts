import HashMap from './hashMap';
import fs from 'fs';
import { sha256, sum, binomial, FHash } from './hash';

const FORMAT_LINE = '-------------------------------------------------\n';
const FORMAT_LINE_BOLD = '\n====================================================================\n';
const CONSOLE_MAX = 60; 

const TOKEN_LENGTH = 32;
const ALPHA_UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ALPHA_LOWER = 'abcdefghijklmnopqrstuvwxyz';
const ALPHA = ALPHA_UPPER + ALPHA_LOWER;
const DIGIT = '0123456789';
const ALPHA_DIGIT = ALPHA + DIGIT;


// create simple logging
const logStream = fs.createWriteStream('result.log', { flags: 'a' });

const logger = new console.Console(logStream, logStream);

// generate random value
const generateToken = () => {
  const base = ALPHA_DIGIT.length;
  let key = '';
  for (let i = 0; i < TOKEN_LENGTH; i++) {
    const index = Math.floor(Math.random() * base);
    key += ALPHA_DIGIT[index];
  }
  return key;
};


// if you want to see like actual data stored in bucket
const logState = (map: HashMap) => {
    const buckets =  map.state(); 
    let counter = 1;
    for(let bucket of buckets) {
        logger.log('Bucket:', counter++,);
        logger.log(FORMAT_LINE);
           for(let item of bucket) logger.log(item, '\n');
    };
}; 

// evry bucket is visualized as 10 symbols
// █ - item in bucket
// ▒ - empty space
// So we can easily see how many items in bucket
const visualize = (map: HashMap) => { 
    const buckets =  map.state(); 
    const table: any[] = [];
    // thanks to fact that buckets and linked list are implement
    // contract iterator we can use for of loop
    for(let bucket of buckets) {
        let visualisation: any = [...'▒▒▒▒▒▒▒▒▒▒']; 
        let count = 0;
        for(let item of bucket){
            if (item === null) continue;
            count++;
            visualisation.splice(count - 1, 2, '█', '▒');
            
        }  
        visualisation = visualisation.toString().replace(/,/g, ``);
        
        table.push(visualisation.padEnd(10, ' '));
    };
    return table;
};


// it's better to see graphic representation of data
const logGraph = (map: HashMap) => {
    const table = visualize(map);
    let currentLine = '';
    let resultString = '';
    
    // iterate over visualization items and split it into lines
    // if line length is more than CONSOLE_MAX then start new line
    for (const element of table) {
        const length = currentLine.length + element.length;
        if (length <= CONSOLE_MAX) {
            if (currentLine) currentLine += ' ';
            currentLine += element;
        } else {
            resultString += currentLine + '\n\n';
            currentLine = element;
        }
    }

    // log result
    resultString += currentLine;

    logger.log(FORMAT_LINE);
    logger.log(resultString);
    logger.log(FORMAT_LINE);
}

// fill map with most commons english passwords
const commnsPasswordsFill =  (map: HashMap): void => {
    const contents = fs.readFileSync('passwords.txt', 'utf-8');
    const passwords = contents.split(/\r?\n/);
    
    for (let i = 0; i < passwords.length; i++) {
        const key = passwords[i];
        const value = passwords[i];
        map.set(key, value);
    }

}

// fill map with random data
const randomFil = (map: HashMap) => {
        for (let i = 0; i < 1000; i++) {
        const key = generateToken();
        const value = {
            id: i,
            name: generateToken(),
        };
        map.set(key, value);
    }
    
}

// seed for filling map with data and specific hash function
// and return filled map 
const mapFill =  (hash: FHash,  fill: Function): HashMap => {
    const map = new HashMap(hash);
    fill(map); 
    return map;
};

const sumTest = (): void => {
    const randomBySum = mapFill(sum, randomFil);
    const commonsBySum = mapFill(sum, commnsPasswordsFill);

    logger.log('SIMPLE SUMMARIZING ASCII CODES');
    logger.log(FORMAT_LINE_BOLD);
    
    logger.log('With random data');
    logGraph(randomBySum);
    
    
    logger.log('With most commons english passwords');
    logGraph(commonsBySum);

}
const binomialTest = (): void => {
    const randomByBinomial = mapFill(binomial(1000000), randomFil);
    const commonsByBinomial = mapFill(binomial(1000000), commnsPasswordsFill);
    
    logger.log('BINOMIAL HASHING');
    logger.log(FORMAT_LINE_BOLD);
    
    logger.log('With random data');
    logGraph(randomByBinomial);
    
    
    logger.log('With most commons english passwords');
    logGraph(commonsByBinomial);
};

const sha256Test = (): void => {
    const randomBySha256 = mapFill(sha256, randomFil);
    const commonsBySha256 = mapFill(sha256, commnsPasswordsFill);
    
    logger.log('SHA256 HASHING');
    logger.log(FORMAT_LINE_BOLD);
    
    logger.log('With random data');
    logGraph(randomBySha256);
    
    
    logger.log('With most commons english passwords');
    logGraph(commonsBySha256);
}


{
   //I have wrote 2 use cases: 1000 random values from 
   // digits and letters and 1000 most commons english passwords
   //for 3 hash functions Sum, Binomial, Sha256 
   // because it's more readble than 1 fat function with 3 loops
   const tests = [sumTest, binomialTest, sha256Test]; 
   for (const test of tests) test();
   logStream.end();

}
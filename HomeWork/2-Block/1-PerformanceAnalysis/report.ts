import { generateAccesing, generateDescending, generateRandom} from './range';
import { generateReport } from './benchmark';

const NORMAL_COLOR = '\x1b[1;37m';

const logHeader = (message: string): void => {
  console.log(NORMAL_COLOR);
  console.log(`
=========================================================================  
                              ${message}
=========================================================================`);
  console.log(NORMAL_COLOR);
};

{
    const reportAccesing = generateReport(generateAccesing, 10000 , 500);
    const reportDescending = generateReport(generateDescending, 10000 , 500);
    const reportRandom = generateReport(generateRandom, 10000 , 500);
    
    logHeader('Accesing');
    console.table(reportAccesing);
    
    logHeader('Descending');
    console.table(reportDescending);
    
    logHeader('Random');
    console.table(reportRandom);
};

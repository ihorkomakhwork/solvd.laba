const WORD_FORMAT = /^[a-zA-Zа-яА-Я]+$/; 

const students = [
  {
    name: 'Olena',
    grades: [ 100, 100, 100 ],
  },
  {
    name: 'Boris',
    grades: [ 100, 100, 100 ],
  },
  {
    name: 'Petr',
    grades: [ 100, 100, 100 ],
  }
]

const compose = (...fns) => argument => fns.reduceRight((result, fn) => fn(result), argument);

const getFullName = person => `${person.firstName} ${person.lastName}`;

const sortAlphabetically = arr => arr.sort();

const lowRegister = text => text.toLowerCase();

const unique = text => [...new Set(text.split(' '))];

const format = text => text.filter(word => WORD_FORMAT.test(word));

const filterUniqueWords = compose(sortAlphabetically, format , unique, lowRegister);

const averageOfArray = arr => arr.reduce((sum, number) => sum + number, 0) / arr.length;;

const allGrades = students => students.reduce( (result , student) => student.grades.concat(result) , []);

const getAverageGrade = compose(averageOfArray, allGrades);
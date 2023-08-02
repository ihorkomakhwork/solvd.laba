const students = [
    { name: 'Harry Potter', grade: 10 },
    { name: 'Ron Weasley', grade: 10 },
    { name: 'Hermione Granger', grade: 10 },
    { name: 'Draco Malfoy', grade: 10 },
    { name: 'Neville Longbottom', grade: 10 },
];

const compose = (...fns) => argument => fns.reduceRight((result, fn) => fn(result), argument);

const getFullName = person => `${person.firstName} ${person.lastName}`;

const sortAlphabetically = arr => arr.sort();

const uniqueWords = text => [...new Set(text.split(' '))];

const filterUniqueWords = compose(sortAlphabetically, uniqueWords);

const averageOf = (sum, number) =>  sum / number;

const sumGrades = students => students.reduce((sum, student) => sum + student.grade, 0);

const getAverageGrade = (students) => averageOf(sumGrades(students), students.length);


// KEEP IT SIMPLE AND STUPID
/*
const getAverageGrade = students => {
    const sum = students.reduce((sum, student) => sum + student.grade, 0);
    const average = sum / students.length;
    return average;
};
*/
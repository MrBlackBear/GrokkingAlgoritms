import readlineSync from 'readline-sync';
import selectionSort from '../math/selectionSort';
import makeArray from '../math/makeArray';

const explanation = 'In this file, you have array and we will sort it by Selection Sort \n';

const startSort = () => {
  console.log(explanation);
  const userName = readlineSync.question('Hello! May i have your name? ');
  console.log(`Hello ${userName}\n`);
  const lengthArray = readlineSync.question('Put the length of array : ');
  const array = makeArray([], lengthArray);
  console.log(array);
  console.log('\nAnd now we sort it and you will see sorted array');
  console.log(selectionSort(array));
};

export default startSort;

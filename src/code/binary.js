import readlineSync from 'readline-sync';
import binarySearch from '../math/binary-search';
import makeArray from '../math/makeSortArray';

const explanation = 'In this file, you have array and now you choose number from this array, and at the output you get index of this number in array \n';

const startBinary = () => {
  console.log(explanation);
  const userName = readlineSync.question('Hello! May i have your name? ');
  console.log(`Hello ${userName}\n`);
  const lengthArray = readlineSync.question('Put the length of array : ');
  const array = makeArray([], lengthArray);
  console.log(array);
  const numberFromArray = Number(readlineSync.question('From this array choose number please '));
  console.log(Number(binarySearch(array, numberFromArray)) + 1);
};

export default startBinary;

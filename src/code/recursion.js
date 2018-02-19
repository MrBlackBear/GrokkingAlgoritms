import readlineSync from 'readline-sync';
import recursion from '../math/recursion-factorial';

const explanation = 'In this file, you can see recursion when we calculate factorial of number \n';

const startRecursion = () => {
  console.log(explanation);
  const userName = readlineSync.question('Hello! May i have your name? ');
  console.log(`Hello ${userName}\n`);
  const number = Number(readlineSync.question('Put the number what factorial you want : '));
  const fact = recursion(number);
  console.log('\nNow you see how recursion work.\n\nIn your example we use function factorial while transmitted parametr is not equal to 1.\n\nThen we start to return pending calls and have the result of function - your factorial!\n');
  console.log(`Your factoial = ${fact}`);
};

export default startRecursion;

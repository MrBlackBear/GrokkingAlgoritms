import randomNumber from './random';

const compareNumbers = (a, b) => a - b;

const makeArray = (arr, length) => {
  if (length === 0) {
    arr.sort(compareNumbers);
    return arr;
  }
  arr.push(randomNumber(0, 99));
  return makeArray(arr, length - 1);
};

export default makeArray;

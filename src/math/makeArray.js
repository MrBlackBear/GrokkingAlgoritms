import randomNumber from './random';

const makeArray = (arr, length) => {
  if (length === 0) {
    return arr;
  }
  arr.push(randomNumber(0, 99));
  return makeArray(arr, length - 1);
};

export default makeArray;

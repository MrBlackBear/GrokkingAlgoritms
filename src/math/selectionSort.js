import smallest from '../math/smallestElement';

const selectionSort = (arr) => {
  const lengthArray = arr.length;
  const newArr = [];
  let small;
  for (let i = 0; i < lengthArray; i += 1) {
    small = smallest(arr);
    newArr.push(arr[small]);
    arr.splice(small, 1);
  }
  return newArr;
};

export default selectionSort;

const smallest = (arr) => {
  let small = arr[0];
  let smallestIndex = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < small) {
      small = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
};

export default smallest;

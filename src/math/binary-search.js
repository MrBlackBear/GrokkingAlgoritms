const binarySearch = (arr, item) => {
  let low = 0;
  let high = arr.length - 1;
  let mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (arr[mid] === item) {
      return mid;
    } else if (arr[mid] > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
};

export default binarySearch;

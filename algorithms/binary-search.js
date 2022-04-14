const vector = [1, 2, 3, 5];
const bynarySearch = (vector, value) => {
  let start = 0;
  let end = vector.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (vector[middle] !== value && start <= end) {
    if (value < vector[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  return vector[middle] === value ? middle : -1;
};

console.log(bynarySearch(vector, 5));

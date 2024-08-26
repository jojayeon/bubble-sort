function generateRandomArray(length, max) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * max) + 1);
  }
  return arr;
}

function compare(a, b) {
  return a - b;
}

function bubblesort(arr) {
  return arr.sort(compare);
}

const RandomArray = generateRandomArray(10, 100);
console.log(RandomArray);

const sortArray = bubblesort(RandomArray);
console.log(sortArray);

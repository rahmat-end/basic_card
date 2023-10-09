// forEach
const arr = [1, 2, 3, 4, 5];
arr.forEach(function (item) {
  console.log(item);
});

// map
const arr2 = [1, 2, 3, 4, 5];
const doubled = arr2.map((item) => {
  return item * 2;
});

console.log(doubled);

// filter
const arr3 = [1, 2, 3, 4, 5];
const evenNumbers = arr3.filter(function (item) {
  return item % 2 === 0;
});

console.log(evenNumbers);

// reduce
const arr4 = [1, 2, 3, 4, 5];
const sum = arr4.reduce(function (total, item) {
  return total + item;
}, 0);

console.log(sum);

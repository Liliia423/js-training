/*function filterArray(numbers, value) {
  const newFilterArray = [];
  for (let i = 0; i < newFilterArray.length; i += 1) {
    if (numbers > value) {
      return newFilterArray.push(numbers);
    }
  }
}

console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));*/

/*function filterArray(numbers, value) {
  let newFilterArray = [];
  for (let number of numbers) {
    newFilterArray.push(number);
  }
  return newFilterArray;
}

console.log(filterArray([1, 2, 3, 4, 5], 3));*/

function filterArray(numbers, value) {
  let newFilterArray = [];

  for (let number of numbers) {
    if (number > value) {
      newFilterArray.push(number);
    }
  }
  return newFilterArray;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

/*оптимізовано ChatGPT 4o with canvas
function filterArray(numbers, value) {
  return numbers.filter(number => number > value);
}*/

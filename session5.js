let Test1 = [2, "11", 3, "a2", false, 5, 7, 1];
let Test2 = [2, 3, 0, 5, 7, 8, true, false];

function sumOfNumbersInArray(arr) {
  let sum = 0;

  for (const num of arr) {
    if (typeof num === 'number' && !isNaN(num)) {
      sum += num;
    }
  }

  return sum;
}

const result1 = sumOfNumbersInArray(Test1);
console.log(result1);

const result2 = sumOfNumbersInArray(Test2);
console.log(result2);


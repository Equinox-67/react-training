let numbers = [12, 45, 34, 23, 90, 56, 78, 51, 10, 30, 20, 19, 89];

const evenNumbers = numbers.filter(function callback(number) {
  let num = number % 2 === 0
  return num
});
console.log(evenNumbers);

let numbers2 = [12, 45, 34, 23, 90, 56, 78, 51, 10, 30, 20, 19, 89];
const oddNumber = numbers2.filter(function callback(number2) {
  let num2 = number2 % 2 !== 0;
  return num2
})
console.log(oddNumber)
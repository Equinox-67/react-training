let Test = [2, "11", 3, "a2", false, 5, 7, 1];

let total = 0

for (let item of Test) {
  if (typeof item === 'number') {
    total+=item
  }
}
console.log(total)
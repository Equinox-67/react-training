let Test = [2, "11", 3, "a2", false, 5, 7, 1];

let total = 0

for (let i = 0; i <= Test.length; i++) {
  if (typeof Test[i] === 'number') {
    total+=Test[i];
  }
}

console.log(total)
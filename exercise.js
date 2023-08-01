const statuses = ["system_enabled", "system_disabled", "customer_enabled", "customer_disabled"];

const result = [];

statuses.forEach(function (status, index, object) {
  status = `${object.slice(1,2)}, ${object.slice(3, 4)}`;
  result.push(status);
})
//check retry.js for corrections
console.log(result)

// Assignment 2

let studentAndScores = [
  {firstName: 'John',   lastName: 'Doe',     score: 23},
  {firstName: 'Jane',   lastName: 'Akinola', score: 79},
  {firstName: 'Basit',   lastName: 'Aina',    score: 15},
  {firstName: 'Olamide', lastName: 'Oguntan', score: 65},
  {firstName: 'Sanni',   lastName: 'Tijani',  score: 65},
]

const studentName = studentAndScores.map(function callback(item) {
  if (item.score >=0 && item.score <= 40) {
    item.score = 'D';
  } else if(item.score <= 60) {
    item.score = 'C';
  } else if(item.score <= 80) {
    item.score = 'B';
  } else if(item.score <= 100) {
    item.score = 'A';
  }
  let fullName = `${item.firstName} ${item.lastName},  ${item.score}`;
  return fullName;
})

console.log(studentName);

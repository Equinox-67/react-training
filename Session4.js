// array.filter

const statuses = ["system_enabled", "system_disabled", "customer_enabled", "customer_disabled"];

result2 = statuses.filter(function callback(item) {
  return item.endsWith("disabled")
})

console.log(result2)


//array.find

let studentAndScores = [
  {firstName: 'John',   lastName: 'Doe',     score: 23},
  {firstName: 'Jane',   lastName: 'Akinola', score: 79},
  {firstName: 'Basit',   lastName: 'Aina',    score: 15},
  {firstName: 'Olamide', lastName: 'Oguntan', score: 65},
  {firstName: 'Sanni',   lastName: 'Tijani',  score: 65},
]

const studentAina = studentAndScores.filter(function callback(item) {
  return item.lastName === "Aina";
})

console.log(studentAina)
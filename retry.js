const statuses = ["system_enabled", "system_disabled", "customer_enabled", "customer_disabled"];

const result1 = [];

statuses.forEach(function (status) {
  if (status === "system_disabled" || status === "customer_disabled") {
    result1.push(status); 
  }
})

console.log(result1)

const result2 = [];

statuses.forEach(function (status) {
  if (status.endsWith("sabled")) {
    result2.push(status); 
  }
})

console.log(result2)

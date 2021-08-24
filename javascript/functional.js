// functions first class citizens
function sum(a, b) {
  return a + b
}

sum(1,2)

const sum2 = sum

// sum(callback)

// immutability
// objects dont change

// pure functions
// given the same argument returns the same result. The function is predictable
sum(1,2)

// doesnt have side effects
let res = 10

function sub(a) {
  res -= a
  return res
}

console.log(sub(1))
console.log(sub(1))
console.log(sub(1))
console.log(sub(1))
console.log(sub(1))

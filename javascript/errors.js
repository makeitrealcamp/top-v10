// const foo = undefined
// foo()

class DivideByZeroError extends Error {
  constructor(message) {
    super(message)
    this.name = 'DivideByZeroError'
  }
}

function div(a, b) {
  if(b === 0) {
    throw new DivideByZeroError('Cannot divide by zero')
  }
  return a / b
}

try {
  console.log(div(1, 0))
} catch(error) {
  console.error(error)
}


console.log('hola mundo')

// function sum() {
//   return sum()
// }

// sum()

// Default arguments
function sum(a = 0, b = 0) {
  // if(a === undefined) {
  //   a = 0
  // }

  // if(b === undefined) {
  //   b = 0
  // }

  return a + b
}

// console.log(sum(1, 2))

// Template Literals
const title = 'hola mundo'
const content = 'lorem ipsum'
// const html = '<body><div><h1>' + title + '</hi><p>' + content + '</p></div></body>'

const html = `
  <body>
    <h1>${2 + 2}</h1>
    <p>${content}</p>
  </body>
`

// console.log(html)

// Destructuring
const obj = { a: 1, b: 2, c: 3 }
const obj2 = { a: 4 }

// const a = obj.a
// const b = obj.b
// const c = obj.c

const { a, b, c } = obj
// console.log(a, b, c)

const { a: a2 } = obj2
// console.log(a2)

// function person(name, age, working, course, lastname) {
function person({
  name,
  lastname = 'Lopez',
  age = 18,
  working = false,
  course = 'TOP'
}) {
}

person({ name: 'maria', lastname: 'lopez' })

const arr = [1,2,3]

// const first = arr[0]
// const second = arr[1]
// const third = arr[2]

const [ first, loquesea, tres ] = arr
// console.log(first, loquesea, tres)

const nested = {
  users: [
    { name: 'maria' },
    { name: 'juan' }
  ]
}

// const { users: [ { name: maria }, { name: juan } ] } = nested
const { users } = nested
const [ maria, juan ] = users

// console.log(maria, juan)

// Spread Operator
const numbers = [10, 4, 24, 39]
const max = Math.max(...numbers)
// console.log(max)

const user = {
  name: 'maria',
  age: 24,
  working: true,
  course: 'TOP',
}

const userCopy = { ...user }

// Rest
const { name, age, ...rest } = user
const [ _, ...restNumbers] = numbers

// console.log(name, rest)
// console.log(restNumbers)

// shorthand properties & trailing comma
const reference = 'huevos'
const price = 10
const description = 'lorem ipsum'

const product = {
  reference,
  price,
  description,
}

// console.log(product)

// let & const
// const foo = 0;
// foo = 2
// foo = 3

const foo = []
foo.push(1)

console.log(foo)

// fat arrow functions
// function sub (a, b) {
//   return b - a
// }

const sub = (a, b) => b - a

// class

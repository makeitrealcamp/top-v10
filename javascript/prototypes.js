// object literals
// const maria = {
//   name: 'maria',
//   age: 28,
//   greet: function () {
//     console.log('hola mi nombre es ' + this.name)
//   }
// }

// const juan = {
//   name: 'juan',
//   age: 24,
//   greet: function () {
//     console.log('hola mi nombre es ' + this.name)
//   }
// }

// maria.greet()
// juan.greet()

// object factories
// function person(name, age, height, weight) {
//   const bmi = height / weight

//   return {
//     name: name,
//     age: age,
//     bmi: bmi,
//     greet: function () {
//       console.log('hola mi nombre es ' + this.name)
//     }
//   }
// }

// const maria = person('maria', 28)
// const juan = person('juan', 24)

// maria.greet()
// juan.greet()
// console.log(maria.greet === juan.greet)

// prototypes
// function Person(name, age) {
//   this.name = name
//   this.age = age
// }

// Person.prototype.greet = function () {
//   console.log('hola mi nombre es ' + this.name)
// }

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  greet() {
    console.log('hola mi nombre es ' + this.name)
  }
}


// const maria = new Person('maria', 28)
// const juan = new Person('juan', 24)

// console.log(maria)
// console.log(maria.hasOwnProperty('name'))
// maria.greet()
// juan.greet()
// console.log(maria.greet === juan.greet)

// function Teacher(course, name, age) {
  // this = { constructor: Teacher, name: 'simon' }
  // Person.call(this, name, age)
  // this.course = course
// }

// Teacher.prototype = new Person()
// Teacher.prototype.constructor = Teacher

// Teacher.prototype.teach = function () {
//   console.log('teaching ' + this.course)
// }

class Teacher extends Person {
  constructor(course, name, age) {
    super(name, age)
    this.course = course
  }

  teach() {
    console.log('teaching ' + this.course)
  }
}

// const simon = new Teacher('TOP', 'simon', 28)

// console.log(simon)
// simon.teach()
// simon.greet()

// polyfills
// Array.prototype.map2
let arr = [1,2,3]

const double = (value, index, array) => {
  console.log({
    value: value,
    index: index,
    array: array
  })

  return value * 2
}

const triple = (value, index, array) => {
  return value * 3
}

let arr2 = arr.map(double)

console.log(arr2)

// if(!arr.map) {
Array.prototype.map2 = function(callback) {
  const arr = []

  for(let i = 0; i < this.length; i++) {
    const newEl = callback(this[i], i, this)
    arr.push(newEl)
  }

  return arr
}
// }

const arr3 = arr.map2(double)
const arr4 = arr.map2(triple)

console.log(arr3)
console.log(arr4)

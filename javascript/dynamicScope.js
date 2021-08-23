// 'use strict'
// this

// function foo(ctx) {
//   console.log(ctx)
//   console.log(this.bar)
// }

// In arrow this points to the context where the function was create
// exports.bar = 'module'
const foo = (ctx) => {
  console.log(ctx)
  console.log(this)
}

// let bar = 'global'

// 1. Default. This points to Global or Window object. If strict mode is enabled this is undefined
// foo('global')

// 2. If function is called from an object this points to the object
let obj = {
  bar: 'object',
  // foo: foo
  foo: () => {
    console.log('obj', this)
  }
}

obj.foo('obj')

// 3. binding
let obj2 = {
  bar: 'object 2'
}

// soft binding

foo.call(obj2, 'obj2 call', 2, 3)
foo.apply(obj2, ['obj2 apply', 2, 3])
obj.foo.call(obj2, 'obj obj2 call')
obj.foo('obj after call')

// const scores = [1,2,3,4,5]
// const res = Math.max.apply(null, scores)
// console.log(res)

// hard binding
const obj3 = {
  bar: 'object 3'
}

const foo2 = foo.bind(obj3, 'hard binding', 2, 3)
// function foo2(ctx) {
//   return foo.call(obj3, ctx)
// }

foo2()
foo2.call(obj2)

const obj4 = {
  bar: 'object 4',
  foo: foo2
}

obj4.foo()

// 4. Prototyping. using new keyword this is defined following the next steps:
//
//  1. It creates a new object
//  2. It associates the new object with another object
//  3. It assign the new object to this
//  4. If the prototype function does not return an object, then it returns this

function Person(name, age) {
  // this = { constructor: Person, name: 'maria', age: 28 }
  this.name = name
  this.age = age

  this.greet = () => {
    console.log(this.name)
  }

  // return 1
  // return {}
  // return this
}

const p1 = new Person('maria', 28)
const p2 = new Person('martin', 28)

console.log(p1)
console.log(p1.constructor)
console.log(p2)

p1.greet()

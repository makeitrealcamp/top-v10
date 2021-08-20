// Arrays
let arr = [1,2,3]

// mutable vs immutable

// copiar
// let arr2 = [].concat(arr)
// let arr2 = arr.slice()
// let arr2 = [...arr]

// console.log(arr, arr2, arr === arr2)

// obtain
// const el = arr[1]
// console.log(el)

// add
// at the end
// arr.push(4)
// console.log(arr)

// let arr2 = arr.concat(4).concat(5).concat(6).concat([7,8,9])
// let arr2 = [...arr, 4,5,6]

// at the beginning
// arr.unshift(0)
// console.log(arr)

// let arr2 = [-1, 0].concat(arr)
// let arr2 = [-1, 0, ...arr]

// at the middle
// arr.splice(1, 0, 2.3, 2.5, 2.7)
// console.log(arr)

// let first = arr.slice(0, 1)
// let second = arr.slice(1)
// let arr2 = first.concat(1.5).concat(second)
// let arr2 = arr.slice(0,1).concat(1.5).concat(arr.slice(1))

// modify
// arr[1] = 5
// arr.splice(1, 1, 5)
// console.log(arr)

// let arr2 = arr.slice(0, 1).concat(6).concat(arr.slice(2))

// delete
// at the end
// arr.pop()
// console.log(arr)

// let arr2 = arr.slice(0, -1)

// at the beginning
// arr.shift()
// console.log(arr)

// let arr2 = arr.slice(1)

// at the middle
// arr.splice(0, 1)
// console.log(arr)

// let arr2 = arr.slice(0, 1).concat(arr.slice(2))

// iterate
// for(let element of arr) {
//   console.log(element)
// }

// let arr2 = arr.map((value, index) => {
//   return value * 2
// })

// let arr2 = arr.filter((value, index) => {
//   return index % 2 === 0
// })

// arr.forEach((value, index) => {
//   console.log(value)
// })

let res = arr.reduce((acc, value, index) => {
  return acc + value
}, 0)

console.log(res)

// console.log(arr2)

// Objects
let obj = { a: 1, b: 2, c: 3 }

// copiar
// let obj2 = Object.assign({}, obj)
// let obj2 = { ...obj }

// obtain
// console.log(obj.a)

// const el = obj['a']

// const key = 'a'
// function getKey() {
//   return 'a'
// }

// const el = obj[getKey()]
// console.log(el)

// add
// obj['d'] = 4
// obj.e = 5

// let obj2 = Object.assign({}, obj, { d: 4, e: 5 })
// let obj2 = { ...obj, d: 4, e: 5 }

// console.log(obj)

// modify
// obj['a'] = 6
// obj.b = 6

// let obj2 = Object.assign({}, obj, { a: 6 })
// let obj2 = { ...obj, a: 6 }

// console.log(obj)

// delete
// delete obj.a
// delete obj['b']

// console.log(obj)

// console.log(obj2)

// iterate
// const keys = Object.keys(obj)
// console.log(keys)

// for(let i = 0; i < keys.length; i++) {
//   console.log(obj[keys[i]])
// }

// for(let key in obj) {
//   console.log(key, obj[key])
// }

// primitivos
// numbers, string, boolean, undefined, null

// value vs reference
// const arr1 = [1,2,3]
// const arr2 = [1,2,3]
// const arr3 = arr1

// console.log(arr1 === arr2)
// console.log(arr1 === arr3)

// arr3.push(4)
// console.log(arr1)

// function compare(a, b) {
//   if(a.length !== b.length) return false

//   for(let i = 0; i < a.length; i++) {
//     const res = a[i] === b[i]

//     if(!res) {
//       return false
//     }
//   }

//   return true
// }

// console.log(compare(arr1, arr2))

// implicit coercion
// console.log(1 + '1') // 11
// console.log(1 - '1') // 0
// console.log([] + []) // [].join(',') + [].join(',')
// console.log([1,2,3] + 4) // '1,2,34'
// console.log(false + '1')
// console.log(false + 2)

// console.log(1 == '1')
// console.log(false == '')

// falsy values
// undefined, null, 0, '', NaN, -0, false

// truthy values
// rest

// const user = null

// if(user) {
//   console.log('user exists')
// }

// type coercion
// console.log(Number('1'))
// console.log(parseInt('1'))
// console.log(+'1')

// lexical scope
// static scope
// var foo = 'foo'

// function bar() {
//   let doo = 'doo'
//   var baz = 'baz'

//   function goo() {
//     var fuz = 'fuz'

    // bar()
    // console.log(fuz)
    // console.log(baz)
    // console.log(foo)
    // goo()
//   }
// }
// Global
//   foo
//   far
//   i
//   j
//   bar
//     baz
//     goo
//       fuz

// if(true) {
//   let far = 'far'
// }

// for(var i = 0; i < arr.length; i++) {
//   var j = 'j'
// }

// hoisting
// var foo;
// var goo;
// console.log(foo)
// var foo = 1

// goo()
// baz()

// function baz() {
  // var joo;
//   var joo = 2
//   return joo
// }

// var anonym = function () {
// }

// var goo = () => {
// }

// Left Hand Opertaions - declarations
// var foo
// function faz
// let i
// const j

// Right Hand Operations - assign

// closures
// una función que aún siendo invocada por fuera de su lexical, tiene acceso a su lexical scope. Derechos de nacimineto de la función

// reference
// function greet() {
//     console.log('hola mundo')
// }

// const greet2 = greet
// greet2()

// value
// function sum(a, b) {
//     return a + b
// }

// const res = sum(1,2)


// function calc() {
//   let res = 0

//     function sum(num) {
//         res += num
//         return res
//     }

//     return sum
// }

// const myCalc = calc()
// const myCalc2 = calc()

// myCalc(1)
// myCalc(2)
// console.log(myCalc(3))

// console.log(myCalc2(5))

// function car() {
//     let speed = 0

//     function accelerate() {
//         speed++
//     }

//     function stop() {
//         speed--
//     }

//     function getSpeed() {
//         console.log(speed)
//     }

//     return {
//         accelerate: accelerate,
//         stop: stop,
//         getSpeed: getSpeed,
//     }
// }

// const martin = car()
// martin.accelerate()
// martin.accelerate()
// martin.stop()
// martin.getSpeed()
// martin.speed = 10
// martin.getSpeed()

// function multiply(base) {
//     return function (num) {
//         return base * num
//     }
// }

// const multiplyBy2 = multiply(2)
// const multiplyBy5 = multiply(5)
// const multiplyBy7 = multiply(7)

// console.log(multiplyBy2(3))
// console.log(multiplyBy2(10))
// console.log(multiplyBy5(4))
// console.log(multiplyBy7(6))

let foo = 1;

function multiplyBy10(arg) {
    const cache = { }

    function multiply(num) {
        // console.log(arg)
        // console.log(foo)
        if(cache[num]) {
            console.log('retrieving from cache')
            return cache[num]
        }

        console.log('calculating...')
        cache[num] = foo * num

        return cache[num]
    }

    return multiply
}

function setFoo(num) {
    foo = num
}

const myFun = multiplyBy10(foo)

setFoo(5)
console.log(myFun(2))
console.log(myFun(3))


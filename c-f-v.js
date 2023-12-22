// Conditional - variables - functions //

// *********** 1 *************

var carName = "Volvo"

// ************ 2 *********

var length = 16 //number

var lastName = "Johnson" // string

var scores = [20, 12, 15, 14, 20, 10, 2] // array

var person = {
     firstName: "John", // Object
     lastName: "Doe",
}

var isGreaterThan10 = length > 10 // boolean

// ************ 3 *********

function square(x) {
     return x ** 2
}

// ************ 4 *********

function largest(x, y) {
     if (x > y) {
          return x
     }
     return y
}

// ************ 5*********

function add(n1, n2) {
     console.log(n1 + n2)
}

// ************ 6*********

function substract(n1, n2) {
     console.log(n1 - n2)
}

// ************ 7*********

function addOrSubstract(operator) {
     var firstNum = 6
     var secondNum = 2

     if (operator === "+") {
          return add(firstNum, secondNum)
     }
     return substract(firstNum, secondNum)
}

console.log(addOrSubstract("+")) // output : 8
console.log(addOrSubstract("-")) // output : 6

// ************ 8*********

function multiply(n1, n2) {
     console.log(n1 * n2)
}

function divide(n1, n2) {
     console.log(n1 / n2)
}

divide(6, 2)

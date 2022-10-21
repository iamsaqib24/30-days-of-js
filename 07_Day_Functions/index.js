console.log("Day 07 - Functions");

// A function can be declared or created in couple of ways:
// 1) Function Declaration
// 2) Function Expression
// 3) Anonymous Function
// 4) Arrow Function

// Function declaration,

function square() {
    let num = 4;
    let square = num * num;
    console.log(square);
}
square();

// Function returning value,

function addition() {
    let number = 4;
    let number2 = 6;
    let total = number + number2;
    return total;
}
let sum = addition();
console.log(sum);
console.log(addition());

// Function with a parameter,

function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
}
console.log(areaOfCircle(10));

// Function with many parameters,

function sumArrayValues(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
let arr1 = [1, 2, 3, 4, 5];
console.log(sumArrayValues(arr1));
console.log(sumArrayValues([2, 4, 6, 8]));          // we can also directly pass array.


// Anonymous function or without name,

const helloWorld = function() {
    console.log("Hello World from Anonymous function!");
}
helloWorld();


// Expression Function,
// Expression functions are anonymous functions. After we create a function without a name and we assign it to a variable. To return a value from the function we should call the variable. Look at the example below.

const multiplication = function(x, y, z) {
    return x * y * z;
}
console.log(multiplication(2, 4, 1));


// Self Invoking Functions,
// Self invoking functions are anonymous functions which do not need to be called to return a value.

let squaredNum = (function(n) {
    return n * n;
})(10)

console.log(squaredNum);


// Arrow Function,
// Arrow function is an alternative to write a function, however function declaration and arrow function have some minor differences.
// Arrow function uses arrow instead of the keyword function to declare a function.

const changeToUpperCase = arr => {
    const newArr = [];
    for (const element of arr) {
      newArr.push(element.toUpperCase());
    }
    return newArr;
}
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'];
console.log(changeToUpperCase(countries));

// Another example of arrow function,

const printFullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(printFullName('Mohammad', 'Saqib'));

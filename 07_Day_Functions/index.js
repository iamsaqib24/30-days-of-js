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


// Expression Function

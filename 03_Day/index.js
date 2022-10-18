// console.log("03-Day!");

// let a
// console.log(a);         // undefined

// a = 5
// console.log(a);         // 5

// let empty = null
// console.log(empty);     // null -> means no value


// // Arithmetic Operators:

// let num1 = 8
// let num2 = 2
// console.log(`Sum is : ${num1 + num2}`);
// console.log(`Difference is : ${num1 - num2}`);
// console.log(`Multiplication is : ${num1 * num2}`);
// console.log(`Divison is : ${num1 / num2}`);
// console.log(`Remainder is : ${num1 % num2}`);
// console.log(`Power is : ${num1 ** num2}`);


// // Comparison Operators:

// console.log(3 > 2)              // true, because 3 is greater than 2
// console.log(3 >= 2)             // true, because 3 is greater than 2
// console.log(3 < 2)              // false,  because 3 is greater than 2
// console.log(2 < 3)              // true, because 2 is less than 3
// console.log(2 <= 3)             // true, because 2 is less than 3
// console.log(3 == 2)             // false, because 3 is not equal to 2
// console.log(3 != 2)             // true, because 3 is not equal to 2
// console.log(3 == '3')           // true, compare only value
// console.log(3 === '3')          // false, compare both value and data type
// console.log(3 !== '3')          // true, compare both value and data type
// console.log(3 != 3)             // false, compare only value
// console.log(3 !== 3)            // false, compare both value and data type
// console.log(0 == false)         // true, equivalent
// console.log(0 === false)        // false, not exactly the same
// console.log(0 == '')            // true, equivalent
// console.log(0 == ' ')           // true, equivalent
// console.log(0 === '')           // false, not exactly the same
// console.log(1 == true)          // true, equivalent
// console.log(1 === true)         // false, not exactly the same
// console.log(undefined == null)  // true
// console.log(undefined === null) // false
// console.log(NaN == NaN)         // false, not equal
// console.log(NaN === NaN)        // false
// console.log(typeof NaN)         // number

// console.log('mango'.length);    // 5
// console.log('avocado'.length);  // 7
// console.log('mango'.length == 'avocado'.length)  // false
// console.log('mango'.length != 'avocado'.length)  // true
// console.log('mango'.length < 'avocado'.length)   // true
// console.log('milk'.length == 'meat'.length)      // true
// console.log('milk'.length != 'meat'.length)      // false
// console.log('tomato'.length == 'potato'.length)  // true
// console.log('python'.length > 'dragon'.length)   // false


// // Logical Operators:
// // The following symbols are the common logical operators: &&(ampersand) , ||(pipe) and !(negation). The && operator gets true only if the two operands are true. The || operator gets true either of the operand is true. The ! operator negates true to false and false to true.

// // && example,

// console.log(4 > 3 && 3 < 5);            // true && true -> true
// console.log(4 < 2 && 5 > 2);            // false && true -> false
// console.log(4 < 1 && 5 < 3);            // false && false -> false

// // || pipe or operator, example

// console.log(4 > 3 || 10 > 5);           // true  || true -> true
// console.log(4 > 3 || 10 < 5);           // true  || false -> true
// console.log(4 < 3 || 10 < 5);           // false || false -> false

// // ! Negation examples

// let check = 4 > 3
// console.log(check);                     // true
// check = !(4 > 3)
// console.log(check);                     // false
// let isLightOn = true
// let isLightOff = !isLightOn
// console.log(isLightOff);                // false
// let isMarried = !false
// console.log(isMarried);                 // true


// Increment Operator:
// Pre-increment operator,

let preCount = 0
console.log(++preCount)        // 1
console.log(preCount)          // 1

// Post-increment operator,
let postCount = 0
console.log(postCount++)        // 0
console.log(postCount)          // 1


// Ternary Operator:
//Ternary operator allows to write a condition. Another way to write conditionals is using ternary operators. Look at the following examples:

let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')

isRaining = false
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
//
let number = 5
number > 0
    ? console.log(`${number} is a positive number`)
    : console.log(`${number} is a negative number`)

number = -5
number > 0
    ? console.log(`${number} is a positive number`)
    : console.log(`${number} is a negative number`)

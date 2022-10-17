// Primitive & Non-Primitive Data Types:

// Primitive Data Types: (immutable)
// (Numbers, String, Booleans, null, undefined, Symbols)

let word = "JavaScript"
console.log(word)   // JavaScript
word[0] = "Y"       // Won't work/change
console.log(word)   // JavaScript

// Non-Primitive Data Types: (Arrays, Objects)
// It cannot be compared by value, because they are being compared by reference instead of value.

let arr = ["Apple", "OnePlus", "Samsung", "Pixel"]

arr[3] = "Google"

console.log(arr)

let arr1 = ["Apple", "OnePlus", "Samsung", "Pixel"]

console.log(arr == arr1)        // false

let arr2 = arr

console.log(arr == arr2)        // true


// Math Objects:

const gravity = 9.81
const PI = Math.PI
console.log(PI)                     // 3.141592
console.log(Math.round(PI))         // 3
console.log(Math.round(gravity))    // 10
console.log(Math.floor(PI))         // 3 rounding down
console.log(Math.ceil(PI))          // 4 rounding up
console.log(Math.min(20, 30, -10, -25, 0, 50))      // -25
console.log(Math.max(20, 30, -10, -25, 0, 50))      // 50
// generate random numbers form 0 to 0.999999
const randomNum = Math.floor(Math.random() * 11)
console.log(randomNum)


// String Methods:
let js = "JavaScriptia"
console.log(js.length)

console.log(js.length - 1);         // last index of a string,

console.log(js.toLowerCase());
console.log(js.toUpperCase());

// substr(): It takes two arguments, the starting index and number of characters to slice.
console.log(js.substr(4,6));        // Script

// substring(): It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.
console.log(js.substring(4,6))      // Sc

// split(): The split method splits a string at a specified place.
console.log(js.split())
console.log(js.split(','))

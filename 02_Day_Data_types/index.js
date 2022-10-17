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
let js = "JavaScript is awesome"
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
console.log(js.split(' '))

// trim(): Removes trailing space in the beginning or the end of a string.
console.log(js.trim(' '))

// includes(): It takes a substring argument and it checks if substring argument exists in the string. includes() returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false.
console.log(js.includes('isnot'));      // false
console.log(js.includes('is'));         // true

// replace(): takes as a parameter the old substring and a new substring.
console.log(js.replace("awesome", "superb"));

// charAt(): Takes index and it returns the value at that index
console.log(js.charAt(4));              // S
console.log(js.charAt(0));              // J

// charCodeAt(): Takes index and it returns char code (ASCII number) of the value at that index
console.log(js.charCodeAt(0));
console.log(js.charCodeAt(4));

// indexOf(): Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1
console.log(js.indexOf('S'));           // 4
console.log(js.indexOf('superb'));      // -1

// startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
console.log(js.startsWith('JavaScript'));           // true
console.log(js.startsWith('javascript'));           // false - case sensitive

// endsWith: it takes a substring as an argument and it checks if the string ends with that specified substring. It returns a boolean(true or false).
console.log(js.endsWith('JavaScript'));             // false
console.log(js.endsWith('awesome'));                // true

// search: it takes a substring as an argument and it returns the index of the first match. The search value can be a string or a regular expression pattern.
console.log(js.search('is'));

// match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
// let pattern = /love/gi
console.log(string.match('love'));
console.log(string.match(/love/gi));

// repeat(): it takes a number as argument and it returns the repeated version of the string.
let str = 'js'
console.log(str.repeat(5));


// Changing Data Types (Casting):

// String to Int :- parseInt(), Number(), Plus sign(+)
let num = '26'
let newInt = parseInt(num)
console.log(newInt);

let newNum = '10'
console.log(typeof newNum);
console.log(Number(newNum));

let lastNum = "20"
console.log(typeof lastNum);
console.log(+lastNum);


// String to Float :- parseFloat(), Number(), Plus sign(+)

let floatNum = '3.14'
console.log(typeof floatNum);
console.log(parseFloat(floatNum));

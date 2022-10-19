// Arrays

const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)

console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)


// Creating an array using split,

let js = "JavaScript"
const charsInJavaScript = js.split('')
console.log("New Array using Split : ", charsInJavaScript);

let companiesString = 'Facebook, Apple, Amazon, Oracle, Google'
const companies = companiesString.split(',')
console.log(companies);

let txt = "My name is Saqib. I am learning JavaScript."
const txtArray = txt.split(' ')
console.log(txtArray);


// Modifying array elements:

countries[0] = "India"
let lastIndex = countries.length - 1
countries[lastIndex] = "Japan"
console.log(countries);


// Methods to manipulate arrays:

// fill: Fill all the array elements with a static value
let arr = new Array(4).fill("js")
console.log(arr);

// concat: To concatenate two arrays.
let firstArray = [1, 2, 3, 5]
let secondArray = [4, 6, 7]
console.log(firstArray.concat(secondArray))

// indexOf: To check if an item exist in an array. If it exists it returns the index else it returns -1.
console.log(firstArray.indexOf(5));
console.log(firstArray.indexOf(2));

// includes: To check if an item exist in an array. If it exist it returns the true else it returns false.
let numbersNew = [2, 4, 8, 16, 32, 64]
console.log(numbersNew.includes(16));
console.log(numbersNew.includes(128));

// Array.isArray: To check if the data type is an array
let num = 100
console.log(Array.isArray(num));
console.log(Array.isArray(numbersNew));

// toString: Converts array to string
console.log(numbersNew.toString());
console.log(countries.toString());

// join: It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string. By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.
const names = ["Saqib", "Tajinder", "Raavi", "Shipra"]
console.log(names.join());
console.log(names.join(''));
console.log(names.join(' '));
console.log(names.join(', '));
console.log(names.join(' # '));

// Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.
const numbers1 = [1,2,3,4,5]
console.log(numbers1.slice()) // -> it copies all  item
console.log(numbers1.slice(0)) // -> it copies all  item
console.log(numbers1.slice(0, numbers.length)) // it copies all  item
console.log(numbers1.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position

// reverse: reverse the order of an array.
console.log(numbers1.reverse());

// sort: arrange array elements in ascending order.
const arr1 = [6, 2, 1, 9, 5, 8]
console.log(arr1.sort());

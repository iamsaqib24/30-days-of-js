// Decrement

// for(let i = 10; i >= 5; i--) {
//     console.log(i);
// }

// Increment

// for(let i = 0; i <= 5; i++) {
//     console.log(i);
// }


// Adding elements to new array in uppercase

// let countries = ["India", "Singapore", "Canada", "Dubai", "Australia"];
// let newArray = [];

// Before push operation
// console.log(countries);
// console.log(newArray);

// for(let i = 0; i < countries.length; i++) {
//     newArray.push(countries[i].toUpperCase());
// }

// After push operation
// console.log(countries);
// console.log(newArray);


// Adding elements in the array

const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);

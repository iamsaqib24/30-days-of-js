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

// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// for(let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }
// console.log(sum);

// Creating a new array based on the existing array

// const numbers = [1, 2, 3, 4, 5];
// const newArr = [];
// for(let i = 0; i < numbers.length; i++) {
//     newArr.push(numbers[i] ** 2);
// }
// console.log(numbers);
// console.log(newArr);


// for of loop

// const numbers = [1, 2, 3, 4, 5];
// for (const num of numbers) {
//     console.log(num * num);
// }

// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// for (const num of numbers) {
//     sum+= num;
// }
// console.log(sum);

// const countries = ["India", "Japan", "China", "Thailand", "Singapore"];
// const newArr = [];

// for (const country of countries) {
//     newArr.push(country.toUpperCase());
// }
// console.log(newArr);

// Break
for(let i = 0; i < 5; i++) {
    if (i == 3) {
        break;
    }
    console.log(i);
}

// Continue
for(let i = 0; i < 5; i++) {
    if (i == 2) {
        continue;
    }
    console.log(i);
}
